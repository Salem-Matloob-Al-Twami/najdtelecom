jQuery(document).ready(function() {
    // initailize html
    init();

    $("#toggle").click(function() {
        $(this).toggleClass("active");
        $("#overlay").toggleClass("open");
        return false;
    });

    // loader
    setTimeout(function() {
        $(".loader").fadeOut();
    }, 1000);

    var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: true,
        callback: function(box) {},
        scrollContainer: null,
        resetAnimation: true,
    });
    wow.init();

    // scroll-Top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $(".scrolltotop").fadeIn();
        } else {
            $(".scrolltotop").fadeOut();
        }
    });

    $(".scrolltotop").click(function() {
        $("html,body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
});

function copyToClipboard(element) {
    var $_temp = $("<input>");
    $("body").append($_temp);
    $_temp.val($(element).val()).select();
    document.execCommand("copy");
    $_temp.remove();
}

function getBranchData() {
    var data = [{
            city: {
                titleAr: "المدينه",
                titleEn: "City",
                titleDelimiter: " - ",
                valueAr: "الرياض",
                valueDelimiter: " - ",
                valueEn: "Riyadh",
            },
            elements: [{
                    header: [{
                            titleAr: "المنطقه",
                            titleDelimiter: " - ",
                            titleEn: "Area",
                        },
                        {
                            titleAr: "الشارع",
                            titleDelimiter: " - ",
                            titleEn: "Street",
                        },
                        {
                            titleAr: "رقم الفرع",
                            titleDelimiter: " - ",
                            titleEn: "Branch Number",
                        },
                        {
                            titleAr: "الموقع",
                            titleDelimiter: " - ",
                            titleEn: "Location",
                        },
                    ],
                },
                {
                    body: [
                        [{
                                valueAr: "مركز الكترون",
                                valueDelimiter: " - ",
                                valueEn: "Electron Center",
                            },
                            {
                                valueAr: "شارع البطحاء",
                                valueDelimiter: " - ",
                                valueEn: "Batha Street",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 2,
                            },
                            {
                                valueAr: "https://goo.gl/maps/cLNugZoSrREgFJez7",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                        [{
                                valueAr: "مركز الكترون",
                                valueDelimiter: " - ",
                                valueEn: "Electron Center",
                            },
                            {
                                valueAr: "شارع البطحاء",
                                valueDelimiter: " - ",
                                valueEn: "Batha Street",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 3,
                            },
                            {
                                valueAr: "https://goo.gl/maps/cLNugZoSrREgFJez7",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                        [{
                                valueAr: "مجمع اساس",
                                valueDelimiter: " - ",
                                valueEn: "Asas center",
                            },
                            {
                                valueAr: "المرسلات",
                                valueDelimiter: " - ",
                                valueEn: "Mursalat",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 4,
                            },
                            {
                                valueAr: "https://goo.gl/maps/sooSj4HPd8h7L5UX8",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                        [{
                                valueAr: "مجمع اساس",
                                valueDelimiter: " - ",
                                valueEn: "Asas center",
                            },
                            {
                                valueAr: "المرسلات",
                                valueDelimiter: " - ",
                                valueEn: "Mursalat",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 14,
                            },
                            {
                                valueAr: "https://goo.gl/maps/sooSj4HPd8h7L5UX8",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                        [{
                                valueAr: "مجمع الراجحي ",
                                valueDelimiter: " - ",
                                valueEn: "Al Rajhi",
                            },
                            {
                                valueAr: "شارع البطحاء",
                                valueDelimiter: " - ",
                                valueEn: "Batha Street",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 9,
                            },
                            {
                                valueAr: "https://goo.gl/maps/cLNugZoSrREgFJez7",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                        [{
                                valueAr: "مجمع الراجحي ",
                                valueDelimiter: " - ",
                                valueEn: "Al Rajhi",
                            },
                            {
                                valueAr: "شارع البطحاء",
                                valueDelimiter: " - ",
                                valueEn: "Batha Street",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 22,
                            },
                            {
                                valueAr: "https://goo.gl/maps/cLNugZoSrREgFJez7",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                        [{
                                valueAr: "مجمع الراجحي ",
                                valueDelimiter: " - ",
                                valueEn: "Al Rajhi",
                            },
                            {
                                valueAr: "شارع البطحاء",
                                valueDelimiter: " - ",
                                valueEn: "Batha Street",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 23,
                            },
                            {
                                valueAr: "https://goo.gl/maps/cLNugZoSrREgFJez7",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                        [{
                                valueAr: "مجمع الراجحي ",
                                valueDelimiter: " - ",
                                valueEn: "Al Rajhi",
                            },
                            {
                                valueAr: "شارع البطحاء",
                                valueDelimiter: " - ",
                                valueEn: "Batha Street",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 21,
                            },
                            {
                                valueAr: "https://goo.gl/maps/cLNugZoSrREgFJez7",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                        [{
                                valueAr: "مركز الكترون",
                                valueDelimiter: " - ",
                                valueEn: "Electron Center ",
                            },
                            {
                                valueAr: "شارع البطحاء",
                                valueDelimiter: " - ",
                                valueEn: "Batha Street",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 37,
                            },
                            {
                                valueAr: "https://goo.gl/maps/cLNugZoSrREgFJez7",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                        [{
                                valueAr: "مركز الكترون",
                                valueDelimiter: " - ",
                                valueEn: "Electron Center ",
                            },
                            {
                                valueAr: "شارع البطحاء",
                                valueDelimiter: " - ",
                                valueEn: "Batha Street",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 25,
                            },
                            {
                                valueAr: "https://goo.gl/maps/cLNugZoSrREgFJez7",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                        [{
                                valueAr: "مجمع الراجحي ",
                                valueDelimiter: " - ",
                                valueEn: "Al Rajhi",
                            },
                            {
                                valueAr: "شارع البطحاء",
                                valueDelimiter: " - ",
                                valueEn: "Batha Street",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 26,
                            },
                            {
                                valueAr: "https://goo.gl/maps/cLNugZoSrREgFJez7",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                    ],
                },
            ],
        },
        {
            city: {
                titleAr: "المدينه",
                titleEn: "City",
                titleDelimiter: " - ",
                valueAr: "الجبيل",
                valueDelimiter: " - ",
                valueEn: "AlJubail",
            },
            elements: [{
                    header: [{
                            titleAr: "المنطقه",
                            titleDelimiter: " - ",
                            titleEn: "Area",
                        },
                        {
                            titleAr: "الشارع",
                            titleDelimiter: " - ",
                            titleEn: "Street",
                        },
                        {
                            titleAr: "رقم الفرع",
                            titleDelimiter: " - ",
                            titleEn: "Branch Number",
                        },
                        {
                            titleAr: "الموقع",
                            titleDelimiter: " - ",
                            titleEn: "Location",
                        },
                    ],
                },
                {
                    body: [
                        [{
                                valueAr: "الجبيل",
                                valueDelimiter: " - ",
                                valueEn: "Al Jubail",
                            },
                            {
                                valueAr: "شارع الجبل",
                                valueDelimiter: " - ",
                                valueEn: "AlJabal Street",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 16,
                            },
                            {
                                valueAr: "https://goo.gl/maps/Rp8uNpRhXiPHGbBH7",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                    ],
                },
            ],
        },
        {
            city: {
                titleAr: "المدينه",
                titleEn: "City",
                titleDelimiter: " - ",
                valueAr: "الجوف",
                valueDelimiter: " - ",
                valueEn: "Aljawf",
            },
            elements: [{
                    header: [{
                            titleAr: "المنطقه",
                            titleDelimiter: " - ",
                            titleEn: "Area",
                        },
                        {
                            titleAr: "الشارع",
                            titleDelimiter: " - ",
                            titleEn: "Street",
                        },
                        {
                            titleAr: "رقم الفرع",
                            titleDelimiter: " - ",
                            titleEn: "Branch Number",
                        },
                        {
                            titleAr: "الموقع",
                            titleDelimiter: " - ",
                            titleEn: "Location",
                        },
                    ],
                },
                {
                    body: [
                        [{
                                valueAr: "مركز العقارية",
                                valueDelimiter: " - ",
                                valueEn: "Aqaria center",
                            },
                            {
                                valueAr: "الجوف",
                                valueDelimiter: " - ",
                                valueEn: "Aljawf",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 12,
                            },
                            {
                                valueAr: "https://goo.gl/maps/bSFLug5eGcMARGbq6",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                    ],
                },
            ],
        },
        {
            city: {
                titleAr: "المدينه",
                titleEn: "City",
                titleDelimiter: " - ",
                valueAr: "الهفوف, الاحساء",
                valueDelimiter: " - ",
                valueEn: "Hafof, Ahsa",
            },
            elements: [{
                    header: [{
                            titleAr: "المنطقه",
                            titleDelimiter: " - ",
                            titleEn: "Area",
                        },
                        {
                            titleAr: "الشارع",
                            titleDelimiter: " - ",
                            titleEn: "Street",
                        },
                        {
                            titleAr: "رقم الفرع",
                            titleDelimiter: " - ",
                            titleEn: "Branch Number",
                        },
                        {
                            titleAr: "الموقع",
                            titleDelimiter: " - ",
                            titleEn: "Location",
                        },
                    ],
                },
                {
                    body: [
                        [{
                                valueAr: "سوق الجوالات",
                                valueDelimiter: " - ",
                                valueEn: "Phones market",
                            },
                            {
                                valueAr: "الهفوف",
                                valueDelimiter: " - ",
                                valueEn: "Hafof",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 18,
                            },
                            {
                                valueAr: "https://goo.gl/maps/pBsfSDpy1FLWoSXu9",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                    ],
                },
            ],
        },
        {
            city: {
                titleAr: "المدينه",
                titleEn: "City",
                titleDelimiter: " - ",
                valueAr: "حائل",
                valueDelimiter: " - ",
                valueEn: "Hail",
            },
            elements: [{
                    header: [{
                            titleAr: "المنطقه",
                            titleDelimiter: " - ",
                            titleEn: "Area",
                        },
                        {
                            titleAr: "الشارع",
                            titleDelimiter: " - ",
                            titleEn: "Street",
                        },
                        {
                            titleAr: "رقم الفرع",
                            titleDelimiter: " - ",
                            titleEn: "Branch Number",
                        },
                        {
                            titleAr: "الموقع",
                            titleDelimiter: " - ",
                            titleEn: "Location",
                        },
                    ],
                },
                {
                    body: [
                        [{
                                valueAr: "المنطقة الوسطى",
                                valueDelimiter: " - ",
                                valueEn: "Al Wseta area",
                            },
                            {
                                valueAr: "شارع رقم 30",
                                valueDelimiter: " - ",
                                valueEn: "The 30 Street",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 20,
                            },
                            {
                                valueAr: "https://goo.gl/maps/borC4xAkaicpPaUcA",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                    ],
                },
            ],
        },
        {
            city: {
                titleAr: "المدينه",
                titleEn: "City",
                titleDelimiter: " - ",
                valueAr: "حفر الباطن",
                valueDelimiter: " - ",
                valueEn: "Hafr Al Baten",
            },
            elements: [{
                    header: [{
                            titleAr: "المنطقه",
                            titleDelimiter: " - ",
                            titleEn: "Area",
                        },
                        {
                            titleAr: "الشارع",
                            titleDelimiter: " - ",
                            titleEn: "Street",
                        },
                        {
                            titleAr: "رقم الفرع",
                            titleDelimiter: " - ",
                            titleEn: "Branch Number",
                        },
                        {
                            titleAr: "الموقع",
                            titleDelimiter: " - ",
                            titleEn: "Location",
                        },
                    ],
                },
                {
                    body: [
                        [{
                                valueAr: "مركز العقارية",
                                valueDelimiter: " - ",
                                valueEn: "Aqaria center",
                            },
                            {
                                valueAr: "شارع الملك سلمان ",
                                valueDelimiter: " - ",
                                valueEn: "King Salman Rd.",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 17,
                            },
                            {
                                valueAr: "https://goo.gl/maps/49SiNmebboEUFKU3A",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                    ],
                },
            ],
        },
        {
            city: {
                titleAr: "المدينه",
                titleEn: "City",
                titleDelimiter: " - ",
                valueAr: "الدمام",
                valueDelimiter: " - ",
                valueEn: "Dammam",
            },
            elements: [{
                    header: [{
                            titleAr: "المنطقه",
                            titleDelimiter: " - ",
                            titleEn: "Area",
                        },
                        {
                            titleAr: "الشارع",
                            titleDelimiter: " - ",
                            titleEn: "Street",
                        },
                        {
                            titleAr: "رقم الفرع",
                            titleDelimiter: " - ",
                            titleEn: "Branch Number",
                        },
                        {
                            titleAr: "الموقع",
                            titleDelimiter: " - ",
                            titleEn: "Location",
                        },
                    ],
                },
                {
                    body: [
                        [{
                                valueAr: "مركز حياة بلازا ",
                                valueDelimiter: " - ",
                                valueEn: "Hayat Plaza canter",
                            },
                            {
                                valueAr: "الدمام",
                                valueDelimiter: " - ",
                                valueEn: "Dammam",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 28,
                            },
                            {
                                valueAr: "https://goo.gl/maps/rBEGTrKGSakWobX66",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                    ],
                },
            ],
        },
        {
            city: {
                titleAr: "المدينه",
                titleEn: "City",
                titleDelimiter: " - ",
                valueAr: "المدينة",
                valueDelimiter: " - ",
                valueEn: "Al Madena",
            },
            elements: [{
                    header: [{
                            titleAr: "المنطقه",
                            titleDelimiter: " - ",
                            titleEn: "Area",
                        },
                        {
                            titleAr: "الشارع",
                            titleDelimiter: " - ",
                            titleEn: "Street",
                        },
                        {
                            titleAr: "رقم الفرع",
                            titleDelimiter: " - ",
                            titleEn: "Branch Number",
                        },
                        {
                            titleAr: "الموقع",
                            titleDelimiter: " - ",
                            titleEn: "Location",
                        },
                    ],
                },
                {
                    body: [
                        [{
                                valueAr: "المدينة",
                                valueDelimiter: " - ",
                                valueEn: "Al Madena",
                            },
                            {
                                valueAr: "شارع الحزام",
                                valueDelimiter: " - ",
                                valueEn: "Al Hezam Street",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 26,
                            },
                            {
                                valueAr: "https://goo.gl/maps/KRZBaqqjo5uGnfxXA",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                    ],
                },
            ],
        },
        {
            city: {
                titleAr: "المدينه",
                titleEn: "City",
                titleDelimiter: " - ",
                valueAr: "تبوك ",
                valueDelimiter: " - ",
                valueEn: "Tabuk",
            },
            elements: [{
                    header: [{
                            titleAr: "المنطقه",
                            titleDelimiter: " - ",
                            titleEn: "Area",
                        },
                        {
                            titleAr: "الشارع",
                            titleDelimiter: " - ",
                            titleEn: "Street",
                        },
                        {
                            titleAr: "رقم الفرع",
                            titleDelimiter: " - ",
                            titleEn: "Branch Number",
                        },
                        {
                            titleAr: "الموقع",
                            titleDelimiter: " - ",
                            titleEn: "Location",
                        },
                    ],
                },
                {
                    body: [
                        [{
                                valueAr: "حي العزيزية",
                                valueDelimiter: " - ",
                                valueEn: "Azizia dist",
                            },
                            {
                                valueAr: "تبوك",
                                valueDelimiter: " - ",
                                valueEn: "Tabuk",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 33,
                            },
                            {
                                valueAr: "https://goo.gl/maps/sHWa3PWb9hzeYkLk7",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                    ],
                },
            ],
        },
        {
            city: {
                titleAr: "المدينه",
                titleEn: "City",
                titleDelimiter: " - ",
                valueAr: "جازان",
                valueDelimiter: " - ",
                valueEn: "Jazan",
            },
            elements: [{
                    header: [{
                            titleAr: "المنطقه",
                            titleDelimiter: " - ",
                            titleEn: "Area",
                        },
                        {
                            titleAr: "الشارع",
                            titleDelimiter: " - ",
                            titleEn: "Street",
                        },
                        {
                            titleAr: "رقم الفرع",
                            titleDelimiter: " - ",
                            titleEn: "Branch Number",
                        },
                        {
                            titleAr: "الموقع",
                            titleDelimiter: " - ",
                            titleEn: "Location",
                        },
                    ],
                },
                {
                    body: [
                        [{
                                valueAr: "ابو عريش",
                                valueDelimiter: " - ",
                                valueEn: "Abu Aresh",
                            },
                            {
                                valueAr: "مركز المحمدية",
                                valueDelimiter: " - ",
                                valueEn: "Mohamdia center",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 29,
                            },
                            {
                                valueAr: "https://goo.gl/maps/FC5oRN9QzKj629oM6",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                    ],
                },
            ],
        },
        {
            city: {
                titleAr: "المدينه",
                titleEn: "City",
                titleDelimiter: " - ",
                valueAr: "جدة",
                valueDelimiter: " - ",
                valueEn: "JEDDAH",
            },
            elements: [{
                    header: [{
                            titleAr: "المنطقه",
                            titleDelimiter: " - ",
                            titleEn: "Area",
                        },
                        {
                            titleAr: "الشارع",
                            titleDelimiter: " - ",
                            titleEn: "Street",
                        },
                        {
                            titleAr: "رقم الفرع",
                            titleDelimiter: " - ",
                            titleEn: "Branch Number",
                        },
                        {
                            titleAr: "الموقع",
                            titleDelimiter: " - ",
                            titleEn: "Location",
                        },
                    ],
                },
                {
                    body: [
                        [{
                                valueAr: "جدة",
                                valueDelimiter: " - ",
                                valueEn: "Jeddah",
                            },
                            {
                                valueAr: "شارع فلسطين",
                                valueDelimiter: " - ",
                                valueEn: "Palestine Street",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 27,
                            },
                            {
                                valueAr: "https://goo.gl/maps/iGvEdJ6qS1trYBqS8",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                        [{
                                valueAr: "جدة",
                                valueDelimiter: " - ",
                                valueEn: "Jeddah",
                            },
                            {
                                valueAr: "شارع فلسطين",
                                valueDelimiter: " - ",
                                valueEn: "Palestine Street",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 6,
                            },
                            {
                                valueAr: "https://goo.gl/maps/iGvEdJ6qS1trYBqS8",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                        [{
                                valueAr: "جدة",
                                valueDelimiter: " - ",
                                valueEn: "Jeddah",
                            },
                            {
                                valueAr: "شارع فلسطين",
                                valueDelimiter: " - ",
                                valueEn: "Palestine Street",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 38,
                            },
                            {
                                valueAr: "https://goo.gl/maps/iGvEdJ6qS1trYBqS8",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                    ],
                },
            ],
        },

        {
            city: {
                titleAr: "المدينه",
                titleEn: "City",
                titleDelimiter: " - ",
                valueAr: "خميس مشيط ",
                valueDelimiter: " - ",
                valueEn: "Khames Mushait",
            },
            elements: [{
                    header: [{
                            titleAr: "المنطقه",
                            titleDelimiter: " - ",
                            titleEn: "Area",
                        },
                        {
                            titleAr: "الشارع",
                            titleDelimiter: " - ",
                            titleEn: "Street",
                        },
                        {
                            titleAr: "رقم الفرع",
                            titleDelimiter: " - ",
                            titleEn: "Branch Number",
                        },
                        {
                            titleAr: "الموقع",
                            titleDelimiter: " - ",
                            titleEn: "Location",
                        },
                    ],
                },
                {
                    body: [
                        [{
                                valueAr: "خميس مشيط ",
                                valueDelimiter: " - ",
                                valueEn: "Khames Mushait",
                            },
                            {
                                valueAr: "شارع رقم 30",
                                valueDelimiter: " - ",
                                valueEn: "30 Street",
                            },
                            {
                                valueAr: "",
                                valueDelimiter: "",
                                valueEn: 35,
                            },
                            {
                                valueAr: "https://goo.gl/maps/NWYu6oe4b1hTACv39",
                                valueDelimiter: "",
                                valueEn: "Copy",
                            },
                        ],
                    ],
                },
            ],
        },
    ];
    return data;
}

var $_br = "";

function init() {
    // return an array of json objects
    var $_branchData = getBranchData();
    $_branchData.forEach((elements) => {
        apply(elements);
    });
}

function apply(elements) {
    var $_header =
        createHeader() +
        createBodyHeader(elements.city) +
        createBody(
            elements.city.valueAr,
            elements.city.valueDelimiter,
            elements.city.valueEn
        ) +
        closeBodyHeader() +
        closeHeader();
    var $_body = body(elements.elements);
    document.getElementById("mainContainer").innerHTML +=
        $_br + $_header + $_body;
    $_br = '<div class="clear-text"></div>';
}

function body(elements) {
    var $_body = "";
    $_body += createHeader();
    elements[0].header.forEach((header, idx) => {
        $_body += createBodyHeader(header);

        elements[1].body.forEach((body) => {
            if (idx === body.length - 1) {
                $_body += createCopyButton(
                    body[idx].valueAr,
                    body[idx].valueDelimiter,
                    body[idx].valueEn
                );
            } else {
                $_body += createBody(
                    body[idx].valueAr,
                    body[idx].valueDelimiter,
                    body[idx].valueEn
                );
            }
        });
        $_body += closeBodyHeader();
    });
    $_body += closeHeader();

    return $_body;
}

function createHeader() {
    var $_header = '<div class="row kMainRow">';

    return $_header;
}

function closeHeader() {
    var $_closeBodyHeader = "</div>";
    return $_closeBodyHeader;
}

function createBodyHeader(header) {
    var $_header =
        '<div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">' +
        '<div class="row kHeading"><ul><li><span class="name" dir="auto">' +
        header.titleAr +
        "</span>" +
        header.titleDelimiter +
        header.titleEn +
        "</li></ul></div>";
    return $_header;
}

function closeBodyHeader() {
    var $_closeBodyHeader = "</div>";
    return $_closeBodyHeader;
}

function createBody(valueAr, valueDelimiter, valueEn) {
    var $_bodyHtml =
        '<div class="row kBody">' +
        "<ul>" +
        "<li>" +
        '<span class="name" dir="auto">' +
        valueAr +
        "</span> " +
        valueDelimiter +
        valueEn +
        "</li>" +
        "</ul>" +
        "</div>";
    return $_bodyHtml;
}

function createCopyButton(valueAr, valueDelimiter, valueEn) {
    var $_bodyHtml =
        '<div class="row kBody" style="padding: 9px;">' +
        '<button type="button" value="' +
        valueAr +
        '" class="btn btn-primary kBtnCopy" onclick="copyToClipboard(this)">' +
        valueEn +
        "</button> " +
        "</div>";

    return $_bodyHtml;
}