document.getElementById("floatingButton").addEventListener("click", function () {
                document.getElementById("popupForm").style.display = "block";
            });

            document.getElementById("closeButton").addEventListener("click", function () {
                document.getElementById("popupForm").style.display = "none";
            });

            document.getElementById("sendMessage").addEventListener("click", function () {
                let name = document.getElementById("name").value.trim();
                let email = document.getElementById("email").value.trim();
                let subject = document.getElementById("subject").value.trim();
                let message = document.getElementById("message").value.trim();

                // التأكد من أن الحقول ليست فارغة
                if (name.length > 0) {
                    if (email.length > 0) {
                        if (subject.length > 0) {
                            if (message.length > 0) {
                                let emailAddress = "abulharithimad@gmail.com";
                                let subjectEncoded = encodeURIComponent(subject);
                                let bodyEncoded = encodeURIComponent("الاسم: " + name + "\nالبريد: " + email + "\n\nالرسالة:\n" + message);

                                let mailtoLink = "mailto:" + emailAddress + "?subject=" + subjectEncoded + "&amp;body=" + bodyEncoded;

                                setTimeout(function () {
                                    window.location.href = mailtoLink;
                                }, 100); // تأخير بسيط لتجنب مشاكل XML
                            } else {
                                alert("الرجاء كتابة الرسالة!");
                            }
                        } else {
                            alert("الرجاء إدخال موضوع الرسالة!");
                        }
                    } else {
                        alert("الرجاء إدخال بريدك الإلكتروني!");
                    }
                } else {
                    alert("الرجاء إدخال اسمك!");
                }
            });

document.querySelectorAll('.question').forEach(button => {
                button.addEventListener('click', function () {
                    this.classList.toggle('active');
                    const panel = this.nextElementSibling;
                    panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
                });
            });