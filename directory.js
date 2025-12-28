// --- Scroll background animation ---
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / docHeight;
  const posX = 50 + scrollPercent * 50;
  const posY = 50 - scrollPercent * 50;
  document.body.style.backgroundPosition = `${posX}% ${posY}%`;
});

// --- Fade-in on scroll ---
const fadeSections = document.querySelectorAll('.fade-section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });
fadeSections.forEach(section => observer.observe(section));

// --- Hero parallax ---
const track = document.querySelector('.image-track');
if (track) {
  track.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    track.scrollLeft += x * 10;
  });
}

// --- Add underline spans to nav links ---
document.querySelectorAll('nav a').forEach(link => {
  const span = document.createElement('span');
  span.classList.add('underline');
  link.appendChild(span);
});

// --- Back to top button ---
const backToTop = document.createElement('button');
backToTop.textContent = '↑';
backToTop.id = 'backToTop';
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 400 ? 'block' : 'none';
});

// --- Header color change on scroll ---
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

function filterDirectory() {
      const searchInput = document.getElementById('searchInput').value.toLowerCase();
      const categoryFilter = document.getElementById('categoryFilter').value;
      const cards = document.querySelectorAll('.directory-grid .card');

      cards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        const desc = card.querySelector('p').textContent.toLowerCase();
        const category = card.getAttribute('data-category');

        if ((name.includes(searchInput) || desc.includes(searchInput)) &&
            (categoryFilter === '' || category === categoryFilter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
