/* =========================================================
   ELNORDA MAIN JAVASCRIPT
========================================================= */

(() => {

    "use strict";


    /* =====================================================
       CONSTANTS
    ===================================================== */

    const WHATSAPP_NUMBER = "201043861996";

    const THEME_KEY = "elnordaTheme";
    const LANGUAGE_KEY = "elnordaLanguage";


    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {

        ar: {

            "nav-home": "الرئيسية",
            "nav-materials": "الخامات",
            "nav-courses": "الكورسات",

            "hero-eyebrow":
                "ELNORDA · FLOWERS & CRAFTS",

            "hero-title":
                "تفاصيل صغيرة<br>تصنع ذكرى كبيرة.",

            "hero-text":
                "بوكيهات وتنسيقات زهور مصممة بعناية، لكل لحظة تستحق أن تُحفظ بشكل مختلف.",

            "hero-primary":
                "اكتشف البوكيهات",

            "hero-secondary":
                "تعرف على Elnorda",

            "hero-note":
                "تنسيق، تفاصيل، ولمسة شخصية في كل قطعة.",

            "floating-label":
                "Crafted with care",

            "floating-title":
                "Made for your moment.",

            "intro-kicker":
                "01 · THE ELNORDA STORY",

            "intro-title":
                "الزهور مش مجرد هدية، <em>هي إحساس.</em>",

            "intro-text":
                "في Elnorda بنهتم بالتفاصيل اللي بتخلي البوكيه شبه الشخص والمناسبة اللي اتعمل علشانها. من اختيار الزهور لحد شكل التغليف، كل خطوة ليها معنى.",

            "value-one-title":
                "تفاصيل محسوبة",

            "value-one-text":
                "كل تنسيق بيتعمل باهتمام بالتفاصيل والشكل النهائي.",

            "value-two-title":
                "لمسة شخصية",

            "value-two-text":
                "نساعدك تختار التنسيق المناسب للمناسبة والشخص.",

            "value-three-title":
                "أكثر من بوكيه",

            "value-three-text":
                "منتجات، خامات، وكورسات تجمع كل ما يتعلق بفن تنسيق الزهور.",

            "products-kicker":
                "02 · BOUQUETS",

            "products-title":
                "اختار التنسيق <span>اللي يشبه مناسبتك.</span>",

            "products-intro":
                "مجموعة من التصاميم الأساسية، ويمكن تعديل التفاصيل حسب الطلب.",

            "product-one-category":
                "Signature",

            "product-one-title":
                "Elnorda Classic",

            "product-one-text":
                "تنسيق أنيق وهادئ يجمع بين الألوان الناعمة والتفاصيل الكلاسيكية.",

            "product-two-category":
                "Baby's Breath",

            "product-two-title":
                "Baby's Breath",

            "product-two-text":
                "تنسيق رقيق وخفيف، مناسب للهدايا والمناسبات والديكور.",

            "product-three-category":
                "Custom",

            "product-three-title":
                "Custom Design",

            "product-three-text":
                "تصميم حسب اللون والشكل والمناسبة والتفاصيل المطلوبة.",

            "product-four-category":
                "Decoration",

            "product-four-title":
                "Flower Decoration",

            "product-four-text":
                "تنسيقات للبيوت، المناسبات، الطاولات والمساحات الخاصة.",

            "order-button":
                "اطلب هذا التصميم",

            "process-kicker":
                "03 · HOW IT WORKS",

            "process-title":
                "الطلب أبسط مما تتخيل.",

            "process-text":
                "اختار التصميم، أكمل بيانات الطلب، وهنكمل معاك التفاصيل على WhatsApp.",

            "step-one-title":
                "اختار",

            "step-one-text":
                "اختار البوكيه أو التنسيق المناسب.",

            "step-two-title":
                "أكمل البيانات",

            "step-two-text":
                "اكتب الكمية والتفاصيل ومكان التوصيل.",

            "step-three-title":
                "نتواصل معك",

            "step-three-text":
                "الطلب هيتحول مباشرة إلى WhatsApp.",

            "about-kicker":
                "04 · ABOUT ELNORDA",

            "about-title":
                "مساحة تجمع بين <em>الزهور والحرفة.</em>",

            "about-text-one":
                "Elnorda مش مجرد مكان لشراء بوكيه. هي مساحة تجمع بين تصميم الزهور، الخامات، والتعليم.",

            "about-text-two":
                "سواء كنت بتدور على هدية مميزة، أو عايز تتعلم تنسيق الزهور، أو محتاج خامات لشغلك، هتلاقي كل ده في مكان واحد.",

            "about-materials":
                "استكشف الخامات",

            "about-courses":
                "شوف الكورسات",

            "cta-kicker":
                "LET'S MAKE IT SPECIAL",

            "cta-title":
                "عندك مناسبة؟<br>خلّي الزهور تحكي عنها.",

            "cta-text":
                "ابعتلنا التفاصيل، ونبدأ من أول اختيار لحد الشكل النهائي.",

            "cta-button":
                "تواصل عبر WhatsApp",

            "footer-text":
                "Flowers, details & beautiful moments.",

            "footer-rights":
                "جميع الحقوق محفوظة",

            "modal-kicker":
                "ORDER DETAILS",

            "modal-title":
                "تفاصيل الطلب",

            "modal-text":
                "أكمل البيانات، وسيتم تحويل الطلب إلى WhatsApp.",

            "form-name":
                "الاسم",

            "form-name-placeholder":
                "اكتب الاسم",

            "form-phone":
                "رقم الهاتف",

            "form-quantity":
                "الكمية",

            "form-recipient":
                "اسم المستلم",

            "form-recipient-placeholder":
                "اسم المستلم",

            "form-address":
                "العنوان",

            "form-address-placeholder":
                "مكان التوصيل",

            "form-note":
                "ملاحظات",

            "form-note-placeholder":
                "أي تفاصيل إضافية...",

            "form-submit":
                "إرسال الطلب عبر WhatsApp",

            "courses-kicker":
                "ELNORDA · ACADEMY",

            "courses-title":
                "اتعلم فن تنسيق الزهور<br>بطريقة عملية وواضحة.",

            "courses-intro":
                "كورسات Elnorda مصممة لتبدأ من الأساسيات وتتعلم خطوة بخطوة، أونلاين أو أوفلاين.",

            "online-title":
                "Online Course",

            "online-text":
                "تعلم من مكانك، بمحتوى منظم يساعدك على فهم أساسيات تنسيق الزهور وتطبيقها عمليًا.",

            "online-feature-one":
                "أساسيات تنسيق الزهور",

            "online-feature-two":
                "اختيار الألوان والخامات",

            "online-feature-three":
                "تطبيقات عملية",

            "offline-title":
                "Offline Course",

            "offline-text":
                "تجربة عملية داخل التدريب، مع شرح مباشر وتطبيق خطوة بخطوة على تنسيقات الزهور.",

            "offline-feature-one":
                "تدريب عملي مباشر",

            "offline-feature-two":
                "التعامل مع الخامات",

            "offline-feature-three":
                "تطبيق على أكثر من تصميم",

            "course-register":
                "التسجيل في الكورس",

            "course-cta-kicker":
                "START YOUR JOURNEY",

            "course-cta-title":
                "الكورس المناسب يبدأ بخطوة.",

            "course-cta-text":
                "اختار نوع التدريب، وأرسل بيانات التسجيل ونكمل معاك التفاصيل على WhatsApp.",

            "course-modal-kicker":
                "COURSE REGISTRATION",

            "course-modal-title":
                "بيانات التسجيل",

            "course-modal-text":
                "أكمل البيانات وسيتم إرسالها إلى WhatsApp.",

            "form-age":
                "السن",

            "course-submit":
                "إرسال بيانات التسجيل",

            "materials-kicker":
                "ELNORDA · MATERIALS",

            "materials-title":
                "كل الخامات اللي تحتاجها<br>لتصنع تنسيقك الخاص.",

            "materials-intro":
                "خامات مختارة لتنسيق الزهور والتغليف والتفاصيل النهائية.",

            "material-one-title":
                "Baby's Breath",

            "material-one-text":
                "خامات مناسبة لتنسيقات البيبي كلينر والتفاصيل الناعمة.",

            "material-two-title":
                "Packaging",

            "material-two-text":
                "خامات تغليف تساعدك تطلع الشكل النهائي بشكل أنيق ومرتب.",

            "material-three-title":
                "Ribbons & Accessories",

            "material-three-text":
                "شرائط وإكسسوارات لإضافة اللمسة النهائية للتنسيق.",

            "material-four-title":
                "Tools",

            "material-four-text":
                "أدوات تساعدك في تنفيذ وتنسيق البوكيهات والتصميمات.",

            "material-order":
                "طلب الخامة",

            "materials-cta-kicker":
                "BUILD YOUR OWN",

            "materials-cta-title":
                "عندك خامة معينة في بالك؟",

            "materials-cta-text":
                "ابعتلنا اللي محتاجه ونتواصل معاك لمعرفة التفاصيل والتوفر.",

            "materials-cta-button":
                "تواصل معنا",

            "material-modal-kicker":
                "MATERIAL ORDER",

            "material-modal-title":
                "طلب الخامة",

            "material-modal-text":
                "اكتب بياناتك والكمية المطلوبة.",

            "material-submit":
                "إرسال الطلب"
        },


        en: {

            "nav-home":
                "Home",

            "nav-materials":
                "Materials",

            "nav-courses":
                "Courses",

            "hero-eyebrow":
                "ELNORDA · FLOWERS & CRAFTS",

            "hero-title":
                "Small details<br>make lasting memories.",

            "hero-text":
                "Carefully crafted bouquets and floral arrangements for moments worth remembering differently.",

            "hero-primary":
                "Explore Bouquets",

            "hero-secondary":
                "Discover Elnorda",

            "hero-note":
                "Thoughtful arrangements, beautiful details, personal touches.",

            "floating-label":
                "Crafted with care",

            "floating-title":
                "Made for your moment.",

            "intro-kicker":
                "01 · THE ELNORDA STORY",

            "intro-title":
                "Flowers are not just a gift, <em>they are a feeling.</em>",

            "intro-text":
                "At Elnorda, we care about the details that make every bouquet feel personal to the person and the occasion. From choosing the flowers to the final wrapping, every step matters.",

            "value-one-title":
                "Thoughtful Details",

            "value-one-text":
                "Every arrangement is created with attention to detail and the final presentation.",

            "value-two-title":
                "A Personal Touch",

            "value-two-text":
                "We help you find an arrangement that fits the occasion and the person.",

            "value-three-title":
                "More Than Bouquets",

            "value-three-text":
                "Products, materials and courses bringing everything floral together.",

            "products-kicker":
                "02 · BOUQUETS",

            "products-title":
                "Find the arrangement <span>that fits your moment.</span>",

            "products-intro":
                "A selection of signature designs that can be customized upon request.",

            "product-one-category":
                "Signature",

            "product-one-title":
                "Elnorda Classic",

            "product-one-text":
                "A refined arrangement combining soft tones with timeless details.",

            "product-two-category":
                "Baby's Breath",

            "product-two-title":
                "Baby's Breath",

            "product-two-text":
                "Light and delicate, perfect for gifts, occasions and décor.",

            "product-three-category":
                "Custom",

            "product-three-title":
                "Custom Design",

            "product-three-text":
                "A design created around your preferred colors, shape and occasion.",

            "product-four-category":
                "Decoration",

            "product-four-title":
                "Flower Decoration",

            "product-four-text":
                "Floral arrangements for homes, events, tables and special spaces.",

            "order-button":
                "Order this design",

            "process-kicker":
                "03 · HOW IT WORKS",

            "process-title":
                "Ordering is simpler than you think.",

            "process-text":
                "Choose your design, complete the order details and continue with us on WhatsApp.",

            "step-one-title":
                "Choose",

            "step-one-text":
                "Choose the bouquet or arrangement you like.",

            "step-two-title":
                "Add Details",

            "step-two-text":
                "Tell us the quantity, details and delivery location.",

            "step-three-title":
                "We Connect",

            "step-three-text":
                "Your request will be sent directly to WhatsApp.",

            "about-kicker":
                "04 · ABOUT ELNORDA",

            "about-title":
                "A space for <em>flowers and craft.</em>",

            "about-text-one":
                "Elnorda is more than a place to buy a bouquet. It brings together floral design, materials and education.",

            "about-text-two":
                "Whether you are looking for a special gift, learning floral arrangement or sourcing materials for your work, you can find it all in one place.",

            "about-materials":
                "Explore Materials",

            "about-courses":
                "View Courses",

            "cta-kicker":
                "LET'S MAKE IT SPECIAL",

            "cta-title":
                "Have an occasion?<br>Let flowers tell the story.",

            "cta-text":
                "Send us the details and let's build it together from the first choice to the final look.",

            "cta-button":
                "Contact on WhatsApp",

            "footer-text":
                "Flowers, details & beautiful moments.",

            "footer-rights":
                "All rights reserved",

            "modal-kicker":
                "ORDER DETAILS",

            "modal-title":
                "Order Details",

            "modal-text":
                "Complete the details and continue on WhatsApp.",

            "form-name":
                "Name",

            "form-name-placeholder":
                "Your name",

            "form-phone":
                "Phone",

            "form-quantity":
                "Quantity",

            "form-recipient":
                "Recipient Name",

            "form-recipient-placeholder":
                "Recipient name",

            "form-address":
                "Address",

            "form-address-placeholder":
                "Delivery location",

            "form-note":
                "Notes",

            "form-note-placeholder":
                "Any additional details...",

            "form-submit":
                "Send Order via WhatsApp",

            "courses-kicker":
                "ELNORDA · ACADEMY",

            "courses-title":
                "Learn the art of floral design<br>in a practical way.",

            "courses-intro":
                "Elnorda courses are designed to help you learn step by step, online or offline.",

            "online-title":
                "Online Course",

            "online-text":
                "Learn from anywhere through structured content covering the fundamentals of floral design.",

            "online-feature-one":
                "Floral arrangement basics",

            "online-feature-two":
                "Color and material selection",

            "online-feature-three":
                "Practical applications",

            "offline-title":
                "Offline Course",

            "offline-text":
                "Hands-on training with direct guidance and practical floral arrangement exercises.",

            "offline-feature-one":
                "Live practical training",

            "offline-feature-two":
                "Working with materials",

            "offline-feature-three":
                "Multiple practical designs",

            "course-register":
                "Register for Course",

            "course-cta-kicker":
                "START YOUR JOURNEY",

            "course-cta-title":
                "The right course starts with one step.",

            "course-cta-text":
                "Choose your training type and send your registration details through WhatsApp.",

            "course-modal-kicker":
                "COURSE REGISTRATION",

            "course-modal-title":
                "Registration Details",

            "course-modal-text":
                "Complete the details and continue on WhatsApp.",

            "form-age":
                "Age",

            "course-submit":
                "Send Registration",

            "materials-kicker":
                "ELNORDA · MATERIALS",

            "materials-title":
                "Everything you need<br>to create your own arrangement.",

            "materials-intro":
                "Selected materials for floral design, wrapping and finishing details.",

            "material-one-title":
                "Baby's Breath",

            "material-one-text":
                "Materials suitable for baby's breath arrangements and delicate details.",

            "material-two-title":
                "Packaging",

            "material-two-text":
                "Wrapping materials to create an elegant final presentation.",

            "material-three-title":
                "Ribbons & Accessories",

            "material-three-text":
                "Ribbons and accessories for the finishing touch.",

            "material-four-title":
                "Tools",

            "material-four-text":
                "Tools for creating and arranging bouquets and floral designs.",

            "material-order":
                "Order Material",

            "materials-cta-kicker":
                "BUILD YOUR OWN",

            "materials-cta-title":
                "Looking for a specific material?",

            "materials-cta-text":
                "Send us what you need and we will help with availability and details.",

            "materials-cta-button":
                "Contact Us",

            "material-modal-kicker":
                "MATERIAL ORDER",

            "material-modal-title":
                "Material Order",

            "material-modal-text":
                "Enter your details and requested quantity.",

            "material-submit":
                "Send Order"
        }

    };


    /* =====================================================
       STATE
    ===================================================== */

    let currentLanguage =
        localStorage.getItem(LANGUAGE_KEY) || "ar";


    let currentTheme =
        localStorage.getItem(THEME_KEY) || "light";


    /* =====================================================
       THEME
    ===================================================== */

    function applyTheme() {

        const root =
            document.documentElement;

        if (currentTheme === "dark") {

            root.classList.add("dark");

        } else {

            root.classList.remove("dark");
        }


        const themeIcon =
            document.getElementById("themeIcon");


        if (themeIcon) {

            themeIcon.textContent =
                currentTheme === "dark"
                    ? "☀"
                    : "☾";
        }


        localStorage.setItem(
            THEME_KEY,
            currentTheme
        );
    }


    function toggleTheme() {

        currentTheme =
            currentTheme === "dark"
                ? "light"
                : "dark";

        applyTheme();
    }


    /* =====================================================
       LANGUAGE
    ===================================================== */

    function applyLanguage() {

        const root =
            document.documentElement;


        root.lang =
            currentLanguage;

        root.dir =
            currentLanguage === "ar"
                ? "rtl"
                : "ltr";


        document
            .querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key =
                    element.dataset.i18n;

                const value =
                    translations[currentLanguage][key];


                if (value !== undefined) {

                    element.innerHTML =
                        value;
                }

            });


        document
            .querySelectorAll("[data-i18n-placeholder]")
            .forEach(element => {

                const key =
                    element.dataset.i18nPlaceholder;

                const value =
                    translations[currentLanguage][key];


                if (value !== undefined) {

                    element.placeholder =
                        value;
                }

            });


        const languageToggle =
            document.getElementById(
                "languageToggle"
            );


        if (languageToggle) {

            languageToggle.textContent =
                currentLanguage === "ar"
                    ? "EN"
                    : "AR";
        }


        localStorage.setItem(
            LANGUAGE_KEY,
            currentLanguage
        );
    }


    function toggleLanguage() {

        currentLanguage =
            currentLanguage === "ar"
                ? "en"
                : "ar";

        applyLanguage();
    }


    /* =====================================================
       MODALS
    ===================================================== */

    function openModal(modal) {

        if (!modal) return;

        modal.classList.add("open");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";
    }


    function closeModal(modal) {

        if (!modal) return;

        modal.classList.remove("open");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow =
            "";
    }


    function closeAllModals() {

        document
            .querySelectorAll(".modal.open")
            .forEach(modal => {

                closeModal(modal);

            });
    }


    /* =====================================================
       ORDER MODAL
    ===================================================== */

    function setupProductOrders() {

        const buttons =
            document.querySelectorAll(
                ".product-order"
            );


        const modal =
            document.getElementById(
                "orderModal"
            );


        const selected =
            document.getElementById(
                "selectedProduct"
            );


        if (!modal || !selected) return;


        buttons.forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    selected.value =
                        button.dataset.product || "";

                    openModal(modal);
                }
            );

        });
    }


    function setupOrderForm() {

        const form =
            document.getElementById(
                "orderForm"
            );


        if (!form) return;


        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const product =
                    document.getElementById(
                        "selectedProduct"
                    ).value;


                const name =
                    document.getElementById(
                        "customerName"
                    ).value.trim();


                const phone =
                    document.getElementById(
                        "customerPhone"
                    ).value.trim();


                const quantity =
                    document.getElementById(
                        "quantity"
                    ).value;


                const recipient =
                    document.getElementById(
                        "recipientName"
                    ).value.trim();


                const address =
                    document.getElementById(
                        "customerAddress"
                    ).value.trim();


                const note =
                    document.getElementById(
                        "orderNote"
                    ).value.trim();


                let message;


                if (currentLanguage === "ar") {

                    message =
                        `مرحباً Elnorda 🌸

أرغب في طلب:
${product}

الاسم: ${name}
رقم الهاتف: ${phone}
الكمية: ${quantity}
اسم المستلم: ${recipient || "غير محدد"}
العنوان: ${address}
ملاحظات: ${note || "لا يوجد"}

أرغب في معرفة تفاصيل الطلب والتوصيل.`;

                } else {

                    message =
                        `Hello Elnorda 🌸

I would like to order:
${product}

Name: ${name}
Phone: ${phone}
Quantity: ${quantity}
Recipient: ${recipient || "Not specified"}
Address: ${address}
Notes: ${note || "None"}

Please send me the order and delivery details.`;
                }


                const url =
                    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


                window.open(
                    url,
                    "_blank",
                    "noopener"
                );


                closeAllModals();

            }
        );
    }


    /* =====================================================
       COURSE MODAL
    ===================================================== */

    function setupCourseOrders() {

        const buttons =
            document.querySelectorAll(
                ".course-order"
            );


        const modal =
            document.getElementById(
                "courseModal"
            );


        const selected =
            document.getElementById(
                "selectedCourse"
            );


        if (!modal || !selected) return;


        buttons.forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    selected.value =
                        button.dataset.course || "";

                    openModal(modal);
                }
            );

        });
    }


    function setupCourseForm() {

        const form =
            document.getElementById(
                "courseForm"
            );


        if (!form) return;


        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const course =
                    document.getElementById(
                        "selectedCourse"
                    ).value;


                const name =
                    document.getElementById(
                        "courseName"
                    ).value.trim();


                const age =
                    document.getElementById(
                        "courseAge"
                    ).value;


                const phone =
                    document.getElementById(
                        "coursePhone"
                    ).value.trim();


                const note =
                    document.getElementById(
                        "courseNote"
                    ).value.trim();


                let message;


                if (currentLanguage === "ar") {

                    message =
                        `مرحباً Elnorda 🌸

أرغب في التسجيل في:
${course}

الاسم: ${name}
السن: ${age}
رقم الهاتف: ${phone}
ملاحظات: ${note || "لا يوجد"}

أرغب في معرفة تفاصيل الكورس ومواعيد التسجيل.`;

                } else {

                    message =
                        `Hello Elnorda 🌸

I would like to register for:
${course}

Name: ${name}
Age: ${age}
Phone: ${phone}
Notes: ${note || "None"}

Please send me the course details and registration schedule.`;
                }


                const url =
                    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


                window.open(
                    url,
                    "_blank",
                    "noopener"
                );


                closeAllModals();

            }
        );
    }


    /* =====================================================
       MATERIAL MODAL
    ===================================================== */

    function setupMaterialOrders() {

        const buttons =
            document.querySelectorAll(
                ".material-order"
            );


        const modal =
            document.getElementById(
                "materialModal"
            );


        const selected =
            document.getElementById(
                "selectedMaterial"
            );


        if (!modal || !selected) return;


        buttons.forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    selected.value =
                        button.dataset.material || "";

                    openModal(modal);
                }
            );

        });
    }


    function setupMaterialForm() {

        const form =
            document.getElementById(
                "materialForm"
            );


        if (!form) return;


        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const material =
                    document.getElementById(
                        "selectedMaterial"
                    ).value;


                const name =
                    document.getElementById(
                        "materialName"
                    ).value.trim();


                const phone =
                    document.getElementById(
                        "materialPhone"
                    ).value.trim();


                const quantity =
                    document.getElementById(
                        "materialQuantity"
                    ).value;


                const note =
                    document.getElementById(
                        "materialNote"
                    ).value.trim();


                let message;


                if (currentLanguage === "ar") {

                    message =
                        `مرحباً Elnorda 🌸

أرغب في طلب خامة:
${material}

الاسم: ${name}
رقم الهاتف: ${phone}
الكمية: ${quantity}
ملاحظات: ${note || "لا يوجد"}

أرغب في معرفة السعر والتوفر.`;

                } else {

                    message =
                        `Hello Elnorda 🌸

I would like to order:
${material}

Name: ${name}
Phone: ${phone}
Quantity: ${quantity}
Notes: ${note || "None"}

Please send me the price and availability.`;
                }


                const url =
                    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


                window.open(
                    url,
                    "_blank",
                    "noopener"
                );


                closeAllModals();

            }
        );
    }


    /* =====================================================
       CLOSE MODALS
    ===================================================== */

    function setupModalClosing() {

        document
            .querySelectorAll("[data-close-modal]")
            .forEach(element => {

                element.addEventListener(
                    "click",
                    () => {

                        closeAllModals();

                    }
                );

            });


        document.addEventListener(
            "keydown",
            event => {

                if (event.key === "Escape") {

                    closeAllModals();
                }

            }
        );
    }


    /* =====================================================
       REVEAL ANIMATION
    ===================================================== */

    function setupReveal() {

        const elements =
            document.querySelectorAll(
                ".reveal"
            );


        if (
            !elements.length ||
            !("IntersectionObserver" in window)
        ) {

            elements.forEach(element => {

                element.classList.add(
                    "visible"
                );

            });

            return;
        }


        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -40px 0px"
                }
            );


        elements.forEach(element => {

            observer.observe(element);

        });
    }


    /* =====================================================
       YEAR
    ===================================================== */

    function setYear() {

        const year =
            document.getElementById(
                "year"
            );


        if (year) {

            year.textContent =
                new Date().getFullYear();
        }
    }


    /* =====================================================
       INIT
    ===================================================== */

    function init() {

        applyTheme();

        applyLanguage();

        setYear();

        setupReveal();

        setupProductOrders();

        setupOrderForm();

        setupCourseOrders();

        setupCourseForm();

        setupMaterialOrders();

        setupMaterialForm();

        setupModalClosing();


        const themeToggle =
            document.getElementById(
                "themeToggle"
            );


        if (themeToggle) {

            themeToggle.addEventListener(
                "click",
                toggleTheme
            );
        }


        const languageToggle =
            document.getElementById(
                "languageToggle"
            );


        if (languageToggle) {

            languageToggle.addEventListener(
                "click",
                toggleLanguage
            );
        }
    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            init
        );

    } else {

        init();
    }

})();