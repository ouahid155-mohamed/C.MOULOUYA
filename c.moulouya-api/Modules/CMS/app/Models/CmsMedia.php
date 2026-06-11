<?php

namespace Modules\CMS\Models;

use Illuminate\Database\Eloquent\Model;

class CmsMedia extends Model
{
    protected $table = 'cms_media';

    protected $fillable = [
        'key',
        'file_path',
        'original_name',
        'type',
        'disk',
    ];
}
