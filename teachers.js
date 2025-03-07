// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Infinite slider functionality
class InfiniteSlider {
    constructor(selector) {
        this.slider = document.querySelector(selector);
        this.track = this.slider.querySelector('.slider-track');
        this.items = this.track.children;
        this.nextBtn = document.querySelector('.slider-btn.next');
        this.prevBtn = document.querySelector('.slider-btn.prev');
        this.itemWidth = 300 + 32; // card width + margin
        this.currentIndex = 0;
        this.isAnimating = false;

        this.init();
    }

    init() {
        // Clone items for infinite effect
        const items = Array.from(this.items);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            this.track.appendChild(clone);
        });

        // Set initial position
        this.track.style.transform = 'translateX(0)';

        // Add event listeners
        this.nextBtn.addEventListener('click', () => this.slide('next'));
        this.prevBtn.addEventListener('click', () => this.slide('prev'));
    }

    slide(direction) {
        if (this.isAnimating) return;
        this.isAnimating = true;

        const currentPos = -this.currentIndex * this.itemWidth;
        const itemCount = this.items.length;

        if (direction === 'next') {
            this.currentIndex++;
            if (this.currentIndex >= itemCount) {
                gsap.to(this.track, {
                    duration: 0.5,
                    x: -this.currentIndex * this.itemWidth,
                    ease: 'power2.out',
                    onComplete: () => {
                        this.currentIndex = 0;
                        this.track.style.transition = 'none';
                        this.track.style.transform = 'translateX(0)';
                        setTimeout(() => {
                            this.track.style.transition = 'transform 0.5s';
                            this.isAnimating = false;
                        }, 50);
                    }
                });
                return;
            }
        } else {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = itemCount - 1;
                this.track.style.transition = 'none';
                this.track.style.transform = `translateX(${-itemCount * this.itemWidth}px)`;
                setTimeout(() => {
                    this.track.style.transition = 'transform 0.5s';
                    this.currentIndex--;
                }, 50);
            }
        }

        gsap.to(this.track, {
            duration: 0.5,
            x: -this.currentIndex * this.itemWidth,
            ease: 'power2.out',
            onComplete: () => {
                this.isAnimating = false;
            }
        });
    }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.teachers-slider')) {
        new InfiniteSlider('.teachers-slider');
    }

    // Animate teacher cards on teachers.html
    if (document.querySelector('.teacher-card')) {
        gsap.from('.teacher-card', {
            scrollTrigger: {
                trigger: '.teacher-card',
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2
        });
    }

    // Update copyright year
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Mobile menu functionality
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