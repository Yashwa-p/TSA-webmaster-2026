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

// --- Header color change on scroll ---
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});  

// --- Recommendation form ---
document.getElementById("matchForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const interest = document.getElementById("interest").value;
  const contribution = document.getElementById("contribution").value;
  const time = document.getElementById("time").value;
  const result = document.getElementById("result");

  let recommendation = "";

  if (interest === "health") {
    recommendation = "We recommend joining a Health & Wellness nonprofit like a local hospital foundation or mental health advocacy group.";
  } 
  else if (interest === "education") {
    recommendation = "You would thrive in an Education nonprofit such as tutoring programs or youth mentorship organizations.";
  } 
  else if (interest === "environment") {
    recommendation = "Consider an Environmental nonprofit focused on sustainability, cleanups, or climate advocacy.";
  } 
  else if (interest === "community") {
    recommendation = "A Community Support nonprofit like food banks or housing initiatives would be a great fit.";
  } 
  else if (interest === "arts") {
    recommendation = "An Arts & Culture nonprofit would match your interests perfectly.";
  }

  // Extra refinement
  if (contribution === "creative") {
    recommendation += " Since you enjoy creative work, look for organizations that need media, design, or event planning support.";
  }

  if (contribution === "teaching") {
    recommendation += " Your mentoring skills would make a big impact in youth-focused programs.";
  }

  if (time === "high") {
    recommendation += " With weekly availability, you could take on leadership roles.";
  }

  result.textContent = recommendation;
});
