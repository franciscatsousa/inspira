
function revealMore(sectionId) {
  // Get the corresponding section's 'more' containers and button
  const section = document.getElementById(sectionId);
  const moreSections = section.querySelectorAll(".more"); // Find all the .more sections inside the selected section
  const btnText = section.querySelector("button"); // Get the button inside the selected section
  let currentIndex = parseInt(btnText.getAttribute("data-index")) || 0; // Get the current index or default to 0

  if (currentIndex < moreSections.length) {
    moreSections[currentIndex].style.display = "grid"; // Show the next .more section
    currentIndex++; // Increase the index for the next button click
    btnText.setAttribute("data-index", currentIndex); // Update the data-index on the button
  }

  if (currentIndex === moreSections.length) {
    btnText.disabled = true;
    btnText.classList.add('disabled'); // Optionally add a class for styling when no more events to show
  }
}

const scrollArrow = document.getElementById('scroll-arrow');

if (scrollArrow) {
  scrollArrow.addEventListener('click', function() {
    const nextSection = document.getElementById('activities-section2');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

