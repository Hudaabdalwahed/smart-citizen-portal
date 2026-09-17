const { createApp } = Vue;


createApp({
components: {
    Navbar,
   AppFooter
},
    // ================= Data =================

    data() {

        return {


            // ================= Portal =================

            portalName:
                "بوابة المواطن الذكية",

            logo:
                "images/logo.png",



            // ================= Navbar =================

            homeLink:
                "الرئيسية",

            servicesLink:
                "الخدمات",

            requestsLink:
                "طلباتي",

            profileLink:
                "حسابي",



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



            // ================= Services Array =================

            services: [

                {
                    id: 1,

                    name:
                        "الوثائق الشخصية",

                    description:
                        "إصدار وتجديد الوثائق الشخصية",

                    image:
                        "images/documents.png"
                },


                {
                    id: 2,

                    name:
                        "المركبات",

                    description:
                        "خدمات المركبات ورخص القيادة",

                    image:
                        "images/vehicle.png"
                },


                {
                    id: 3,

                    name:
                        "العقارات",

                    description:
                        "الاستعلام عن الخدمات العقارية",

                    image:
                        "images/real_estate.png"
                },


                {
                    id: 4,

                    name:
                        "التعليم",

                    description:
                        "الخدمات التعليمية والشهادات",

                    image:
                        "images/education.png"
                }

            ],



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

            message:
                "",

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



            // ================= Footer =================

            footerDescription:
                "منصة رقمية لتسهيل الوصول إلى الخدمات الحكومية.",

            copyright:
                "© 2026 بوابة المواطن الذكية - جميع الحقوق محفوظة"

        };

    },



    // ================= Computed =================

    computed: {


        // ================= Class Binding =================

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



        // ================= Computed Property =================

        showFirstRequest() {


            if (
                this.requestSearch === ""
            ) {

                return true;

            }


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