<?php

namespace Modules\CMS\Models;

use Illuminate\Database\Eloquent\Model;

class CmsStat extends Model
{
    protected $table = 'cms_stats';

    protected $fillable = [
        'key',
        'value',
        'label_fr',
        'label_en',
        'label_ar',
    ];
}
