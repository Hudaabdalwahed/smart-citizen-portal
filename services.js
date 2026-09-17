const { createApp } = Vue;


createApp({
    //COMPONENTS
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



            // ================= Page =================

            smallTitle:
                "خدماتنا",

            pageTitle:
                "الخدمات الإلكترونية",

            pageDescription:
                "استعرض الخدمات الحكومية واختر الخدمة التي تحتاج إليها بسهولة.",



            // ================= Search =================

            search:
                "",



            // ================= Category =================

            selectedCategory:
                "الكل",



            // ================= Services =================

            services: [

                {
                    id: 1,

                    name:
                        "إصدار الهوية الشخصية",

                    description:
                        "خدمة إصدار وتجديد الهوية الشخصية.",

                    category:
                        "وثائق",

                    image:
                        "images/documents.png"
                },


                {
                    id: 2,

                    name:
                        "تجديد جواز السفر",

                    description:
                        "تقديم طلب لتجديد جواز السفر.",

                    category:
                        "وثائق",

                    image:
                        "images/documents.png"
                },


                {
                    id: 3,

                    name:
                        "تجديد رخصة القيادة",

                    description:
                        "خدمة تجديد رخصة القيادة.",

                    category:
                        "مركبات",

                    image:
                        "images/vehicle.png"
                },


                {
                    id: 4,

                    name:
                        "تسجيل المركبة",

                    description:
                        "خدمات تسجيل ونقل ملكية المركبات.",

                    category:
                        "مركبات",

                    image:
                        "images/vehicle.png"
                },


                {
                    id: 5,

                    name:
                        "الاستعلام عن عقار",

                    description:
                        "الاستعلام عن المعلومات والخدمات العقارية.",

                    category:
                        "عقارات",

                    image:
                        "images/real_estate.png"
                },


                {
                    id: 6,

                    name:
                        "الخدمات التعليمية",

                    description:
                        "الوصول إلى الخدمات والشهادات التعليمية.",

                    category:
                        "تعليم",

                    image:
                        "images/education.png"
                }

            ],



            // ================= Footer =================

            footerDescription:
                "منصة رقمية لتسهيل الوصول إلى الخدمات الحكومية.",

            copyright:
                "© 2026 بوابة المواطن الذكية - جميع الحقوق محفوظة"

        };

    },



    // ================= Computed =================

    computed: {


        filteredServices() {


            return this.services.filter(
                service => {
                    const matchesSearch =
                        service.name
                            .toLowerCase()
                            .includes(
                                this.search.toLowerCase()
                            );


                    const matchesCategory =
                        this.selectedCategory === "الكل"
                        ||
                        service.category === this.selectedCategory;


                    return matchesSearch && matchesCategory;

                }
            );

        }

    }

}).mount("#app-root");