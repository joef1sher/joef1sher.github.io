document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('myModal');
  var btn = document.getElementById('get-started');
  var span = document.getElementsByClassName('close')[0];

  if (btn) {
    btn.onclick = function () {
      modal.style.display = 'block';
    };
  }

  if (span) {
    span.onclick = function () {
      modal.style.display = 'none';
    };
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  // More Info buttons
  document.querySelectorAll('.more-info').forEach(function (button) {
    button.addEventListener('click', function () {
      const details = button.nextElementSibling;
      details.classList.toggle('open');
    });
  });
});
