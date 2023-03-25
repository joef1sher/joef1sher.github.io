document.addEventListener('DOMContentLoaded', function () {
  const homeLink = document.getElementById('home-link');
  const servicesLink = document.getElementById('services-link');
  const content = document.getElementById('content');

  const pages = Array.from(document.getElementsByClassName('page'));

  function showPage(pageClass) {
    pages.forEach(page => {
      if (page.classList.contains(pageClass)) {
        page.style.display = 'block';
      } else {
        page.style.display = 'none';
      }
    });
  }

  homeLink.addEventListener('click', function (event) {
    event.preventDefault();
    showPage('home-page');
  });

  servicesLink.addEventListener('click', function (event) {
    event.preventDefault();
    showPage('services-page');
  });
});


const getStartedButton = document.getElementById('get-started');
const modal = document.getElementById('modal');
const closeButton = document.getElementsByClassName('close')[0];

getStartedButton.addEventListener('click', function () {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', function () {
  modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
