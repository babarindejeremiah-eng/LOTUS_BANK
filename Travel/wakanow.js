//  modal button
 const openbtn = document.querySelector('.modal-btn');
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.modal');
    const closebtn = document.querySelector('#close-btn');

    openbtn.addEventListener('click', function () {
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
    });

    closebtn.addEventListener('click', function () {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    });



    
    // image slide
    const slides = document.querySelector('.slides');
    const next = document.getElementById('next-btn');
    const prev = document.getElementById('prev-btn');
    const totalSlides = document.querySelectorAll('.slide').length;

    let curSlide = 0;
    const visibleSlides = 2; // show 2 at once

    function gotoSlide(slide) {
      const slideWidth = slides.querySelector('.slide').offsetWidth + 20; // includes gap
      slides.style.transform = `translateX(-${slide * slideWidth}px)`;
    }

    function nextSlide() {
      curSlide = (curSlide >= totalSlides - visibleSlides) ? 0 : curSlide + 1;
      gotoSlide(curSlide);
    }

    function prevSlide() {
      curSlide = (curSlide === 0) ? totalSlides - visibleSlides : curSlide - 1;
      gotoSlide(curSlide);
    }

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    // Auto-scroll every 3 seconds
    let autoScroll = setInterval(nextSlide, 3000);

    // Pause on hover
    document.querySelector('.slider-container').addEventListener('mouseenter', () => clearInterval(autoScroll));
    document.querySelector('.slider-container').addEventListener('mouseleave', () => autoScroll = setInterval(nextSlide, 3000));
    



    // image slide 2
    const slidess = document.querySelector('.slidessq');
    const nextBtn = document.getElementById('nextBtnq');
    const prevBtn = document.getElementById('prevBtnq');
    const totalGroups = document.querySelectorAll('.slide-groupq').length;
    let currentSlide = 0;

    function updateSlide() {
      slidess.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % totalGroups;
      updateSlide();
    });

    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + totalGroups) % totalGroups;
      updateSlide();
    });


    // image slide 3

     const slidest = document.getElementById('slidest');
    const totalCards = document.querySelectorAll('.cardt').length;
    const visibleCards = 4;
    const nextBtnt = document.getElementById('nextBtnt');
    const prevBtnt = document.getElementById('prevBtnt');

    let currentIndex = 0;

    function updateSlider() {
      const cardWidth = slidest.querySelector('.cardt').offsetWidth + 20;
      slidest.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    nextBtnt.addEventListener('click', () => {
      if (currentIndex < totalCards - visibleCards) {
        currentIndex++;
        updateSlider();
      }
    });

    prevBtnt.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });








    
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Show button when scrolled down 300px
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  // Scroll smoothly to top when clicked
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });








  const stickyNavbar = document.getElementById("stickyNavbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {  // show after 250px
      stickyNavbar.classList.add("active");
    } else {
      stickyNavbar.classList.remove("active");
    }
  });


