<?php

namespace Modules\Auth\Database\Seeders;

use Illuminate\Database\Seeder;

class AuthDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \Modules\Auth\Models\Admin::updateOrCreate(
            ['email' => 'admin@moulouya.com'],
            [
                'name' => 'Admin Moulouya',
                'password' => \Illuminate\Support\Facades\Hash::make('password'),
                'phone' => '+212600000000',
            ]
        );
    }
}
