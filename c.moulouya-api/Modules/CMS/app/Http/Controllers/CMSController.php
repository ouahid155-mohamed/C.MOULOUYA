<?php

namespace Modules\CMS\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Modules\CMS\Models\CmsText;
use Modules\CMS\Models\CmsSpecialty;
use Modules\CMS\Models\CmsStat;
use Modules\CMS\Models\CmsContact;
use Modules\CMS\Models\CmsSocialLink;
use Modules\CMS\Models\CmsFaq;
use Modules\CMS\Models\CmsMedia;

class CMSController extends Controller
{
    private const EDITABLE_MEDIA_KEYS = [
        'main_video',
        'main_video_thumbnail',
        'specialty_video',
        'specialty_video_thumbnail',
        'about_main',
        'about_tl',
        'about_br',
    ];

    private const VIDEO_MEDIA_KEYS = [
        'main_video',
        'specialty_video',
    ];

    private const EDITABLE_MEDIA_DEFAULTS = [
        'main_video' => [
            'original_name' => 'clinique_moulouya_video.mp4',
            'type' => 'video',
        ],
        'main_video_thumbnail' => [
            'original_name' => 'Video Box.png',
            'type' => 'image',
        ],
        'specialty_video' => [
            'original_name' => 'Clinique Moulouya 8.mp4',
            'type' => 'video',
        ],
        'specialty_video_thumbnail' => [
            'original_name' => 'Group 1000011126.png',
            'type' => 'image',
        ],
        'about_main' => [
            'original_name' => 'Screenshot 2026-04-21 105329 1.png',
            'type' => 'image',
        ],
        'about_tl' => [
            'original_name' => 'Screenshot 2026-04-21 104656 1.png',
            'type' => 'image',
        ],
        'about_br' => [
            'original_name' => 'Replace This.png',
            'type' => 'image',
        ],
    ];

    private function ensureEditableMediaRecords(): void
    {
        foreach (self::EDITABLE_MEDIA_DEFAULTS as $key => $defaults) {
            CmsMedia::firstOrCreate(
                ['key' => $key],
                [
                    'file_path' => '',
                    'original_name' => $defaults['original_name'],
                    'type' => $defaults['type'],
                    'disk' => 'public',
                ]
            );
        }
    }

    /**
     * Public endpoint to fetch all CMS content for the website vitrine.
     */
    public function getContent()
    {
        // 1. Mapped Texts
        $textsFr = [];
        $textsEn = [];
        $textsAr = [];
        foreach (CmsText::all() as $txt) {
            $textsFr[$txt->key] = $txt->value_fr;
            $textsEn[$txt->key] = $txt->value_en ?: $txt->value_fr;
            $textsAr[$txt->key] = $txt->value_ar;
        }

        // 2. Active Specialties
        $specialties = CmsSpecialty::where('active', true)->orderBy('order')->get();

        // 3. Stats Mapped
        $stats = [];
        foreach (CmsStat::all() as $st) {
            $stats[$st->key] = [
                'value' => $st->value,
                'label_fr' => $st->label_fr,
                'label_en' => $st->label_en ?: $st->label_fr,
                'label_ar' => $st->label_ar,
            ];
        }

        // 4. Contact Info Mapped
        $contact = CmsContact::all()->pluck('value', 'key')->toArray();

        // 5. Social Links Mapped
        $socials = CmsSocialLink::all()->pluck('url', 'platform')->toArray();

        // 6. Active FAQs
        $faqs = CmsFaq::where('active', true)->orderBy('group_key')->orderBy('order')->get();

        // 7. Media Mapped to Public URLs
        $media = [];
        foreach (CmsMedia::whereIn('key', self::EDITABLE_MEDIA_KEYS)->get() as $med) {
            $media[$med->key] = $med->file_path ? Storage::disk('public')->url($med->file_path) : null;
        }

        return response()->json([
            'texts' => [
                'fr' => $textsFr,
                'en' => $textsEn,
                'ar' => $textsAr
            ],
            'specialties' => $specialties,
            'stats' => $stats,
            'contact' => $contact,
            'socials' => $socials,
            'faq' => $faqs,
            'media' => $media
        ]);
    }

