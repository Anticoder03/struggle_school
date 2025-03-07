// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero section animations
gsap.from('.hero-title', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.hero-text', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.3,
    ease: 'power3.out'
});

gsap.from('.hero-btn', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.6,
    ease: 'power3.out'
});

// About section animations
gsap.from('.about-text', {
    scrollTrigger: {
        trigger: '.about-text',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    x: -100,
    opacity: 0,
    ease: 'power3.out'
});

// Program cards animations
gsap.from('.program-card', {
    scrollTrigger: {
        trigger: '.program-card',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
});

// Contact form animation
gsap.from('#contact form', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});

// Gallery animations
gsap.from('.gallery-item', {
    scrollTrigger: {
        trigger: '.gallery-container',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.1,
    ease: 'power3.out'
});

// Teachers animations
gsap.from('.teacher-card', {
    scrollTrigger: {
        trigger: '#teachers',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.9)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.3)';
    }
});

// Update copyright year
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburgerOpen = document.querySelector('.hamburger-open');
    const hamburgerClose = document.querySelector('.hamburger-close');

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            hamburgerOpen.classList.toggle('hidden');
            hamburgerClose.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        const mobileLinks = document.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                hamburgerOpen.classList.remove('hidden');
                hamburgerClose.classList.add('hidden');
            });
        });

        // Close menu when scrolling
        window.addEventListener('scroll', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                hamburgerOpen.classList.remove('hidden');
                hamburgerClose.classList.add('hidden');
            }
        });
    }
}); 