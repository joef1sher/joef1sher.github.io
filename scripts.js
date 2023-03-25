const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      form.reset();
      const successMessage = document.createElement('p');
      successMessage.textContent = 'Thank you for contacting us. We will get back to you as soon as possible.';
      form.parentNode.insertBefore(successMessage, form.nextSibling);
    } else {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'There was a problem submitting the form.';
      form.parentNode.insertBefore(errorMessage, form.nextSibling);
    }
  };
  xhr.send(formData);
});
