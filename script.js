const { createApp } = Vue;

createApp({

    data() {

        return {

            // اسم البوابة
            portalName: "بوابة المواطن الذكية",

            // Navbar
            homeLink: "الرئيسية",
            servicesLink: "الخدمات",
            requestsLink: "طلباتي",
            profileLink: "حسابي",


            // Hero
            welcomeMessage: "أهلاً بك في بوابة المواطن",

            heroTitle: "خدماتك الحكومية",

            heroHighlight: "بسهولة وأمان",

            heroDescription:
                "أنجز معاملاتك واستعرض الخدمات الحكومية وتابع طلباتك من مكان واحد.",

            heroButton: "استعراض الخدمات",

            imageDescription:
                "خدمات رقمية في مكان واحد",


            // Services
            servicesSmallTitle: "خدماتنا",

            servicesTitle: "الخدمات الإلكترونية",

            servicesDescription:
                "اختر الخدمة التي تريد الوصول إليها",


            // Service 1
            documentService: "الوثائق الشخصية",

            documentDescription:
                "إصدار وتجديد الوثائق الشخصية",


            // Service 2
            vehicleService: "المركبات",

            vehicleDescription:
                "خدمات المركبات ورخص القيادة",


            // Service 3
            realEstateService: "العقارات",

            realEstateDescription:
                "الاستعلام عن الخدمات العقارية",


            // Service 4
            educationService: "التعليم",

            educationDescription:
                "الخدمات التعليمية والشهادات",


            // Why us
            whySmallTitle: "لماذا البوابة؟",

            whyTitle: "خدمات أسهل للمواطن",


            featureOneTitle: "سرعة",

            featureOneDescription:
                "الوصول إلى الخدمات بطريقة أسرع وأسهل.",


            featureTwoTitle: "أمان",

            featureTwoDescription:
                "الحفاظ على معلومات وطلبات المستخدم.",


            featureThreeTitle: "سهولة الاستخدام",

            featureThreeDescription:
                "واجهة بسيطة تعمل على مختلف الأجهزة.",


            // Footer
            footerDescription:
                "منصة رقمية تجريبية للخدمات الحكومية",

            copyright:
                "© 2026 بوابة المواطن الذكية",


            // message
            message: ""

        };

    },


    methods: {

        showServices() {

            this.message = "تم اختيار الخدمات الإلكترونية";

        }

    }

}).mount("#app-root");