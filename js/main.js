// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        if (menuIcon) menuIcon.classList.add('hidden');
        if (closeIcon) closeIcon.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        if (menuIcon) menuIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
      }
    });
  }

  // Form Validation for Registration
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic HTML5 validation handles most, but we can add custom checks here
      const formData = new FormData(registerForm);
      const data = Object.fromEntries(formData);
      
      console.log('Registration Data:', data);

      // Show success message (Mock)
      const successMessage = document.getElementById('success-message');
      const formContainer = document.getElementById('form-container');
      
      if (successMessage && formContainer) {
        formContainer.classList.add('hidden');
        successMessage.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your message has been sent.');
      contactForm.reset();
    });
  }

  // Intersection Observer for Scroll Animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll('.fade-in-up').forEach((el) => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
});
