<?php

namespace Modules\CMS\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\CMS\Models\CmsText;
use Modules\CMS\Models\CmsSpecialty;
use Modules\CMS\Models\CmsStat;
use Modules\CMS\Models\CmsContact;
use Modules\CMS\Models\CmsSocialLink;
use Modules\CMS\Models\CmsFaq;
use Modules\CMS\Models\CmsMedia;

class CMSDatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Seed cms_texts
        $texts = [
            [
                'key' => 'hero.quote',
                'value_fr' => '“Disponibles 24h/24, nous garantissons une excellence médicale continue et des soins performants”',
                'value_ar' => '“متاحون 24/24، نضمن التميز الطبي المستمر والرعاية الفعالة”'
            ],
            [
                'key' => 'hero.emergency_label',
                'value_fr' => 'Urgence 24H/24H',
                'value_ar' => 'الطوارئ 24/24'
            ],
            [
                'key' => 'history.tag',
                'value_fr' => 'NOTRE HISTOIRE',
                'value_ar' => 'تاريخنا'
            ],
            [
                'key' => 'history.title',
                'value_fr' => 'Des solutions de santé pensées pour votre bien-être',
                'value_ar' => 'حلول صحية مصممة لرفاهيتك'
            ],
            [
                'key' => 'history.desc',
                'value_fr' => "Depuis plus de 20 ans, la Clinique Moulouya est un pilier des soins de santé dans la région de l'Oriental. Fondée sur des valeurs d'excellence, d'engagement et d'humanité, notre clinique de référence offre une prise en charge médicale personnalisée, où chaque patient est accueilli avec bienveillance et professionnalisme.",
                'value_ar' => 'منذ أكثر من 20 عامًا، تعد مصحة ملوية ركيزة أساسية للرعاية الصحية في الجهة الشرقية. تأسست على قيم التميز والالتزام والإنسانية، وتقدم مصحتنا المرجعية رعاية طبية مخصصة، حيث يتم استقبال كل مريض بلطف واحترافية.'
            ],
            [
                'key' => 'history.contact_btn',
                'value_fr' => 'CONTACTEZ-NOUS',
                'value_ar' => 'اتصل بنا'
            ],
            [
                'key' => 'history.need_help',
                'value_fr' => "Besoin d'aide ?",
                'value_ar' => 'هل تحتاج إلى مساعدة؟'
            ],
            [
                'key' => 'stats.tag',
                'value_fr' => 'HISTOIRE DE RÉUSSITE',
                'value_ar' => 'قصة نجاح'
            ],
            [
                'key' => 'stats.title',
                'value_fr' => "Notre parcours d'excellence",
                'value_ar' => 'مسيرتنا نحو التميز'
            ],
            [
                'key' => 'stats.desc',
                'value_fr' => "Notre parcours d'excellence repose sur l'expertise médicale et la qualité des soins au service des patients.",
                'value_ar' => 'تعتمد مسيرتنا نحو التميز على الخبرة الطبية وجودة رعاية المرضى.'
            ],
            [
                'key' => 'video.title',
                'value_fr' => 'Votre santé mérite une expérience unique accompagnée par nos experts !',
                'value_ar' => 'صحتك تستحق تجربة فريدة بمرافقة خبرائنا!'
            ],
            [
                'key' => 'video.subtitle',
                'value_fr' => "L'excellence médicale définit notre engagement. La Clinique Moulouya mobilise son plateau technique innovant et des experts qualifiés pour assurer une prise en charge sécurisée, humaine et performante, au service de votre rétablissement.",
                'value_ar' => 'التميز الطبي يحدد التزامنا. تعبئ مصحة ملوية منصتها التقنية المبتكرة وخبراء مؤهلين لضمان رعاية آمنة وإنسانية وفعالة، في خدمة شفائك.'
            ],
            [
                'key' => 'specialties.title',
                'value_fr' => 'Nos Spécialités',
                'value_ar' => 'تخصصاتنا'
            ],
            [
                'key' => 'specialties.desc',
                'value_fr' => 'Une prise en charge complète réalisée par des experts médicaux dans plusieurs disciplines.',
                'value_ar' => 'رعاية شاملة يقدمها خبراء طبيون في عدة تخصصات.'
            ],
            [
                'key' => 'specialties.mobile_title',
                'value_fr' => 'Nos Spécialités Médicales',
                'value_ar' => 'تخصصاتنا الطبية'
            ],
            [
                'key' => 'specialties.mobile_desc',
                'value_fr' => 'Des soins adaptés, assurés par des professionnels qualifiés dans plusieurs disciplines.',
                'value_ar' => 'رعاية ملائمة، مضمونة من قبل مهنيين مؤهلين في عدة تخصصات.'
            ],
            [
                'key' => 'faq_page.title',
                'value_fr' => 'Vos Questions, Nos Réponses',
                'value_ar' => 'أسئلتكم، إجاباتنا'
            ],
            [
                'key' => 'faq_page.subtitle',
                'value_fr' => 'Notre FAQ répond rapidement à vos questions pour vous guider dans votre parcours de soins.',
                'value_ar' => 'يجيب قسم الأسئلة الشائعة لدينا بسرعة على أسئلتك لإرشادك في مسار الرعاية الخاصة بك.'
            ],
            [
                'key' => 'contact_page.title',
                'value_fr' => 'Parlez-Nous De Vous',
                'value_ar' => 'تحدث إلينا عن نفسك'
            ],
            [
                'key' => 'contact_page.subtitle',
                'value_fr' => 'Disponibles 24h/24, nous garantissons une prise en charge permanente et des services médicaux de qualité, assurés avec réactivité et professionnalisme.',
                'value_ar' => 'متاحون 24/24، نضمن رعاية دائمة وخدمات طبية عالية الجودة، تُقدم بسرعة واحترافية.'
            ],
            [
                'key' => 'contact.footer_title',
                'value_fr' => 'Contactez-nous',
                'value_ar' => 'اتصل بنا'
            ],
            [
                'key' => 'contact.footer_desc',
                'value_fr' => "Contactez-nous pour toute information ou prise de rendez-vous, notre equipe est a votre ecoute.",
                'value_ar' => 'اتصلوا بنا لأي معلومات أو لحجز موعد، فريقنا رهن إشارتكم.'
            ]
        ];

        $textEnglish = [
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

        foreach ($texts as $text) {
            $text['value_en'] = $textEnglish[$text['key']] ?? $text['value_fr'];
            CmsText::updateOrCreate(['key' => $text['key']], $text);
        }

        // 2. Seed cms_specialties
        $specialties = [
            [
                'title_fr' => 'Chirurgie viscérale',
                'title_ar' => 'الجراحة الباطنية',
                'description_fr' => 'Traitement des pathologies digestives avec expertise chirurgicale.',
                'description_ar' => 'علاج أمراض الجهاز الهضمي بخبرة جراحية.',
                'order' => 0,
                'active' => true
            ],
            [
                'title_fr' => 'Urologie',
                'title_ar' => 'المسالك البولية',
                'description_fr' => 'Soins spécialisés pour les maladies urinaires et génitales.',
                'description_ar' => 'رعاية متخصصة للأمراض البولية والتناسلية.',
                'order' => 1,
                'active' => true
            ],
            [
                'title_fr' => 'Chirurgie oncologique',
                'title_ar' => 'جراحة الأورام',
                'description_fr' => 'Interventions chirurgicales pour le traitement des cancers.',
                'description_ar' => 'تدخلات جراحية لعلاج السرطان.',
                'order' => 2,
                'active' => true
            ],
            [
                'title_fr' => 'Orthopédie',
                'title_ar' => 'جراحة العظام',
                'description_fr' => 'Prise en charge des fractures et pathologies des articulations.',
                'description_ar' => 'رعاية الكسور وأمراض المفاصل.',
                'order' => 3,
                'active' => true
            ],
            [
                'title_fr' => 'Anesthésiologie',
                'title_ar' => 'التخدير',
                'description_fr' => "Accompagnement et sécurité du patient avant et pendant l'opération.",
                'description_ar' => 'مرافقة وسلامة المريض قبل وأثناء العملية.',
                'order' => 4,
                'active' => true
            ],
            [
                'title_fr' => 'Cardiologie',
                'title_ar' => 'أمراض القلب',
                'description_fr' => 'Suivi des maladies cardiovasculaires et examens spécialisés.',
                'description_ar' => 'متابعة أمراض القلب والأوعية الدموية والفحوصات المتخصصة.',
                'order' => 5,
                'active' => true
            ]
        ];

        $specialtyEnglish = [
            'Chirurgie viscérale' => ['Visceral surgery', 'Treatment of digestive conditions with surgical expertise.'],
            'Urologie' => ['Urology', 'Specialized care for urinary and genital diseases.'],
            'Chirurgie oncologique' => ['Oncologic surgery', 'Surgical interventions for cancer treatment.'],
            'Orthopédie' => ['Orthopedics', 'Care for fractures and joint conditions.'],
            'Anesthésiologie' => ['Anesthesiology', 'Patient support and safety before and during surgery.'],
            'Cardiologie' => ['Cardiology', 'Monitoring of cardiovascular diseases and specialized exams.'],
        ];

        foreach ($specialties as $sp) {
            if (isset($specialtyEnglish[$sp['title_fr']])) {
                [$sp['title_en'], $sp['description_en']] = $specialtyEnglish[$sp['title_fr']];
            } else {
                $sp['title_en'] = $sp['title_fr'];
                $sp['description_en'] = $sp['description_fr'];
            }
            CmsSpecialty::updateOrCreate(
                ['title_fr' => $sp['title_fr']],
                $sp
            );
        }

        // 3. Seed cms_stats
        $stats = [
            [
                'key' => 'doctors',
                'value' => '10+',
                'label_fr' => 'Médecins Spécialistes',
                'label_ar' => 'أطباء متخصصون'
            ],
            [
                'key' => 'operations',
                'value' => '1000+',
                'label_fr' => 'Opérations réussies',
                'label_ar' => 'عمليات ناجحة'
            ],
            [
                'key' => 'experience',
                'value' => '20+',
                'label_fr' => "Des années d'expérience",
                'label_ar' => 'سنوات من الخبرة'
            ],
            [
                'key' => 'patients',
                'value' => '1000+',
                'label_fr' => 'Patients guéris',
                'label_ar' => 'مرضى متعافون'
            ]
        ];

        $statEnglish = [
            'doctors' => 'Specialist doctors',
            'operations' => 'Successful operations',
            'experience' => 'Years of experience',
            'patients' => 'Recovered patients',
        ];

        foreach ($stats as $st) {
            $st['label_en'] = $statEnglish[$st['key']] ?? $st['label_fr'];
            CmsStat::updateOrCreate(['key' => $st['key']], $st);
        }

        // 4. Seed cms_contact
        $contacts = [
            'phone_1' => '+212 6 61 26 77 60',
            'phone_2' => '+212 5366 - 168 69',
            'email' => 'contact@cliniquemoulouya.ma',
            'address_fr' => '7, Rue De La Paix, Berkane, Morocco, Oriental 63300',
            'address_ar' => '7، شارع السلام، بركان، المغرب، الجهة الشرقية 63300',
            'hours_fr' => 'Disponibles 24h/24. Nous vous assurons une prise en charge continue et des soins de qualité',
            'hours_ar' => 'متاحون 24/24. نضمن لكم رعاية مستمرة وعلاجات ذات جودة'
        ];

        $contacts['address_en'] = '7, Rue De La Paix, Berkane, Morocco, Oriental 63300';
        $contacts['hours_en'] = 'Available 24/7. We provide continuous care and quality treatments.';

        foreach ($contacts as $key => $val) {
            CmsContact::updateOrCreate(['key' => $key], ['value' => $val]);
        }

        // 5. Seed cms_social_links
        $socials = [
            'instagram' => '#',
            'facebook' => '#',
            'tiktok' => '#'
        ];

        foreach ($socials as $platform => $url) {
            CmsSocialLink::updateOrCreate(['platform' => $platform], ['url' => $url]);
        }

        // 6. Seed cms_faq
        $faqs = [
            // group_clinique
            [
                'group_key' => 'group_clinique',
                'group_title_fr' => 'À Propos De La Clinique',
                'group_title_ar' => 'حول المصحة',
                'question_fr' => 'Quels services médicaux propose la clinique ?',
                'question_ar' => 'ما هي الخدمات الطبية التي تقدمها المصحة؟',
                'answer_fr' => "La clinique propose une prise en charge complète avec des services d'urgences et plusieurs spécialités médicales et chirurgicales, dont la chirurgie viscérale, l'urologie, l'oncologie, l'orthopédie-traumatologie, la gynécologie-obstétrique, l'anesthésie-réanimation, l'ORL, la gastro-entérologie, l'endoscopie digestive et la médecine interne.",
                'answer_ar' => 'تقدم المصحة رعاية شاملة تشمل خدمات الطوارئ وعدة تخصصات طبية وجراحية, منها الجراحة الباطنية, المسالك البولية, الأورام, جراحة العظام والمفاصل, أمراض النساء والتوليد, التخدير والإنعاش, الأنف والأذن والحنجرة, أمراض الجهاز الهضمي, والتنظير الداخلي, والطب الباطني.',
                'order' => 0,
                'active' => true
            ],
            [
                'group_key' => 'group_clinique',
                'group_title_fr' => 'À Propos De La Clinique',
                'group_title_ar' => 'حول المصحة',
                'question_fr' => 'Qui sont les médecins de la clinique ?',
                'question_ar' => 'من هم أطباء المصحة؟',
                'answer_fr' => 'La clinique dispose d’une équipe de médecins spécialistes, dont le Dr Aziz LAARBI en chirurgie urologique, le Dr Kamal ADNANI en chirurgie orthopédique et traumatologique, ainsi que le Dr Az-Eddin El Bouhali en anesthésie-réanimation, assurant une prise en charge experte et spécialisée des patients.',
                'answer_ar' => 'تضم المصحة فريقًا من الأطباء المتخصصين، من بينهم د. عزيز لعربي في جراحة المسالك البولية، ود. كمال عدناني في جراحة العظام والمفاصل، وكذلك د. عز الدين البوهالي في التخدير والإنعاش، مما يضمن رعاية متخصصة وخبيرة للمرضى.',
                'order' => 1,
                'active' => true
            ],
            [
                'group_key' => 'group_clinique',
                'group_title_fr' => 'À Propos De La Clinique',
                'group_title_ar' => 'حول المصحة',
                'question_fr' => 'Depuis quand la clinique est-elle en activité ?',
                'question_ar' => 'منذ متى والمصحة قيد التشغيل؟',
                'answer_fr' => 'La clinique est en activité depuis plus de 20 ans, avec une expérience confirmée dans la prise en charge médicale et chirurgicale des patients, garantissant des soins de qualité et une expertise reconnue dans la région.',
                'answer_ar' => 'تعمل المصحة منذ أكثر من 20 عامًا، مع خبرة مؤكدة in الرعاية الطبية والجراحية للمرضى، مما يضمن جودة الرعاية والخبرة المعترف بها في المنطقة.',
                'order' => 2,
                'active' => true
            ],

            // group_consultation
            [
                'group_key' => 'group_consultation',
                'group_title_fr' => 'Préparer Votre Consultation',
                'group_title_ar' => 'التحضير للاستشارة',
                'question_fr' => 'Que faut-il apporter lors de la consultation ?',
                'question_ar' => 'ما الذي يجب إحضاره عند الاستشارة؟',
                'answer_fr' => "Lors de votre consultation, il est recommandé d'apporter vos documents médicaux (ordonnances, analyses, comptes rendus), votre carte d'identité et tout résultat d'examen récent pour faciliter une prise en charge complète et efficace.",
                'answer_ar' => 'عند استشارتك، يُنصح بإحضار مستنداتك الطبية (الوصفات الطبية، التحاليل، التقارير)، بطاقة هويتك وأي نتائج فحوصات حديثة لتسهيل الرعاية الشاملة والفعالة.',
                'order' => 0,
                'active' => true
            ],
            [
                'group_key' => 'group_consultation',
                'group_title_fr' => 'Préparer Votre Consultation',
                'group_title_ar' => 'التحضير للاستشارة',
                'question_fr' => 'Comment prendre rendez-vous ?',
                'question_ar' => 'كيف أحجز موعدًا؟',
                'answer_fr' => "Vous pouvez prendre rendez-vous par téléphone ou directement à l'accueil de la clinique. Notre équipe vous accompagne pour vous proposer un créneau adapté dans les meilleurs délais.",
                'answer_ar' => 'يمكنك حجز موعد عن طريق الهاتف أو مباشرة في مكتب استقبال المصحة. سيرافقك فريقنا لتقديم موعد مناسب في أقرب وقت ممكن.',
                'order' => 1,
                'active' => true
            ]
        ];

        foreach ($faqs as $faq) {
            CmsFaq::updateOrCreate(
                [
                    'group_key' => $faq['group_key'],
                    'question_fr' => $faq['question_fr']
                ],
                $faq
            );
        }

        // 7. Seed cms_media
        $medias = [
            [
                'key' => 'about_main',
                'file_path' => '',
                'original_name' => 'Screenshot 2026-04-21 105329 1.png',
                'type' => 'image',
                'disk' => 'public'
            ],
            [
                'key' => 'about_tl',
                'file_path' => '',
                'original_name' => 'Screenshot 2026-04-21 104656 1.png',
                'type' => 'image',
                'disk' => 'public'
            ],
            [
                'key' => 'about_br',
                'file_path' => '',
                'original_name' => 'Replace This.png',
                'type' => 'image',
                'disk' => 'public'
            ],
            [
                'key' => 'main_video_thumbnail',
                'file_path' => '',
                'original_name' => 'Video Box.png',
                'type' => 'image',
                'disk' => 'public'
            ],
            [
                'key' => 'main_video',
                'file_path' => '',
                'original_name' => 'clinique_moulouya_video.mp4',
                'type' => 'video',
                'disk' => 'public'
            ],
            [
                'key' => 'specialty_video_thumbnail',
                'file_path' => '',
                'original_name' => 'Group 1000011126.png',
                'type' => 'image',
                'disk' => 'public'
            ],
            [
                'key' => 'specialty_video',
                'file_path' => '',
                'original_name' => 'Clinique Moulouya 8.mp4',
                'type' => 'video',
                'disk' => 'public'
            ]
        ];

        foreach ($medias as $media) {
            CmsMedia::updateOrCreate(['key' => $media['key']], $media);
        }
    }
}
