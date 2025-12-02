document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('step1Form');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
});

function handleSignup(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    const userData = {
        first_name: document.getElementById('firstname').value.trim(),
        last_name: document.getElementById('lastname').value.trim(),
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        password: password
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    window.location.href = 'signup-2.html';
}
