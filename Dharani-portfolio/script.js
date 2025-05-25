// Activate scroll animation library AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
});

// Simple nav active link toggle on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    if (pageYOffset >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Contact form simple alert (you can expand with real email service)
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for reaching out! I will get back to you soon.');
  e.target.reset();
});

// Typing animation for roles
const texts = ["Frontend Developer", "Java Enthusiast", "Tech Explorer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing-text").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 100);
  }
})();