    /* 
     |--------------------------------------------------------------------------
     | Back-Office Admin CMS Endpoints (auth:sanctum)
     |--------------------------------------------------------------------------
     */

    // --- TEXTS ---
    public function getTexts()
    {
        return response()->json(CmsText::all());
    }

    public function updateTexts(Request $request)
    {
        $data = $request->validate([
            'texts' => 'required|array',
            'texts.*.key' => 'required|string',
            'texts.*.value_fr' => 'nullable|string',
            'texts.*.value_en' => 'nullable|string',
            'texts.*.value_ar' => 'nullable|string',
        ]);

        foreach ($data['texts'] as $textData) {
            CmsText::updateOrCreate(
                ['key' => $textData['key']],
                [
                    'value_fr' => $textData['value_fr'],
                    'value_en' => $textData['value_en'] ?? $textData['value_fr'],
                    'value_ar' => $textData['value_ar']
                ]
            );
        }

        return response()->json(['message' => 'Textes mis à jour avec succès.']);
    }

    // --- SPECIALTIES ---
    public function getSpecialties()
    {
        return response()->json(CmsSpecialty::orderBy('order')->get());
    }

    public function storeSpecialty(Request $request)
    {
        $data = $request->validate([
            'title_fr' => 'required|string',
            'title_en' => 'nullable|string',
            'title_ar' => 'required|string',
            'description_fr' => 'nullable|string',
            'description_en' => 'nullable|string',
            'description_ar' => 'nullable|string',
            'order' => 'integer|nullable',
            'active' => 'boolean|nullable',
        ]);

        $specialty = CmsSpecialty::create($data);
        return response()->json($specialty, 201);
    }

    public function updateSpecialty(Request $request, $id)
    {
        $specialty = CmsSpecialty::findOrFail($id);

        $data = $request->validate([
            'title_fr' => 'required|string',
            'title_en' => 'nullable|string',
            'title_ar' => 'required|string',
            'description_fr' => 'nullable|string',
            'description_en' => 'nullable|string',
            'description_ar' => 'nullable|string',
            'order' => 'integer|nullable',
            'active' => 'boolean|nullable',
        ]);

        $specialty->update($data);
        return response()->json($specialty);
    }

    public function destroySpecialty($id)
    {
        CmsSpecialty::destroy($id);
        return response()->json(['message' => 'Spécialité supprimée avec succès.']);
    }

    // --- STATS ---
    public function getStats()
    {
        return response()->json(CmsStat::all());
    }

    public function updateStats(Request $request)
    {
        $data = $request->validate([
            'stats' => 'required|array',
            'stats.*.key' => 'required|string',
            'stats.*.value' => 'required|string',
            'stats.*.label_fr' => 'required|string',
            'stats.*.label_en' => 'nullable|string',
            'stats.*.label_ar' => 'required|string',
        ]);

        foreach ($data['stats'] as $statData) {
            CmsStat::updateOrCreate(
                ['key' => $statData['key']],
                [
                    'value' => $statData['value'],
                    'label_fr' => $statData['label_fr'],
                    'label_en' => $statData['label_en'] ?? $statData['label_fr'],
                    'label_ar' => $statData['label_ar']
                ]
            );
        }

        return response()->json(['message' => 'Statistiques mises à jour avec succès.']);
    }

    // --- CONTACT & SOCIALS ---
    public function getContact()
    {
        return response()->json([
            'contact' => CmsContact::all()->pluck('value', 'key')->toArray(),
            'socials' => CmsSocialLink::all()->pluck('url', 'platform')->toArray()
        ]);
    }

    public function updateContact(Request $request)
    {
        $data = $request->validate([
            'contact' => 'required|array',
            'socials' => 'required|array',
        ]);

        foreach ($data['contact'] as $key => $value) {
            CmsContact::updateOrCreate(['key' => $key], ['value' => $value]);
        }

        foreach ($data['socials'] as $platform => $url) {
            CmsSocialLink::updateOrCreate(['platform' => $platform], ['url' => $url]);
        }

        return response()->json(['message' => 'Informations de contact et réseaux sociaux mis à jour.']);
    }

