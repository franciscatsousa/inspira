const scrollArrow = document.getElementById('scroll-arrow');

if (scrollArrow) {
  scrollArrow.addEventListener('click', function () {
    const nextSection = document.getElementById('index-section2');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}