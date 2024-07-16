const scrollArrow = document.getElementById('scroll-arrow');

if (scrollArrow) {
  scrollArrow.addEventListener('click', function () {
    const nextSection = document.getElementById('index-section2');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

function redirectToYouTube() {
  if (confirm("You will be redirected to our Youtube channel")) {
    window.open('https://www.youtube.com/channel/UCl_JZ0itrOvx-bkV0IajFZQ', '_blank'); // Open YouTube in a new tab
  }
}

function redirectToInstagram() {
  if (confirm("You will be redirected to our Instagram")) {
    window.open('https://www.instagram.com/inspira_dei_uc/', '_blank'); // Open YouTube in a new tab
  }
}

