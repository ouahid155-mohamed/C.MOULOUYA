<?php

namespace Modules\CMS\Models;

use Illuminate\Database\Eloquent\Model;

class CmsSocialLink extends Model
{
    protected $table = 'cms_social_links';

    protected $fillable = [
        'platform',
        'url',
    ];
}
