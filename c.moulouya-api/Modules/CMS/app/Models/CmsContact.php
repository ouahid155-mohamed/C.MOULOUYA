<?php

namespace Modules\CMS\Models;

use Illuminate\Database\Eloquent\Model;

class CmsContact extends Model
{
    protected $table = 'cms_contact';

    protected $fillable = [
        'key',
        'value',
    ];
}
