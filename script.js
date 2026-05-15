// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Typing Effect for Hero
const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["Excellence", "Innovation", "Leadership", "Improvement", "Discipline", "Success"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(!typedTextSpan) return;
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if(!typedTextSpan) return;
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(typedTextSpan) {
        setTimeout(type, newTextDelay + 250);
    }
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

// Intersection Observer for Counters
const statsSection = document.querySelector('.stats');
if(statsSection) {
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            startCounters();
            observer.disconnect();
        }
    });
    observer.observe(statsSection);
}

// Form Submission handling
const admissionForm = document.getElementById('admissionForm');
if(admissionForm) {
    admissionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = admissionForm.querySelector('button');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Submitted Successfully!';
            btn.style.backgroundColor = '#10b981';
            admissionForm.reset();
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = '';
            }, 3000);
        }, 1500);
    });
}
