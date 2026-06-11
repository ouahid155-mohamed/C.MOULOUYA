<?php

namespace Modules\CMS\Models;

use Illuminate\Database\Eloquent\Model;

class CmsSpecialty extends Model
{
    protected $table = 'cms_specialties';

    protected $fillable = [
        'title_fr',
        'title_en',
        'title_ar',
        'description_fr',
        'description_en',
        'description_ar',
        'order',
        'active',
    ];

    protected $casts = [
        'order' => 'integer',
        'active' => 'boolean',
    ];
}
