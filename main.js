// Wrap all DOM-dependent code inside DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for all anchor links starting with #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
            // Close mobile nav menu after click (optional)
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Navbar background on scroll (initial check)
    const nav = document.querySelector('.navbar');
    function updateNavbarBackground() {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.8)';
            nav.style.boxShadow = 'none';
        }
    }
    updateNavbarBackground();
    window.addEventListener('scroll', updateNavbarBackground);

    // Quick Links smooth scrolling
    document.querySelectorAll('.quick-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });

    // Section Navigation: Buttons to switch content panels
    const sectionBtns = document.querySelectorAll('.section-btn');
    const contentPanels = document.querySelectorAll('.content-panel');

    sectionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetSection = btn.getAttribute('data-section');
            if (!targetSection) return;

            // Remove active class from all buttons and panels
            sectionBtns.forEach(b => b.classList.remove('active'));
            contentPanels.forEach(panel => panel.classList.remove('active'));

            // Activate clicked button and corresponding panel
            btn.classList.add('active');
            const targetPanel = document.getElementById(targetSection);
            if (targetPanel) {
                targetPanel.classList.add('active');
            } else {
                console.warn(`No content panel found with id: ${targetSection}`);
            }

            // Animate skill bars if skills section is active
            if (targetSection === 'skills') {
                setTimeout(() => {
                    animateSkillBars();
                }, 300);
            }
        });
    });

    // Initialize the first section as active (if not already)
    const firstBtn = document.querySelector('.section-btn.active') || document.querySelector('.section-btn');
    const firstPanel = document.querySelector('.content-panel.active') || document.querySelector('.content-panel');

    if (firstBtn && firstPanel) {
        firstBtn.classList.add('active');
        firstPanel.classList.add('active');
    }

    // Animate skill bars function
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = '0%'; // Reset first
            setTimeout(() => {
                bar.style.width = width + '%';
            }, 200);
        });
    }

    // Scroll animations using IntersectionObserver
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add scroll animation classes and observe elements
    const elementsToAnimate = document.querySelectorAll('.content-card, .timeline-item, .education-item, .cert-card, .project-card');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Initialize skill bars animation for the first load if skills is active
    if (document.getElementById('skills')?.classList.contains('active')) {
        setTimeout(animateSkillBars, 1000);
    }

    // Typing effect for hero title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    // Initialize typing effect on hero title lines
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const titleLines = heroTitle.querySelectorAll('.title-line');
        titleLines.forEach((line, index) => {
            const originalText = line.textContent;
            setTimeout(() => {
                typeWriter(line, originalText, 50);
            }, 1000 + index * 300);
        });
    }

    // Add hover effects to interactive cards
    document.querySelectorAll('.content-card, .project-card, .cert-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

// Parallax effect for hero section (outside DOMContentLoaded to ensure scroll event is attached early)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');

    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Active navigation link highlighting on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS styles for active nav links dynamically
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary);
        position: relative;
    }
    .nav-link.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--primary);
    }
`;
document.head.appendChild(style);
