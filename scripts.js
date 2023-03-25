document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('myModal');
  var btn = document.getElementById('get-started');
  var span = document.getElementsByClassName('close')[0];

  if (btn) {
    btn.addEventListener('click', function (event) {
      event.stopPropagation();
      modal.style.display = 'block';
    });
  }

  if (span) {
    span.addEventListener('click', function (event) {
      event.stopPropagation();
      modal.style.display = 'none';
    });
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  // More Info buttons
  document.querySelectorAll('.more-info').forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.stopPropagation();
      const details = button.nextElementSibling;
      if (details.classList.contains('info-content')) {
        details.classList.toggle('open');
      }
    });
  });
});
