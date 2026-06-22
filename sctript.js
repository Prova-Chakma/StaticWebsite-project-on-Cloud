/* ===================================
   LOADER
=================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 1000);
    }

});

/* ===================================
   TYPING EFFECT
=================================== */

const typingElement = document.querySelector(".typing-text");

if (typingElement) {

    const words = [
        "AWS Cloud",
        "CloudFront CDN",
        "Amazon S3",
        "Secure Infrastructure",
        "Scalable Hosting"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;
            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                wordIndex =
                    (wordIndex + 1) % words.length;
            }
        }

        setTimeout(typeEffect, deleting ? 60 : 120);
    }

    typeEffect();
}

/* ===================================
   DARK / LIGHT MODE
=================================== */

const themeBtn =
    document.getElementById("themeToggle");

if (themeBtn) {

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light-mode");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';
    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (
            document.body.classList.contains("light-mode")
        ) {

            localStorage.setItem(
                "theme",
                "light"
            );

            themeBtn.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        } else {

            localStorage.setItem(
                "theme",
                "dark"
            );

            themeBtn.innerHTML =
                '<i class="fa-solid fa-moon"></i>';
        }
    });
}

/* ===================================
   FAQ ACCORDION
=================================== */

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

        const answer =
            question.nextElementSibling;

        const isOpen =
            answer.style.display === "block";

        document
            .querySelectorAll(".faq-answer")
            .forEach((item) => {

                item.style.display = "none";
            });

        if (!isOpen) {

            answer.style.display = "block";
        }
    });
});

/* ===================================
   COUNTER ANIMATION
=================================== */

const counters =
    document.querySelectorAll(".counter");

const counterObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const counter =
                        entry.target;

                    const target =
                        +counter.getAttribute(
                            "data-target"
                        );

                    let count = 0;

                    const increment =
                        target / 100;

                    const updateCounter = () => {

                        count += increment;

                        if (count < target) {

                            counter.innerText =
                                Math.ceil(count);

                            requestAnimationFrame(
                                updateCounter
                            );

                        } else {

                            counter.innerText =
                                target;
                        }
                    };

                    updateCounter();

                    counterObserver.unobserve(
                        counter
                    );
                }
            });
        },

        {
            threshold: 0.5
        }
    );

counters.forEach((counter) => {

    counterObserver.observe(counter);
});

/* ===================================
   SCROLL PROGRESS BAR
=================================== */

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    const progressBar =
        document.getElementById("progressBar");

    if (progressBar) {

        progressBar.style.width =
            progress + "%";
    }
});

/* ===================================
   BACK TO TOP BUTTON
=================================== */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (backToTop) {

        if (window.scrollY > 500) {

            backToTop.style.display = "flex";

        } else {

            backToTop.style.display = "none";
        }
    }
});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"
        });
    });
}

/* ===================================
   MOBILE MENU
=================================== */

const hamburger =
    document.querySelector(".hamburger");

const navLinks =
    document.querySelector(".nav-links");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-active");

        hamburger.classList.toggle("open");
    });
}

/* ===================================
   GALLERY FILTER
=================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const galleryItems =
    document.querySelectorAll(".gallery-item");

if (filterButtons.length > 0) {

    filterButtons.forEach((button) => {

        button.addEventListener("click", () => {

            filterButtons.forEach((btn) =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const filter =
                button.getAttribute("data-filter");

            galleryItems.forEach((item) => {

                if (
                    filter === "all" ||
                    item.classList.contains(filter)
                ) {

                    item.style.display = "block";

                } else {

                    item.style.display = "none";
                }
            });
        });
    });
}

/* ===================================
   SCROLL REVEAL ANIMATION
=================================== */

const revealElements =
    document.querySelectorAll(
        ".feature-card, .service-card, .team-card, .gallery-item, .stat-card, .pricing-card, .testimonial-card"
    );

const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";
                }
            });
        },

        {
            threshold: 0.15
        }
    );

revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "all 0.8s ease";

    revealObserver.observe(element);
});

/* ===================================
   NEWSLETTER FORM
=================================== */

const newsletterForms =
    document.querySelectorAll(".newsletter form");

newsletterForms.forEach((form) => {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert(
            "Thank you for subscribing to CloudSite AWS!"
        );

        form.reset();
    });
});

/* ===================================
   CONTACT FORM
=================================== */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (e) => {

            e.preventDefault();

            alert(
                "Message sent successfully! We will contact you soon."
            );

            contactForm.reset();
        }
    );
}