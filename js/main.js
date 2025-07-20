document.addEventListener('DOMContentLoaded', () => {
  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      if (elementPosition < screenPosition) {
        element.classList.add('animated');
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();

  // Navbar shrink on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-shrink');
    } else {
      navbar.classList.remove('navbar-shrink');
    }
  });

  // Service card hover effects
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('shadow-lg', 'energy-pulse');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('shadow-lg', 'energy-pulse');
    });
  });

  // Form validation
  const forms = document.querySelectorAll('.needs-validation');
  forms.forEach(form => {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        const name = form.querySelector('#name')?.value || 'User';
        alert(`Thank you, ${name}, for your message! We will get back to you soon.`);
        form.reset();
        form.classList.remove('was-validated');
      }
      form.classList.add('was-validated');
    }, false);
  });

  // Smooth scrolling for anchor links, excluding modal triggers
  document.querySelectorAll('a[href^="#"]:not([data-bs-toggle="modal"])').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.warn(`Target element ${targetId} not found`);
      }
    });
  });

  // Theme toggle
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('change', () => {
      document.body.classList.toggle('bg-dark');
      document.body.classList.toggle('text-white');
    });
  }

  // Keyboard navigation for accessibility
  document.querySelectorAll('.nav-link, .btn:not([data-bs-toggle="modal"])').forEach(element => {
    element.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        element.click();
      }
    });
  });
});