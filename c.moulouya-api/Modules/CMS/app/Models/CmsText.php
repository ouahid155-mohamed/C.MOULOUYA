<?php

namespace Modules\CMS\Models;

use Illuminate\Database\Eloquent\Model;

class CmsText extends Model
{
    protected $table = 'cms_texts';

    protected $fillable = [
        'key',
        'value_fr',
        'value_en',
        'value_ar',
    ];
}
