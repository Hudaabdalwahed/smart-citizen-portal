const { createApp } = Vue;


createApp({

    // ================= Data =================

    data() {

        return {


            // Portal

            portalName: "بوابة المواطن الذكية",

            logo: "images/logo.png",



            // Navbar

            homeLink: "الرئيسية",

            servicesLink: "الخدمات",

            requestsLink: "طلباتي",

            profileLink: "حسابي",



            // ================= Hero =================

            welcomeMessage:
                "أهلاً بك في بوابة المواطن",


            heroTitle:
                "خدماتك الحكومية",


            heroHighlight:
                "بسهولة وأمان",


            heroDescription:
                "أنجز معاملاتك واستعرض الخدمات الحكومية وتابع طلباتك من مكان واحد.",


            heroButton:
                "استعراض الخدمات",



            // ================= Services =================

            servicesSmallTitle:
                "خدماتنا",


            servicesTitle:
                "الخدمات الإلكترونية",


            servicesDescription:
                "اختر الخدمة التي تريد الوصول إليها",



            // Images

            documentIcon:
                "images/documents.png",


            vehicleIcon:
                "images/vehicle.png",


            realEstateIcon:
                "images/real_estate.png",


            educationIcon:
                "images/education.png",



            // Document

            documentService:
                "الوثائق الشخصية",


            documentDescription:
                "إصدار وتجديد الوثائق الشخصية",



            // Vehicle

            vehicleService:
                "المركبات",


            vehicleDescription:
                "خدمات المركبات ورخص القيادة",



            // Real Estate

            realEstateService:
                "العقارات",


            realEstateDescription:
                "الاستعلام عن الخدمات العقارية",



            // Education

            educationService:
                "التعليم",


            educationDescription:
                "الخدمات التعليمية والشهادات",



            // ================= Why Us =================

            whySmallTitle:
                "لماذا البوابة؟",


            whyTitle:
                "خدمات أسهل للمواطن",



            featureOneTitle:
                "سرعة",


            featureOneDescription:
                "الوصول إلى الخدمات بطريقة أسرع وأسهل.",



            featureTwoTitle:
                "أمان",


            featureTwoDescription:
                "الحفاظ على معلومات وطلبات المستخدم.",



            featureThreeTitle:
                "سهولة الاستخدام",


            featureThreeDescription:
                "واجهة بسيطة تعمل على مختلف الأجهزة.",



            // ================= Message =================

            message: "",


            messageColor:
                "#F2D36B",



            // ================= Request =================

            requestSearch:
                "",


            requestName:
                "تجديد رخصة القيادة",


            requestNumber:
                "REQ-2026-001",


            requestStatus:
                "قيد المعالجة",
                footerDescription:
    "منصة رقمية لتسهيل الوصول إلى الخدمات الحكومية.",

copyright:
    "© 2026 بوابة المواطن الذكية - جميع الحقوق محفوظة"

        };

    },



    // ================= Computed =================

    computed: {


        // Class Binding

        requestStatusClass() {


            if (
                this.requestStatus === "مكتمل"
            ) {

                return "status-success";

            }


            if (
                this.requestStatus === "قيد المعالجة"
            ) {

                return "status-pending";

            }


            return "status-default";

        },



        // Computed Property للبحث

        showFirstRequest() {


            // إذا مربع البحث فارغ

            if (
                this.requestSearch === ""
            ) {

                return true;

            }


            // البحث عن اسم الطلب
            return this.requestName
                .toLowerCase()
                .includes(
                    this.requestSearch.toLowerCase()
                );

        }

    },



    // ================= Methods =================

    methods: {


        showServices() {


            this.message =
                "تم اختيار الخدمات الإلكترونية";


        }

    }


}).mount("#app-root"); 