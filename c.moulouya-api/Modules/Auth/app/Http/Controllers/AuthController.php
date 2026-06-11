<?php

namespace Modules\Auth\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Modules\Auth\Models\Admin;

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class AuthController extends Controller
{
    /**
     * Login admin and return Sanctum token.
     */
    public function login(Request $request): JsonResponse
    {
        $request->validate([
            'email'    => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        $admin = Admin::where('email', $request->email)->first();

        if (! $admin || ! Hash::check($request->password, $admin->password)) {
            throw ValidationException::withMessages([
                'email' => ['Les identifiants fournis sont incorrects.'],
            ]);
        }

        // Revoke previous tokens (single session)
        $admin->tokens()->delete();

        $token = $admin->createToken('admin-token', ['admin'])->plainTextToken;

        return response()->json([
            'message' => 'Connexion réussie.',
            'token'   => $token,
            'admin'   => $admin,
        ]);
    }

    /**
     * Logout admin (revoke current token).
     */
    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Déconnexion réussie.',
        ]);
    }

    /**
     * Get authenticated admin profile.
     */
    public function me(Request $request): JsonResponse
    {
        return response()->json($request->user());
    }

    /**
     * Update authenticated admin profile.
     */
    public function updateProfile(Request $request): JsonResponse
    {
        $admin = $request->user();

        $data = $request->validate([
            'name'  => ['sometimes', 'string', 'max:255'],
            'phone' => ['sometimes', 'nullable', 'string', 'max:20'],
        ]);

        $admin->update($data);

        return response()->json([
            'message' => 'Profil mis à jour.',
            'admin'   => $admin->fresh(),
        ]);
    }

    /**
     * Change authenticated admin password.
     */
    public function changePassword(Request $request): JsonResponse
    {
        $request->validate([
            'current_password' => ['required', 'string'],
            'new_password'     => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        $admin = $request->user();

        if (! Hash::check($request->current_password, $admin->password)) {
            throw ValidationException::withMessages([
                'current_password' => ['Le mot de passe actuel est incorrect.'],
            ]);
        }

        $admin->update(['password' => $request->new_password]);

        // Revoke all tokens to force re-login
        $admin->tokens()->delete();

        return response()->json([
            'message' => 'Mot de passe modifié. Veuillez vous reconnecter.',
        ]);
    }

    // POST /api/admin/forgot-password
    public function forgotPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $admin = Admin::where('email', $request->email)->first();

        if (!$admin) {
            return response()->json([
                'message' => 'Si cet email existe, un lien vous sera envoyé.'
            ]);
        }

        // Supprimer les anciens tokens
        DB::table('password_reset_tokens')
            ->where('email', $request->email)
            ->delete();

        $token = Str::random(64);

        DB::table('password_reset_tokens')->insert([
            'email'      => $request->email,
            'token'      => hash('sha256', $token),
            'created_at' => Carbon::now(),
        ]);

        $resetUrl = env('FRONTEND_ADMIN_URL') . '/reset-password?token=' . $token . '&email=' . $request->email;

        Mail::send([], [], function ($mail) use ($admin, $resetUrl) {
            $mail->to($admin->email)
                 ->subject('Réinitialisation de votre mot de passe')
                 ->html("
                    <div style='font-family:sans-serif;max-width:500px;margin:auto'>
                        <h2 style='color:#1376F8'>Réinitialisation du mot de passe</h2>
                        <p>Bonjour {$admin->name},</p>
                        <p>Cliquez sur le bouton ci-dessous pour réinitialiser votre mot de passe :</p>
                        <a href='{$resetUrl}'
                           style='display:inline-block;padding:12px 28px;background:#1376F8;
                                  color:white;border-radius:8px;text-decoration:none;
                                  font-weight:600;margin:16px 0'>
                            Réinitialiser mon mot de passe
                        </a>
                        <p style='color:#6B7280;font-size:13px'>Ce lien expire dans 60 minutes.</p>
                        <p style='color:#6B7280;font-size:13px'>
                            Si vous n'avez pas demandé cette réinitialisation, ignorez cet email.
                        </p>
                    </div>
                 ");
        });

        return response()->json([
            'message' => 'Si cet email existe, un lien vous sera envoyé.'
        ]);
    }

    // POST /api/admin/reset-password
    public function resetPassword(Request $request)
    {
        $request->validate([
            'email'                 => 'required|email',
            'token'                 => 'required|string',
            'password'              => 'required|string|min:8|confirmed',
        ]);

        $record = DB::table('password_reset_tokens')
            ->where('email', $request->email)
            ->first();

        if (!$record) {
            return response()->json(['message' => 'Token invalide ou expiré.'], 422);
        }

        // Vérifier le token
        if (!hash_equals($record->token, hash('sha256', $request->token))) {
            return response()->json(['message' => 'Token invalide.'], 422);
        }

        // Vérifier expiration (60 min)
        if (Carbon::parse($record->created_at)->addMinutes(60)->isPast()) {
            DB::table('password_reset_tokens')->where('email', $request->email)->delete();
            return response()->json(['message' => 'Token expiré.'], 422);
        }

        $admin = Admin::where('email', $request->email)->first();

        if (!$admin) {
            return response()->json(['message' => 'Compte introuvable.'], 404);
        }

        $admin->update([
            'password' => Hash::make($request->password),
        ]);

        // Supprimer le token utilisé
        DB::table('password_reset_tokens')->where('email', $request->email)->delete();

        // Révoquer tous les tokens Sanctum
        $admin->tokens()->delete();

        return response()->json([
            'message' => 'Mot de passe réinitialisé avec succès.'
        ]);
    }
}
