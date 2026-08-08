```javascript
/* =========================================================
   PRINCY EVANGILIN PORTFOLIO
   JavaScript
========================================================= */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("show")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    /* Close menu after clicking a link */

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* ================= CERTIFICATE PLACEHOLDER ================= */

const certificateLinks =
    document.querySelectorAll(".certificate-link");


certificateLinks.forEach(link => {

    link.addEventListener("click", (event) => {

        if (link.getAttribute("href") === "#") {

            event.preventDefault();

            alert(
                "Certificate link will be added soon."
            );

        }

    });

});


/* ================= RESUME PLACEHOLDER ================= */

const resumeButton =
    document.getElementById("resumeButton");


if (resumeButton) {

    resumeButton.addEventListener("click", (event) => {

        if (resumeButton.getAttribute("href") === "#") {

            event.preventDefault();

            alert(
                "Your resume PDF will be connected here."
            );

        }

    });

}


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".section, .stat, .certificate, .project, .skill-box, .leadership-card"
    );


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

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
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* ================= CURRENT YEAR ================= */

const copyright =
    document.querySelector(".copyright");


if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Princy Evangilin.
         Built with curiosity & consistency.`;

}
```
