<?php

namespace Modules\Profile\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ProfileController extends Controller
{
    // GET /api/admin/profile
    public function show(Request $request)
    {
        return response()->json($request->user());
    }

    // PUT /api/admin/profile
    public function update(Request $request)
    {
        $request->validate([
            'name'  => 'required|string|max:255',
            'phone' => 'nullable|string|max:20',
        ]);

        $admin = $request->user();
        $admin->update($request->only('name', 'phone'));

        return response()->json([
            'message' => 'Profil mis à jour avec succès.',
            'admin'   => $admin,
        ]);
    }

    // PUT /api/admin/profile/request-email-change
    public function requestEmailChange(Request $request)
    {
        $request->validate([
            'new_email' => 'required|email|unique:admins,email',
        ]);

        $admin = $request->user();
        $token = Str::random(64);

        $admin->update([
            'email_change_token' => $token,
            'new_email_pending'  => $request->new_email,
        ]);

        // Envoie le lien de confirmation au nouvel email demandé
        Mail::send([], [], function ($mail) use ($admin, $token) {
            $confirmUrl = config('app.frontend_admin_url') . '/confirm-email?token=' . $token;
            $mail->to($admin->new_email_pending)
                 ->subject('Confirmation de changement d\'email')
                 ->html("
                    <h2>Demande de changement d'email</h2>
                    <p>Cliquez sur le lien ci-dessous pour confirmer :</p>
                    <a href='{$confirmUrl}'>{$confirmUrl}</a>
                    <p>Ce lien expire dans 24h.</p>
                 ");
        });

        return response()->json([
            'message' => 'Un email de confirmation a été envoyé à votre nouvelle adresse.',
        ]);
    }

    // GET /api/admin/profile/confirm-email?token=xxx
    public function confirmEmailChange(Request $request)
    {
        $request->validate([
            'token' => 'required|string',
        ]);

        $admin = $request->user();

        if ($admin->email_change_token !== $request->token) {
            return response()->json(['message' => 'Token invalide.'], 422);
        }

        $admin->update([
            'email'              => $admin->new_email_pending,
            'email_change_token' => null,
            'new_email_pending'  => null,
        ]);

        return response()->json([
            'message' => 'Email mis à jour avec succès.',
            'admin'   => $admin,
        ]);
    }

    // PUT /api/admin/profile/password
    public function changePassword(Request $request)
    {
        $request->validate([
            'current_password' => 'required|string',
            'new_password'     => 'required|string|min:8|confirmed',
        ]);

        $admin = $request->user();

        if (!Hash::check($request->current_password, $admin->password)) {
            return response()->json([
                'message' => 'Le mot de passe actuel est incorrect.',
            ], 422);
        }

        $admin->update([
            'password' => Hash::make($request->new_password),
        ]);

        return response()->json([
            'message' => 'Mot de passe modifié avec succès.',
        ]);
    }
}
