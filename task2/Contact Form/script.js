function validateForm() {
    //Get Form 
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    //Validate name
    if (name === '' || name.length < 2) {
        alert('Please enter your name here(at least 2 charachters).');
        document.getElementById('name').focus();
        document.getElementById('name').style.borderColor = '#ef4444';
        return false;
    }

    //Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        document.getElementById('email').focus();
        document.getElementById('email').style.borderColor = '#ef4444';
        return false;
    }

    //Validate message
    if (message === '' || message.length < 10) {
        alert('Please enter message (at least 10 charachters).');
        document.getElementById('message').focus();
        document.getElementById('message').style.borderColor = '#ef4444';
        return false;
    }

    //All fields okay - show success
    alert('Thank you! Your message has been sent sucessfully');
    return true;
}