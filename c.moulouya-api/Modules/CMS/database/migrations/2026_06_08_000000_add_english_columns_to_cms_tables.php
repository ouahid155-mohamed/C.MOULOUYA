<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('cms_texts', function (Blueprint $table) {
            if (!Schema::hasColumn('cms_texts', 'value_en')) {
                $table->text('value_en')->nullable()->after('value_fr');
            }
        });

        Schema::table('cms_specialties', function (Blueprint $table) {
            if (!Schema::hasColumn('cms_specialties', 'title_en')) {
                $table->string('title_en')->nullable()->after('title_fr');
            }
            if (!Schema::hasColumn('cms_specialties', 'description_en')) {
                $table->text('description_en')->nullable()->after('description_fr');
            }
        });

        Schema::table('cms_stats', function (Blueprint $table) {
            if (!Schema::hasColumn('cms_stats', 'label_en')) {
                $table->string('label_en')->nullable()->after('label_fr');
            }
        });

        Schema::table('cms_faq', function (Blueprint $table) {
            if (!Schema::hasColumn('cms_faq', 'group_title_en')) {
                $table->string('group_title_en')->nullable()->after('group_title_fr');
            }
            if (!Schema::hasColumn('cms_faq', 'question_en')) {
                $table->text('question_en')->nullable()->after('question_fr');
            }
            if (!Schema::hasColumn('cms_faq', 'answer_en')) {
                $table->text('answer_en')->nullable()->after('answer_fr');
            }
        });

        $this->backfillEnglishContent();
    }

    private function backfillEnglishContent(): void
    {
        $texts = [
            'hero.quote' => 'Available 24/7, we ensure continuous medical excellence and high-quality care.',
            'hero.emergency_label' => '24/7 Emergency',
            'history.tag' => 'OUR HISTORY',
            'history.title' => 'Healthcare solutions designed for your well-being',
            'history.desc' => "For more than 20 years, Clinique Moulouya has been a pillar of healthcare in Morocco's Oriental region. Built on excellence, commitment and humanity, our reference clinic offers personalized medical care where every patient is welcomed with kindness and professionalism.",
            'history.contact_btn' => 'CONTACT US',
            'history.need_help' => 'Need help?',
            'stats.tag' => 'SUCCESS STORY',
            'stats.title' => 'Our journey of excellence',
            'stats.desc' => 'Our journey of excellence is built on medical expertise and quality care dedicated to patients.',
            'video.title' => 'Your health deserves a unique experience supported by our experts!',
            'video.subtitle' => 'Medical excellence defines our commitment. Clinique Moulouya mobilizes its innovative technical platform and qualified experts to provide safe, human and effective care for your recovery.',
            'specialties.title' => 'Our Specialties',
            'specialties.desc' => 'Comprehensive care provided by medical experts across several disciplines.',
            'specialties.mobile_title' => 'Our Medical Specialties',
            'specialties.mobile_desc' => 'Adapted care delivered by qualified professionals across several disciplines.',
            'faq_page.title' => 'Your Questions, Our Answers',
            'faq_page.subtitle' => 'Our FAQ quickly answers your questions to guide you through your care journey.',
            'contact_page.title' => 'Tell Us About You',
            'contact_page.subtitle' => 'Available 24/7, we provide continuous care and quality medical services with responsiveness and professionalism.',
            'contact.footer_title' => 'Contact us',
            'contact.footer_desc' => 'Contact us for information or appointments. Our team is here to help.',
        ];

        foreach ($texts as $key => $value) {
            DB::table('cms_texts')->where('key', $key)->update(['value_en' => $value]);
        }

        $specialties = [
            'Chirurgie viscérale' => ['Visceral surgery', 'Treatment of digestive conditions with surgical expertise.'],
            'Urologie' => ['Urology', 'Specialized care for urinary and genital diseases.'],
            'Chirurgie oncologique' => ['Oncologic surgery', 'Surgical interventions for cancer treatment.'],
            'Orthopédie' => ['Orthopedics', 'Care for fractures and joint conditions.'],
            'Anesthésiologie' => ['Anesthesiology', 'Patient support and safety before and during surgery.'],
            'Cardiologie' => ['Cardiology', 'Monitoring of cardiovascular diseases and specialized exams.'],
        ];

        foreach ($specialties as $titleFr => [$titleEn, $descriptionEn]) {
            DB::table('cms_specialties')->where('title_fr', $titleFr)->update([
                'title_en' => $titleEn,
                'description_en' => $descriptionEn,
            ]);
        }

        $stats = [
            'doctors' => 'Specialist doctors',
            'operations' => 'Successful operations',
            'experience' => 'Years of experience',
            'patients' => 'Recovered patients',
        ];

        foreach ($stats as $key => $labelEn) {
            DB::table('cms_stats')->where('key', $key)->update(['label_en' => $labelEn]);
        }

        DB::table('cms_contact')->updateOrInsert(['key' => 'address_en'], ['value' => '7, Rue De La Paix, Berkane, Morocco, Oriental 63300']);
        DB::table('cms_contact')->updateOrInsert(['key' => 'hours_en'], ['value' => 'Available 24/7. We provide continuous care and quality treatments.']);

        $groupTitles = [
            'group_clinique' => 'About the clinic',
            'group_consultation' => 'Prepare your consultation',
            'group_services' => 'Services & care',
        ];

        foreach ($groupTitles as $groupKey => $titleEn) {
            DB::table('cms_faq')->where('group_key', $groupKey)->update(['group_title_en' => $titleEn]);
        }

        DB::table('cms_faq')->where('question_fr', 'Quels services médicaux propose la clinique ?')->update([
            'question_en' => 'What medical services does the clinic offer?',
            'answer_en' => 'The clinic provides comprehensive care, emergency services and several medical and surgical specialties including visceral surgery, urology, oncology, orthopedics, obstetrics and gynecology, anesthesia and intensive care, ENT, gastroenterology, digestive endoscopy and internal medicine.',
        ]);
        DB::table('cms_faq')->where('question_fr', 'Qui sont les médecins de la clinique ?')->update([
            'question_en' => 'Who are the clinic doctors?',
            'answer_en' => 'The clinic has a team of specialist doctors, including Dr Aziz LAARBI in urologic surgery, Dr Kamal ADNANI in orthopedic and trauma surgery, and Dr Az-Eddin El Bouhali in anesthesia and intensive care.',
        ]);
        DB::table('cms_faq')->where('question_fr', 'Depuis quand la clinique est-elle en activité ?')->update([
            'question_en' => 'How long has the clinic been operating?',
            'answer_en' => 'The clinic has been operating for more than 20 years, with proven experience in medical and surgical patient care.',
        ]);
        DB::table('cms_faq')->where('question_fr', 'Que faut-il apporter lors de la consultation ?')->update([
            'question_en' => 'What should I bring to my consultation?',
            'answer_en' => 'Please bring your medical documents, prescriptions, test results, reports, identity card and any recent examination results.',
        ]);
        DB::table('cms_faq')->where('question_fr', 'Comment prendre rendez-vous ?')->update([
            'question_en' => 'How can I make an appointment?',
            'answer_en' => 'You can make an appointment by phone or directly at the clinic reception. Our team will help you find a suitable time as soon as possible.',
        ]);
    }

    public function down(): void
    {
        Schema::table('cms_faq', function (Blueprint $table) {
            if (Schema::hasColumn('cms_faq', 'answer_en')) {
                $table->dropColumn('answer_en');
            }
            if (Schema::hasColumn('cms_faq', 'question_en')) {
                $table->dropColumn('question_en');
            }
            if (Schema::hasColumn('cms_faq', 'group_title_en')) {
                $table->dropColumn('group_title_en');
            }
        });

        Schema::table('cms_stats', function (Blueprint $table) {
            if (Schema::hasColumn('cms_stats', 'label_en')) {
                $table->dropColumn('label_en');
            }
        });

        Schema::table('cms_specialties', function (Blueprint $table) {
            if (Schema::hasColumn('cms_specialties', 'description_en')) {
                $table->dropColumn('description_en');
            }
            if (Schema::hasColumn('cms_specialties', 'title_en')) {
                $table->dropColumn('title_en');
            }
        });

        Schema::table('cms_texts', function (Blueprint $table) {
            if (Schema::hasColumn('cms_texts', 'value_en')) {
                $table->dropColumn('value_en');
            }
        });
    }
};
