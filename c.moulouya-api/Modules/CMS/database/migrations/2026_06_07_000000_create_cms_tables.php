<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('cms_texts', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->text('value_fr')->nullable();
            $table->text('value_en')->nullable();
            $table->text('value_ar')->nullable();
            $table->timestamps();
        });

        Schema::create('cms_specialties', function (Blueprint $table) {
            $table->id();
            $table->string('title_fr');
            $table->string('title_en')->nullable();
            $table->string('title_ar');
            $table->text('description_fr')->nullable();
            $table->text('description_en')->nullable();
            $table->text('description_ar')->nullable();
            $table->integer('order')->default(0);
            $table->boolean('active')->default(true);
            $table->timestamps();
        });

        Schema::create('cms_stats', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->string('value');
            $table->string('label_fr');
            $table->string('label_en')->nullable();
            $table->string('label_ar');
            $table->timestamps();
        });

        Schema::create('cms_contact', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->text('value')->nullable();
            $table->timestamps();
        });

        Schema::create('cms_social_links', function (Blueprint $table) {
            $table->id();
            $table->string('platform')->unique();
            $table->string('url')->nullable();
            $table->timestamps();
        });

        Schema::create('cms_faq', function (Blueprint $table) {
            $table->id();
            $table->string('group_key');
            $table->string('group_title_fr');
            $table->string('group_title_en')->nullable();
            $table->string('group_title_ar');
            $table->text('question_fr');
            $table->text('question_en')->nullable();
            $table->text('question_ar');
            $table->text('answer_fr');
            $table->text('answer_en')->nullable();
            $table->text('answer_ar');
            $table->integer('order')->default(0);
            $table->boolean('active')->default(true);
            $table->timestamps();
        });

        Schema::create('cms_media', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->string('file_path')->nullable();
            $table->string('original_name')->nullable();
            $table->string('type')->default('image');
            $table->string('disk')->default('public');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cms_media');
        Schema::dropIfExists('cms_faq');
        Schema::dropIfExists('cms_social_links');
        Schema::dropIfExists('cms_contact');
        Schema::dropIfExists('cms_stats');
        Schema::dropIfExists('cms_specialties');
        Schema::dropIfExists('cms_texts');
    }
};
