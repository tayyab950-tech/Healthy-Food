// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar").querySelector("ul");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.carousel-track');

  if (track) {
    track.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });

    track.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });
  }
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('✅ Message sent successfully! We’ll get back to you soon.');
  this.reset();
});


