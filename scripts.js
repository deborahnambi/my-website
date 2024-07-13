document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
      this.reset();
    } else {
      alert('Please fill out all fields.');
    }
  });
  