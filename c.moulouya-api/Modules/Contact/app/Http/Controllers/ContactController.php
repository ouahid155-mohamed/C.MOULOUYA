<?php

namespace Modules\Contact\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Contact\Models\ContactMessage;

class ContactController extends Controller
{
    // POST /api/contact — depuis le site public (sans auth)
    public function store(Request $request)
    {
        $request->validate([
            'nom'     => 'required|string|max:255',
            'email'   => 'required|email',
            'tel'     => 'nullable|string|max:20',
            'message' => 'required|string',
        ]);

        $msg = ContactMessage::create($request->only('nom', 'email', 'tel', 'message'));

        return response()->json([
            'message' => 'Message envoyé avec succès.',
            'data'    => $msg,
        ], 201);
    }

    // GET /api/admin/contact/messages — liste (admin)
    public function index(Request $request)
    {
        $messages = ContactMessage::orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json($messages);
    }

    // GET /api/admin/contact/messages/{id} — détail (admin)
    public function show($id)
    {
        $msg = ContactMessage::findOrFail($id);

        // Marquer comme lu automatiquement à l'ouverture
        if (!$msg->is_read) {
            $msg->update(['is_read' => true]);
        }

        return response()->json($msg);
    }

    // PUT /api/admin/contact/messages/{id}/read — marquer lu (admin)
    public function markAsRead($id)
    {
        $msg = ContactMessage::findOrFail($id);
        $msg->update(['is_read' => true]);

        return response()->json(['message' => 'Message marqué comme lu.']);
    }

    // DELETE /api/admin/contact/messages/{id} — supprimer (admin)
    public function destroy($id)
    {
        ContactMessage::findOrFail($id)->delete();

        return response()->json(['message' => 'Message supprimé.']);
    }

    // GET /api/admin/contact/dashboard/stats
    public function dashboardStats()
    {
        $totalMessages = ContactMessage::count();
        $unreadMessages = ContactMessage::where('is_read', false)->count();
        $totalAdmins = \Modules\Auth\Models\Admin::count();
        
        $recentMessages = ContactMessage::orderBy('created_at', 'desc')
            ->limit(5)
            ->get();

        return response()->json([
            'total_messages'  => $totalMessages,
            'unread_messages' => $unreadMessages,
            'total_admins'    => $totalAdmins,
            'recent_messages' => $recentMessages,
        ]);
    }
}
