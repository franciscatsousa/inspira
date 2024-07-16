const buttons = document.querySelectorAll('.warning-button');

function SignUpMentee() {
    if (confirm("To sign up you will be redirected to a form on an external page.")) {
      window.open('https://ls.uc.pt/index.php/298188?lang=pt', '_blank'); // Open YouTube in a new tab
    }
  }

  function SignUpMentor() {
    if (confirm("To sign up you will be redirected to a form on an external page.")) {
      window.open('https://ls.uc.pt/index.php/182886?lang=pt', '_blank'); // Open YouTube in a new tab
    }
  }

  function redirectToGuide() {
  if (confirm("You will be redirected to an external page.")) {
    window.open('https://drive.google.com/file/d/1YxwzJzT5PFGwXfgloOgqvHAbKwv5z4hP/view', '_blank'); // Open YouTube in a new tab
  }
}