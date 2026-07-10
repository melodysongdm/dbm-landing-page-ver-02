/* ============================================================
   JAVASCRIPT — HEALTH & WEALTH LANDING PAGE
   Hybrid Theme (Pink + Green + Blue)
   Author: M. Song — 2026
============================================================ */

/* ============================================================
   1. Fade-In Animation on Scroll
============================================================ */

function revealOnScroll() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 80;

        if (isVisible) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


/* ============================================================
   2. Scroll-To-Top Button
============================================================ */

const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
});

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


/* ============================================================
   3. Smooth Scrolling for Navigation Buttons
============================================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


/* ============================================================
   4. Contact Form — EmailJS Integration
============================================================ */

(function () {
    emailjs.init("YOUR_PUBLIC_KEY_HERE"); 
    // Replace with your EmailJS public key
})();

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        user_name: this.user_name.value,
        user_email: this.user_email.value,
        message: this.message.value
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
        .then(() => {
            alert("Your message has been sent successfully!");
            contactForm.reset();
        })
        .catch(() => {
            alert("There was an error sending your message. Please try again.");
        });
});


/* ============================================================
   5. Console Branding (Optional)
============================================================ */

console.log("%cHealth & Wealth Landing Page Loaded Successfully!",
    "color:#d63384; font-size:16px; font-weight:bold;");
