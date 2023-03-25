document.querySelectorAll('.more-info').forEach(function (button) {
  button.addEventListener('click', function () {
    const details = button.nextElementSibling;
    details.classList.toggle('open');
  });
});
