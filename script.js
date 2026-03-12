const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');
const navToggle = document.querySelector('.nav-toggle');
const navLinksContainer = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 24) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) {
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

if (navToggle && navLinksContainer) {
  navToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('open');
  });

  navLinksContainer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinksContainer.classList.remove('open');
    });
  });
}

const revealElements = document.querySelectorAll(
  '.about-grid, .timeline-item, .project-card, .contact-item, .contact-description'
);

revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(el => observer.observe(el));
