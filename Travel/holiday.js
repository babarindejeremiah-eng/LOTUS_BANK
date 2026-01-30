// Get slider elements
const slidesContainer = document.querySelector('.images');  // the moving track
const slides = document.querySelectorAll('.image-items');   // all individual slides
const totalSlides = slides.length;

let curSlide = 0;
const visibleSlides = 1;

// Go to a specific slide
function gotoSlide(slide) {
  const slideWidth = slides[0].offsetWidth; // width of one slide
  curSlide = (slide + totalSlides) % totalSlides; // wrap-around safely
  slidesContainer.style.transform = `translateX(-${curSlide * slideWidth}px)`;
}

// Move automatically
function nextSlide() {
  gotoSlide(curSlide + 1);
}

// Auto-scroll every 3 seconds
let autoScroll = setInterval(nextSlide, 3000);
