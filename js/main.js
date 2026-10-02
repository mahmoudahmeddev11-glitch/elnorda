"use strict";

/* =========================================================
   ELNORDA MAIN JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CONSTANTS
       ===================================================== */

    const WHATSAPP_NUMBER = "201043861996";

    const THEME_KEY = "elnordaTheme";
    const LANGUAGE_KEY = "elnordaLanguage";


    /* =====================================================
       HELPERS
       ===================================================== */

    function getStoredValue(key, fallback) {
        try {
            return localStorage.getItem(key) || fallback;
        } catch (error) {
            return fallback;
        }
    }


    function setStoredValue(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            /* Storage may be unavailable */
        }
    }


    function getLanguage() {
        return getStoredValue(LANGUAGE_KEY, "ar") === "en"
            ? "en"
            : "ar";
    }


    function getTheme() {
        return getStoredValue(THEME_KEY, "light") === "dark"
            ? "dark"
            : "light";
    }


    /* =====================================================
       LANGUAGE
       ===================================================== */

    let currentLanguage = getLanguage();


    function translateElement(element, language) {

        if (!element) {
            return;
        }

        const translatedText = element.getAttribute(
            `data-${language}`
        );

        if (translatedText !== null) {
            element.textContent = translatedText;
        }


        const placeholder = element.getAttribute(
            `data-placeholder-${language}`
        );

        if (placeholder !== null) {
            element.setAttribute(
                "placeholder",
                placeholder
            );
        }


        const altText = element.getAttribute(
            `data-alt-${language}`
        );

        if (
            altText !== null &&
            element.tagName === "IMG"
        ) {
            element.setAttribute("alt", altText);
        }


        const title = element.getAttribute(
            `data-title-${language}`
        );

        if (title !== null) {
            element.setAttribute("title", title);
        }
    }


    function translatePage(language) {

        currentLanguage = language;

        document.documentElement.lang = language;
        document.documentElement.dir =
            language === "ar"
                ? "rtl"
                : "ltr";

        document
            .querySelectorAll(
                "[data-ar], [data-en], [data-placeholder-ar], [data-placeholder-en], [data-alt-ar], [data-alt-en]"
            )
            .forEach((element) => {
                translateElement(element, language);
            });


        const languageText =
            document.getElementById("languageText");

        if (languageText) {
            languageText.textContent =
                language === "ar"
                    ? "EN"
                    : "AR";
        }


        updateThemeButton();

        updateWhatsAppLinks();

        setStoredValue(
            LANGUAGE_KEY,
            language
        );
    }


    function setupLanguage() {

        const languageButton =
            document.getElementById("languageToggle");

        if (!languageButton) {
            return;
        }

        languageButton.addEventListener("click", () => {

            const nextLanguage =
                currentLanguage === "ar"
                    ? "en"
                    : "ar";

            translatePage(nextLanguage);
        });
    }


    /* =====================================================
       THEME
       ===================================================== */

    let currentTheme = getTheme();


    function updateThemeButton() {

        const themeButton =
            document.getElementById("themeToggle");

        if (!themeButton) {
            return;
        }

        const icon =
            themeButton.querySelector("i");

        if (!icon) {
            return;
        }


        if (currentTheme === "dark") {

            icon.className =
                "fa-solid fa-sun";

            themeButton.setAttribute(
                "aria-label",
                currentLanguage === "ar"
                    ? "الوضع الفاتح"
                    : "Light mode"
            );

        } else {

            icon.className =
                "fa-solid fa-moon";

            themeButton.setAttribute(
                "aria-label",
                currentLanguage === "ar"
                    ? "الوضع الداكن"
                    : "Dark mode"
            );
        }
    }


    function applyTheme(theme) {

        currentTheme =
            theme === "dark"
                ? "dark"
                : "light";

        document.documentElement.dataset.theme =
            currentTheme;

        setStoredValue(
            THEME_KEY,
            currentTheme
        );

        updateThemeButton();
    }


    function setupTheme() {

        const themeButton =
            document.getElementById("themeToggle");

        if (!themeButton) {
            return;
        }

        themeButton.addEventListener("click", () => {

            const nextTheme =
                currentTheme === "dark"
                    ? "light"
                    : "dark";

            applyTheme(nextTheme);
        });
    }


    /* =====================================================
       WHATSAPP
       ===================================================== */

    function buildWhatsAppUrl(message) {

        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    }


    function updateWhatsAppLinks() {

        const links =
            document.querySelectorAll(
                ".floating-whatsapp, .header-whatsapp"
            );

        links.forEach((link) => {

            const message =
                currentLanguage === "ar"
                    ? "مرحبًا، أريد الاستفسار عن منتجات Elnorda."
                    : "Hello, I would like to ask about Elnorda products.";

            link.href =
                buildWhatsAppUrl(message);
        });
    }


    /* =====================================================
       REVEAL ANIMATION
       ===================================================== */

    function setupRevealAnimation() {

        const revealElements =
            document.querySelectorAll(".reveal");

        if (!revealElements.length) {
            return;
        }


        if (
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {
            revealElements.forEach((element) => {
                element.classList.add("is-visible");
            });

            return;
        }


        if (!("IntersectionObserver" in window)) {

            revealElements.forEach((element) => {
                element.classList.add("is-visible");
            });

            return;
        }


        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.classList.add(
                            "is-visible"
                        );

                        observerInstance.unobserve(
                            entry.target
                        );
                    });

                },
                {
                    threshold: 0.08,
                    rootMargin: "0px 0px -40px 0px"
                }
            );


        revealElements.forEach((element) => {
            observer.observe(element);
        });
    }


    /* =====================================================
       MODAL
       ===================================================== */

    function openModal(modal) {

        if (!modal) {
            return;
        }

        modal.classList.add("is-open");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );


        const firstInput =
            modal.querySelector(
                "input:not([type='hidden'])"
            );

        if (firstInput) {

            window.setTimeout(() => {
                firstInput.focus();
            }, 120);
        }
    }


    function closeModal(modal) {

        if (!modal) {
            return;
        }

        modal.classList.remove("is-open");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "modal-open"
        );
    }


    function setupModalClose() {

        document
            .querySelectorAll("[data-close-modal]")
            .forEach((element) => {

                element.addEventListener(
                    "click",
                    () => {

                        const modal =
                            element.closest(".modal");

                        closeModal(modal);
                    }
                );
            });


        document.addEventListener(
            "keydown",
            (event) => {

                if (event.key !== "Escape") {
                    return;
                }

                document
                    .querySelectorAll(
                        ".modal.is-open"
                    )
                    .forEach((modal) => {
                        closeModal(modal);
                    });
            }
        );
    }


    /* =====================================================
       ORDER MODAL
       ===================================================== */

    function setupOrderModal() {

        const modal =
            document.getElementById("orderModal");

        const form =
            document.getElementById("orderForm");

        if (!modal || !form) {
            return;
        }


        const selectedProduct =
            document.getElementById(
                "selectedProduct"
            );


        document
            .querySelectorAll(".order-product")
            .forEach((button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const product =
                            currentLanguage === "ar"
                                ? button.dataset.productAr
                                : button.dataset.productEn;

                        selectedProduct.value =
                            product || "";

                        openModal(modal);
                    }
                );
            });


        form.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const name =
                    document
                        .getElementById("orderName")
                        .value
                        .trim();

                const quantity =
                    document
                        .getElementById("orderQuantity")
                        .value
                        .trim();

                const phone =
                    document
                        .getElementById("orderPhone")
                        .value
                        .trim();

                const recipient =
                    document
                        .getElementById("recipientName")
                        .value
                        .trim();

                const address =
                    document
                        .getElementById("orderAddress")
                        .value
                        .trim();

                const notes =
                    document
                        .getElementById("orderNotes")
                        .value
                        .trim();


                const product =
                    selectedProduct.value;


                let message;


                if (currentLanguage === "ar") {

                    message =
`مرحبًا Elnorda 🌷

أريد عمل طلب جديد.

المنتج: ${product}
الكمية: ${quantity}
الاسم: ${name}
رقم الهاتف: ${phone}
اسم المستلم: ${recipient}
العنوان: ${address}
ملاحظات: ${notes || "لا يوجد"}

شكرًا لكم.`;

                } else {

                    message =
`Hello Elnorda 🌷

I would like to place a new order.

Product: ${product}
Quantity: ${quantity}
Name: ${name}
Phone: ${phone}
Recipient: ${recipient}
Address: ${address}
Notes: ${notes || "None"}

Thank you.`;
                }


                window.open(
                    buildWhatsAppUrl(message),
                    "_blank",
                    "noopener,noreferrer"
                );


                form.reset();

                selectedProduct.value = "";

                closeModal(modal);
            }
        );
    }


    /* =====================================================
       COURSE MODAL
       ===================================================== */

    function setupCourseModal() {

        const modal =
            document.getElementById("courseModal");

        const form =
            document.getElementById("courseForm");

        if (!modal || !form) {
            return;
        }


        const selectedCourse =
            document.getElementById(
                "selectedCourse"
            );


        document
            .querySelectorAll(".register-course")
            .forEach((button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const course =
                            currentLanguage === "ar"
                                ? button.dataset.courseAr
                                : button.dataset.courseEn;

                        selectedCourse.value =
                            course || "";

                        openModal(modal);
                    }
                );
            });


        form.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const name =
                    document
                        .getElementById("courseName")
                        .value
                        .trim();

                const age =
                    document
                        .getElementById("courseAge")
                        .value
                        .trim();

                const phone =
                    document
                        .getElementById("coursePhone")
                        .value
                        .trim();

                const notes =
                    document
                        .getElementById("courseNotes")
                        .value
                        .trim();

                const course =
                    selectedCourse.value;


                let message;


                if (currentLanguage === "ar") {

                    message =
`مرحبًا Elnorda 🌷

أريد التسجيل في أحد الكورسات.

الكورس: ${course}
الاسم: ${name}
العمر: ${age}
رقم الهاتف: ${phone}
ملاحظات: ${notes || "لا يوجد"}

أريد معرفة باقي التفاصيل ومواعيد الكورس.`;

                } else {

                    message =
`Hello Elnorda 🌷

I would like to register for a course.

Course: ${course}
Name: ${name}
Age: ${age}
Phone: ${phone}
Notes: ${notes || "None"}

I would like to know more about the course and available schedules.`;
                }


                window.open(
                    buildWhatsAppUrl(message),
                    "_blank",
                    "noopener,noreferrer"
                );


                form.reset();

                selectedCourse.value = "";

                closeModal(modal);
            }
        );
    }


    /* =====================================================
       BODY SCROLL WHEN MODAL IS OPEN
       ===================================================== */

    function setupModalBodyStyle() {

        const style =
            document.createElement("style");

        style.textContent = `
            body.modal-open {
                overflow: hidden;
            }
        `;

        document.head.appendChild(style);
    }


    /* =====================================================
       FOOTER YEAR
       ===================================================== */

    function setupYear() {

        const yearElement =
            document.getElementById("currentYear");

        if (!yearElement) {
            return;
        }

        yearElement.textContent =
            new Date().getFullYear();
    }


    /* =====================================================
       INITIALIZE
       ===================================================== */

    applyTheme(currentTheme);

    translatePage(currentLanguage);

    setupLanguage();

    setupTheme();

    setupRevealAnimation();

    setupModalClose();

    setupOrderModal();

    setupCourseModal();

    setupModalBodyStyle();

    setupYear();

});