document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
  
    function showSlide(n) {
      slides.forEach(slide => {
        slide.style.display = 'none';
      });
      slides[n].style.display = 'flex'; // Show the selected slide
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    // Show the first slide initially
    showSlide(currentSlide);
  
    // Event listeners for navigation buttons
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');
  
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  });