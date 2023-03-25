function toggleDetails(event) {
  const button = event.target;
  const details = button.nextElementSibling;
  details.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function () {
  const moreInfoButtons = document.querySelectorAll('.more-info');

  moreInfoButtons.forEach((button) => {
    button.addEventListener('click', toggleDetails);
  });
});
