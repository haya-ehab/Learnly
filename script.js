// Menu toggle
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// Toggle social media on teacher image click
document.querySelectorAll('.teacher-img-box img').forEach((img) => {
    img.addEventListener('click', () => {
        const share = img.nextElementSibling;

        // Hide all other shares first
        document.querySelectorAll('.teacher-img-box .share').forEach((s) => {
            if (s !== share) s.classList.remove('active');
        });

        // Toggle this one
        share.classList.toggle('active');
    });
});

// Optional: Hide share when clicking outside
document.addEventListener('click', (e) => {
    const isInside = e.target.closest('.teacher-img-box');
    if (!isInside) {
        document.querySelectorAll('.teacher-img-box .share').forEach((s) => {
            s.classList.remove('active');
        });
    }
});
