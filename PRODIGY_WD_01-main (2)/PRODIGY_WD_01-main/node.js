document.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#222'; // Change to a darker color when scrolling
  } else {
      navbar.style.backgroundColor = '#333'; // Original color
  }
});