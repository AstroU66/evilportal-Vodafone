document.querySelectorAll('.accordion').forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');

        const panel = button.nextElementSibling;
        if (button.classList.contains('active')) {
            panel.classList.add('open');
            panel.style.maxHeight = panel.scrollHeight + 'px';
        } else {
            panel.classList.remove('open');
            panel.style.maxHeight = null;
        }
    });
});

function showError(element, message) {
    element.textContent = message;
    element.classList.add('active');
}
function hideError(element) {
    element.textContent = '';
    element.classList.remove('active');
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validatePasswordComplexity(pw) {
    return (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pw) &&
        pw[0] !== ' ' &&
        pw[pw.length - 1] !== ' '
    );
}


const pwInput = document.getElementById('guest-password');
const criteriaLower = document.getElementById('criteria-lowercase');
const criteriaUpper = document.getElementById('criteria-uppercase');
const criteriaNumber = document.getElementById('criteria-number');
const criteriaSpecial = document.getElementById('criteria-special');
const criteriaLength = document.getElementById('criteria-length');

function updatePasswordCriteria() {
    const pw = pwInput.value;

    if (/[a-z]/.test(pw)) {
        criteriaLower.classList.add('valid');
    } else {
        criteriaLower.classList.remove('valid');
    }

    if (/[A-Z]/.test(pw)) {
        criteriaUpper.classList.add('valid');
    } else {
        criteriaUpper.classList.remove('valid');
    }

    if (/\d/.test(pw)) {
        criteriaNumber.classList.add('valid');
    } else {
        criteriaNumber.classList.remove('valid');
    }

    if (/[^\w\s]/.test(pw)) {
        criteriaSpecial.classList.add('valid');
    } else {
        criteriaSpecial.classList.remove('valid');
    }

    if (pw.length >= 8) {
        criteriaLength.classList.add('valid');
    } else {
        criteriaLength.classList.remove('valid');
    }
}

pwInput.addEventListener('input', updatePasswordCriteria);

const eyeBtn = document.querySelector('.toggle-password');
const pwInputUpdated = document.getElementById('guest-password');

eyeBtn.addEventListener('click', function () {
    if (pwInputUpdated.type === 'password') {
        pwInputUpdated.type = 'text';
        eyeBtn.classList.add('showing-password');
    } else {
        pwInputUpdated.type = 'password';
        eyeBtn.classList.remove('showing-password');
    }
});


document.getElementById('form-guests').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const emailInput = document.getElementById('guest-email');
    const emailError = document.getElementById('guest-email-error');

    const pwInput = document.getElementById('guest-password');
    const pwError = document.getElementById('guest-password-error');

    const repeatInput = document.getElementById('guest-repeat');
    const repeatError = document.getElementById('guest-repeat-error');

    let valid = true;

    if (!validateEmail(emailInput.value.trim())) {
        showError(emailError, 'Bitte gültige E-Mail eingeben.');
        valid = false;
    } else {
        hideError(emailError);
    }

    if (!validatePasswordComplexity(pwInput.value)) {
        showError(
            pwError,
            'Passwort muss ≥ 8 Zeichen sein, mit Groß-/Kleinbuchstaben, Zahl & Sonderzeichen.'
        );
        valid = false;
    } else {
        hideError(pwError);
    }

    if (pwInput.value !== repeatInput.value || repeatInput.value === '') {
        showError(repeatError, 'Passwörter stimmen nicht überein.');
        valid = false;
    } else {
        hideError(repeatError);
    }

    if (valid) {
        e.target.submit();
    }
});

document.getElementById('form-corp').addEventListener('submit', function (e) {
    e.preventDefault();

    const userInput = document.getElementById('corp-username');
    const userError = document.getElementById('corp-username-error');

    const passInput = document.getElementById('corp-password');
    const passError = document.getElementById('corp-password-error');

    let valid = true;

    if (userInput.value.trim() === '') {
        showError(userError, 'Bitte Benutzernamen eingeben.');
        valid = false;
    } else {
        hideError(userError);
    }

    if (passInput.value.trim() === '') {
        showError(passError, 'Bitte Passwort eingeben.');
        valid = false;
    } else {
        hideError(passError);
    }

    if (valid) {
        e.target.submit();
    }
});

document.getElementById('form-private').addEventListener('submit', function (e) {
    e.preventDefault();

    const userInput = document.getElementById('private-username');
    const userError = document.getElementById('private-username-error');

    const passInput = document.getElementById('private-password');
    const passError = document.getElementById('private-password-error');

    let valid = true;

    if (userInput.value.trim() === '') {
        showError(userError, 'Bitte Benutzernamen eingeben.');
        valid = false;
    } else {
        hideError(userError);
    }

    if (passInput.value.trim() === '') {
        showError(passError, 'Bitte Passwort eingeben.');
        valid = false;
    } else {
        hideError(passError);
    }

    if (valid) {
        e.target.submit();
    }
});
