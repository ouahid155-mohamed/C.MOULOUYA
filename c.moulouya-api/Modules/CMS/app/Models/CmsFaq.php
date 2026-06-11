<?php

namespace Modules\CMS\Models;

use Illuminate\Database\Eloquent\Model;

class CmsFaq extends Model
{
    protected $table = 'cms_faq';

    protected $fillable = [
        'group_key',
        'group_title_fr',
        'group_title_en',
        'group_title_ar',
        'question_fr',
        'question_en',
        'question_ar',
        'answer_fr',
        'answer_en',
        'answer_ar',
        'order',
        'active',
    ];

    protected $casts = [
        'order' => 'integer',
        'active' => 'boolean',
    ];
}
