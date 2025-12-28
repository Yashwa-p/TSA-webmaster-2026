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

// --- Nonprofit Directory ---
const nonprofits = [
  {
    name: "Newark Food Bank",
    category: "Food",
    description: "Providing meals and food assistance to Newark families.",
    link: "https://www.newarkfoodbank.org"
  },
  {
    name: "Youth Empowerment Alliance",
    category: "Youth",
    description: "Mentorship and leadership programs for local youth.",
    link: "#"
  },
  {
    name: "Habitat for Humanity Newark",
    category: "Housing",
    description: "Building affordable housing for Newark residents.",
    link: "#"
  },
  {
    name: "Arts Newark",
    category: "Arts",
    description: "Supporting creative expression through community art.",
    link: "#"
  },
  {
    name: "Newark Education Fund",
    category: "Education",
    description: "Expanding access to quality education opportunities.",
    link: "#"
  }
];

const grid = document.getElementById("nonprofitGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function renderNonprofits() {
  if (!grid) return;
  grid.innerHTML = "";

  const search = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  nonprofits
    .filter(n =>
      (category === "all" || n.category === category) &&
      n.name.toLowerCase().includes(search)
    )
    .forEach(n => {
      const card = document.createElement("div");
      card.className = "nonprofit-card";
      card.onclick = () => window.open(n.link, "_blank");

      card.innerHTML = `
        <h3>${n.name}</h3>
        <span>${n.category}</span>
        <p>${n.description}</p>
      `;

      grid.appendChild(card);
    });
}

if (searchInput && categoryFilter) {
  searchInput.addEventListener("input", renderNonprofits);
  categoryFilter.addEventListener("change", renderNonprofits);
  renderNonprofits();
}
