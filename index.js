

const carousel = document.getElementById('carouselContent');
const slides = carousel.children;
const totalSlides = slides.length;
let currentIndex = 0;

// Function to update the carousel position
function updateCarousel() {
  const offset = -currentIndex * 100; // Moves carousel by 100% of its width
  carousel.style.transform = `translateX(${offset}%)`;
}

// Next button functionality
document.getElementById('nextButton').addEventListener('click', () => {
  nextSlide();
});

// Previous button functionality
document.getElementById('prevButton').addEventListener('click', () => {
  prevSlide();
});

// Go to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

// Go to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

// Automatically move to the next slide every 5 seconds
setInterval(() => {
  nextSlide();
}, 5000); // Change 5000 to adjust the interval duration



const modal = document.querySelector('.mission-modal');
const closeButton = document.querySelectorAll('.modal-close');

const modalClose = () => {
  modal.classList.remove('fadeIn');
  modal.classList.add('fadeOut');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 500);
}

const openModal = () => {
  modal.classList.remove('fadeOut');
  modal.classList.add('fadeIn');
  modal.style.display = 'flex';
}

for (let i = 0; i < closeButton.length; i++) {

  const elements = closeButton[i];

  elements.onclick = (e) => modalClose();

  modal.style.display = 'none';

  window.onclick = function (event) {
    if (event.target == modal) modalClose();
  }
}
