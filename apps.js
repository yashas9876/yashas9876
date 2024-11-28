document.querySelector('.get-started').addEventListener('click', function (e) {
  e.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  target.scrollIntoView({ behavior: 'smooth' });
});
