document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Here you can add your form submission logic, e.g., sending data to a server
    alert('Thank you for your message! I will get back to you soon.');

    // Reset the form
    this.reset();
});
