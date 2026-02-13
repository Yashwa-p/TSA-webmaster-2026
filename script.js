// Scroll background animation
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / docHeight;
  const posX = 50 + scrollPercent * 50;
  const posY = 50 - scrollPercent * 50;
  document.body.style.backgroundPosition = `${posX}% ${posY}%`;
});

// Fade-in on scroll
const fadeSections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

fadeSections.forEach(section => observer.observe(section));

// Header color change
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Hero parallax
const track = document.querySelector('.image-track');
if (track) {
  track.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    track.scrollLeft += x * 10;
  });
}

// Carousel auto-slide
const carouselTrack = document.querySelector('.carousel-track');
let slides = document.querySelectorAll('.slide');

const firstClone = slides[0].cloneNode(true);
carouselTrack.appendChild(firstClone);

slides = document.querySelectorAll('.slide');

let currentIndex = 0;
const slideWidth = 100; // 100% per slide

function nextSlide() {
  currentIndex++;
  carouselTrack.style.transition = 'transform 0.5s linear';
  carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}

carouselTrack.addEventListener('transitionend', () => {
  // If we're on the cloned slide, jump back instantly
  if (currentIndex === slides.length - 1) {
    carouselTrack.style.transition = 'none';
    currentIndex = 0;
    carouselTrack.style.transform = `translateX(0)`;
  }
});

setInterval(nextSlide, 3000);


