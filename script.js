document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation Horizontal Logic ---
    const navToggle = document.getElementById('navToggle');
    const navLinksRow = document.querySelector('.nav-horizontal-links');
    const navbar = document.querySelector('.navbar');

    if (navToggle) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinksRow.classList.toggle('active');
        });
    }

    // Close menu on link click
    document.querySelectorAll('.nav-horizontal-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinksRow.classList.remove('active');
        });
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (navLinksRow && navLinksRow.classList.contains('active') && !navLinksRow.contains(e.target) && !navToggle.contains(e.target)) {
            navLinksRow.classList.remove('active');
        }
    });

    // Scroll logic removed - background is handled correctly by the glass wrapper now.

    // --- Intersection Observer for Reveal Animations ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- Accordion Logic ---
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        question.addEventListener('click', () => {
            const panel = question.nextElementSibling;
            question.classList.toggle('active');
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    // --- Contact Form Modal ---
    const floatingButton = document.getElementById('floatingButton');
    const popupForm = document.getElementById('popupForm');
    const closeButton = document.getElementById('closeButton');
    const sendMessage = document.getElementById('sendMessage');
    const floatIcon = floatingButton.querySelector('i');

    function closePopup() {
        popupForm.classList.remove('active');
        floatIcon.className = 'fas fa-envelope';
    }

    floatingButton.addEventListener('click', (e) => {
        e.stopPropagation();
        popupForm.classList.toggle('active');
        if (popupForm.classList.contains('active')) {
            floatIcon.className = 'fas fa-times';
        } else {
            floatIcon.className = 'fas fa-envelope';
        }
    });

    closeButton.addEventListener('click', closePopup);

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (popupForm.classList.contains('active') && !popupForm.contains(e.target) && !floatingButton.contains(e.target)) {
            closePopup();
        }
    });

    // --- Form Submission (Mailto) ---
    sendMessage.addEventListener('click', () => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && subject && message) {
            const mailtoLink = `mailto:abulharithimad@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("الاسم: " + name + "\nالبريد: " + email + "\n\nالرسالة:\n" + message)}`;
            window.location.href = mailtoLink;
        } else {
            alert('يرجى ملء جميع الحقول أولاً.');
        }
    });

    // --- Dynamic Year ---
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Scroll to Top Button ---
    const scrollTop = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTop.classList.add('active');
        } else {
            scrollTop.classList.remove('active');
        }
    });

    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- Smooth Scrolling for Navigation ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});