    // --- FAQ ---
    public function getFaq()
    {
        return response()->json(CmsFaq::orderBy('group_key')->orderBy('order')->get());
    }

    public function storeFaq(Request $request)
    {
        $data = $request->validate([
            'group_key' => 'required|string',
            'group_title_fr' => 'required|string',
            'group_title_en' => 'nullable|string',
            'group_title_ar' => 'required|string',
            'question_fr' => 'required|string',
            'question_en' => 'nullable|string',
            'question_ar' => 'required|string',
            'answer_fr' => 'required|string',
            'answer_en' => 'nullable|string',
            'answer_ar' => 'required|string',
            'order' => 'integer|nullable',
            'active' => 'boolean|nullable',
        ]);

        $faq = CmsFaq::create($data);
        return response()->json($faq, 201);
    }

    public function updateFaq(Request $request, $id)
    {
        $faq = CmsFaq::findOrFail($id);

        $data = $request->validate([
            'group_key' => 'required|string',
            'group_title_fr' => 'required|string',
            'group_title_en' => 'nullable|string',
            'group_title_ar' => 'required|string',
            'question_fr' => 'required|string',
            'question_en' => 'nullable|string',
            'question_ar' => 'required|string',
            'answer_fr' => 'required|string',
            'answer_en' => 'nullable|string',
            'answer_ar' => 'required|string',
            'order' => 'integer|nullable',
            'active' => 'boolean|nullable',
        ]);

        $faq->update($data);
        return response()->json($faq);
    }

    public function destroyFaq($id)
    {
        CmsFaq::destroy($id);
        return response()->json(['message' => 'FAQ supprimée avec succès.']);
    }

    // --- MEDIA ---
    public function getMedia()
    {
        $this->ensureEditableMediaRecords();

        $media = CmsMedia::whereIn('key', self::EDITABLE_MEDIA_KEYS)
            ->get()
            ->sortBy(fn ($med) => array_search($med->key, self::EDITABLE_MEDIA_KEYS, true))
            ->values()
            ->map(function ($med) {
            return [
                'id' => $med->id,
                'key' => $med->key,
                'original_name' => $med->original_name,
                'type' => $med->type,
                'file_path' => $med->file_path,
                'url' => $med->file_path ? Storage::disk('public')->url($med->file_path) : null
            ];
        });

        return response()->json($media);
    }

    public function uploadMedia(Request $request)
    {
        $request->validate([
            'key' => 'required|string|in:' . implode(',', self::EDITABLE_MEDIA_KEYS),
            'file' => 'required|file|max:20480', // Max 20MB
        ]);

        $key = $request->input('key');
        $this->ensureEditableMediaRecords();
        $media = CmsMedia::where('key', $key)->firstOrFail();
        $file = $request->file('file');
        $isVideoKey = in_array($key, self::VIDEO_MEDIA_KEYS, true);
        $isVideoFile = str_starts_with($file->getMimeType(), 'video/');

        if ($isVideoKey !== $isVideoFile) {
            return response()->json([
                'message' => $isVideoKey
                    ? 'Ce média doit être une vidéo.'
                    : 'Ce média doit être une image.',
            ], 422);
        }

        // Delete old file if exists
        if ($media->file_path && Storage::disk('public')->exists($media->file_path)) {
            Storage::disk('public')->delete($media->file_path);
        }

        $path = $file->store('cms', 'public');

        $media->update([
            'file_path' => $path,
            'original_name' => $file->getClientOriginalName(),
            'type' => str_starts_with($file->getMimeType(), 'video/') ? 'video' : 'image',
        ]);

        return response()->json([
            'message' => 'Média mis à jour avec succès.',
            'media' => [
                'id' => $media->id,
                'key' => $media->key,
                'original_name' => $media->original_name,
                'type' => $media->type,
                'file_path' => $media->file_path,
                'url' => Storage::disk('public')->url($path)
            ]
        ]);
    }
}
