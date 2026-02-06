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

// grab form and list elements
const form = document.getElementById("nonprofitForm");
const list = document.getElementById("nonprofitList");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent page reload

  // get values
  const name = document.getElementById("name").value;
  const website = document.getElementById("website").value;
  const description = document.getElementById("description").value;
  const contact = document.getElementById("contact").value;
  const category = document.getElementById("category").value;

  // create list item
  const li = document.createElement("li");
  li.innerHTML = `<strong>${name}</strong> (${category})<br>
                  ${description}<br>
                  Contact: <a href="mailto:${contact}">${contact}</a><br>
                  Website: <a href="${website}" target="_blank">${website}</a>`;

  // append to list
  list.appendChild(li);

  // reset form
  form.reset();
});
