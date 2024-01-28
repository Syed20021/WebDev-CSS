console.log("formValidation.js loaded");

function validateEmailAddressSimple(emailString) {
    console.log('Validating Email Address');
    let atSymbol = emailString.indexOf('@');
    if (atSymbol < 1) return false;

    let dot = emailString.indexOf('.');
    if (dot <= atSymbol + 2) return false;
    if (dot === emailString.length - 1) return false;

    return true;
}

function validateEmailAddressRegex(emailString) {
    var emailRegex = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
    return !!emailString && typeof emailString === 'string' && emailString.match(emailRegex);
}

function isValidUsername(username) {
    console.log('Validating Username');
    var usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;

    if (!username.match(usernameRegex)) {
        updateError('Invalid username. Please use 3-16 characters, alphanumeric with optional _ or -.');
        return false;
    }

    clearError();
    return true;
}

function updateError(message) {
    let errorElement = document.getElementById('generalError');
    errorElement.innerHTML = message;
    errorElement.classList.add('error');
}

function clearError() {
    let errorElement = document.getElementById('generalError');
    errorElement.innerHTML = '';
    errorElement.classList.remove('error');
}

function validateForm() {
    let email = document.getElementById('email').value;
    if (!validateEmailAddressSimple(email)) {
        updateError('Invalid Email Address.');
        return false;
    }

    let username = document.getElementById('username').value;
    return isValidUsername(username);
}

function resetForm() {
    clearError();
}

console.log("Form validation setup complete.");
