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

const getStartedButton = document.getElementById('get-started');
getStartedButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent the button from submitting the form
  document.getElementById('myModal').style.display = "block"; // Show the modal
});

const closeButtons = document.getElementsByClassName('close');
for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', (e) => {
    document.getElementById('myModal').style.display = "none"; // Hide the modal
  });
}

window.addEventListener('click', (e) => {
  if (e.target === document.getElementById('myModal')) {
    document.getElementById('myModal').style.display = "none"; // Hide the modal
  }
});
