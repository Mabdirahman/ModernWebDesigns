// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
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


// Sticky Navbar
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (nav) {
        nav.classList.toggle("sticky", window.scrollY > 0);
    }
});


// Fade-in Animation on Scroll
const fadeElements = document.querySelectorAll(".fade-in");

function checkScroll() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", checkScroll);
checkScroll();


// Contact Form Validation
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("formMessage");

        if (name.length < 2) {
            formMessage.textContent = "Please enter a valid name.";
            formMessage.style.color = "red";
            return;
        }

        if (!email.includes("@")) {
            formMessage.textContent = "Please enter a valid email.";
            formMessage.style.color = "red";
            return;
        }

        if (message.length < 5) {
            formMessage.textContent = "Please enter a message.";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";

        form.reset();
    });

//darkmode
document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.getElementById("darkToggle");

    toggle.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            toggle.textContent = "☀";
        } else {
            toggle.textContent = "🌙";
        }
    });

});

}
document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll(".project-img");
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const closeBtn = document.querySelector(".close");

    images.forEach(img => {
        img.addEventListener("click", function () {
            popup.style.display = "block";
            popupImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });

});
document.addEventListener("DOMContentLoaded", function () {

    const images = [
        "images/project1.png",
        "images/project2.png",
        "images/project3.png"
    ];

    let currentIndex = 0;

    const sliderImage = document.getElementById("slider-image");
    const leftArrow = document.querySelector(".arrow.left");
    const rightArrow = document.querySelector(".arrow.right");

    rightArrow.addEventListener("click", function () {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        sliderImage.src = images[currentIndex];
    });

    leftArrow.addEventListener("click", function () {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        sliderImage.src = images[currentIndex];
    });

});

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".contact-form");
    const status = document.querySelector(".form-status");

    async function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.textContent = "✅ Message sent successfully!";
                form.reset();
            } else {
                response.json().then(data => {
                    status.textContent = "❌ Oops! Something went wrong.";
                });
            }
        }).catch(error => {
            status.textContent = "❌ Network error. Try again.";
        });
    }

    form.addEventListener("submit", handleSubmit);

});
