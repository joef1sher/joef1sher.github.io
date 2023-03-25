const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting normally
  const formData = new FormData(form);
  fetch('https://formspree.io/f/moqznrql', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      alert('Your message has been sent!'); // Show a success message to the user
      form.reset(); // Reset the form after submission
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

