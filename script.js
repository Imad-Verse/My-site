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

    floatingButton.addEventListener('click', () => {
        popupForm.classList.add('active');
    });

    closeButton.addEventListener('click', () => {
        popupForm.classList.remove('active');
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === popupForm) {
            popupForm.classList.remove('active');
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