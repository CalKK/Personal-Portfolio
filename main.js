// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (nav) {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.8)';
            nav.style.boxShadow = 'none';
        }
    }
});

// Portfolio Section Navigation - MAIN FUNCTIONALITY
function initializePortfolioNavigation() {
    console.log('Initializing portfolio navigation...');
    
    const sectionBtns = document.querySelectorAll('.section-btn');
    const contentPanels = document.querySelectorAll('.content-panel');
    
    console.log('Found section buttons:', sectionBtns.length);
    console.log('Found content panels:', contentPanels.length);
    
    // Log all button data-section values
    sectionBtns.forEach((btn, index) => {
        console.log(`Button ${index}:`, btn.getAttribute('data-section'));
    });
    
    // Log all panel IDs
    contentPanels.forEach((panel, index) => {
        console.log(`Panel ${index}:`, panel.id);
    });
    
    // Add click event to each button
    sectionBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            console.log(`Button ${index} clicked! Target section:`, targetSection);
            
            // Remove active class from all buttons
            sectionBtns.forEach(b => {
                b.classList.remove('active');
                console.log('Removed active from button:', b.getAttribute('data-section'));
            });
            
            // Remove active class from all panels
            contentPanels.forEach(panel => {
                panel.classList.remove('active');
                console.log('Removed active from panel:', panel.id);
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            console.log('Added active to button:', targetSection);
            
            // Find and activate the target panel
            const targetPanel = document.getElementById(targetSection);
            if (targetPanel) {
                targetPanel.classList.add('active');
                console.log('Added active to panel:', targetSection);
                
                // Animate skill bars if skills section
                if (targetSection === 'skills') {
                    setTimeout(() => {
                        animateSkillBars();
                    }, 300);
                }
            } else {
                console.error('Target panel not found:', targetSection);
            }
        });
    });
    
    // Set initial active section (honors)
    const initialBtn = document.querySelector('.section-btn[data-section="honors"]');
    const initialPanel = document.getElementById('honors');
    
    if (initialBtn && initialPanel) {
        initialBtn.classList.add('active');
        initialPanel.classList.add('active');
        console.log('Set initial active section: honors');
    } else {
        console.error('Could not find initial button or panel');
    }
}

// Animate skill bars
function animateSkillBars() {
    console.log('Animating skill bars...');
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        console.log('Animating skill bar to width:', width);
        
        // Reset first
        bar.style.width = '0%';
        
        // Animate after a short delay
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 100);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing...');
    
    // Initialize portfolio navigation
    initializePortfolioNavigation();
    
    // Initialize scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add scroll animation to elements
    const elementsToAnimate = document.querySelectorAll('.content-card, .timeline-item, .education-item, .cert-card, .project-card');
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

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

// Initialize typing effect
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const titleLines = heroTitle.querySelectorAll('.title-line');
        titleLines.forEach((line, index) => {
            const originalText = line.textContent;
            setTimeout(() => {
                typeWriter(line, originalText, 50);
            }, 1000 + (index * 300));
        });
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
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

// Add hover effects to interactive elements
document.querySelectorAll('.content-card, .project-card, .cert-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add CSS for active nav links
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary);
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
