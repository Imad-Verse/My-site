document.addEventListener('DOMContentLoaded', () => {
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
        question.addEventListener('click', function() {
            // Toggle active class on button
            this.classList.toggle('active');
            
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                // Close other panels if desired (optional)
                // questions.forEach(q => {
                //     if (q !== this) {
                //         q.classList.remove('active');
                //         q.nextElementSibling.style.maxHeight = null;
                //     }
                // });
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

    // Close on outside click
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

        if (!name || !email || !subject || !message) {
            alert('يرجى ملء جميع الحقول المطلوبة.');
            return;
        }

        const mailtoLink = `mailto:abulharithimad@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("الاسم: " + name + "\nالبريد: " + email + "\n\n" + message)}`;
        
        window.location.href = mailtoLink;
        
        // Optional: clear form and close
        popupForm.classList.remove('active');
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
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});