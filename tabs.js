// ===============================
// ACCORDION‐TOGGLE‐LOGIK
// ===============================
document.querySelectorAll('.accordion').forEach((button) => {
    button.addEventListener('click', () => {
        // Toggle “active” auf dem angeklickten Button
        button.classList.toggle('active');

        // Finde das zugehörige Panel (nächster Bruder-Node)
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

// ===============================
// VALIDIERUNGS‐HILFSFUNKTIONEN
// ===============================
function showError(element, message) {
    element.textContent = message;
    element.classList.add('active');
}
function hideError(element) {
    element.textContent = '';
    element.classList.remove('active');
}

// Einfache E-Mail-Syntaxprüfung
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
// Passwort: ≥ 8 Zeichen, ≥ 1 Großbuchstabe, ≥ 1 Kleinbuchstabe, ≥ 1 Zahl, ≥ 1 Sonderzeichen,
// nicht mit Leerzeichen beginnen oder enden
function validatePasswordComplexity(pw) {
    return (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pw) &&
        pw[0] !== ' ' &&
        pw[pw.length - 1] !== ' '
    );
}

// ===============================
// LIVE‐PASSWORD‐KRITERIEN (NEU)
// ===============================

// Wir holen uns die DOM‐Elemente für den Criteria‐Check:
const pwInput = document.getElementById('guest-password');
const criteriaLower = document.getElementById('criteria-lowercase');
const criteriaUpper = document.getElementById('criteria-uppercase');
const criteriaNumber = document.getElementById('criteria-number');
const criteriaSpecial = document.getElementById('criteria-special');
const criteriaLength = document.getElementById('criteria-length');

// Funktion, die den aktuellen Passwort‐Wert prüft und jeweils .valid setzt/entfernt:
function updatePasswordCriteria() {
    const pw = pwInput.value;

    // Lowercase
    if (/[a-z]/.test(pw)) {
        criteriaLower.classList.add('valid');
    } else {
        criteriaLower.classList.remove('valid');
    }

    // Uppercase
    if (/[A-Z]/.test(pw)) {
        criteriaUpper.classList.add('valid');
    } else {
        criteriaUpper.classList.remove('valid');
    }

    // Zahl
    if (/\d/.test(pw)) {
        criteriaNumber.classList.add('valid');
    } else {
        criteriaNumber.classList.remove('valid');
    }

    // Sonderzeichen (alles außer Buchstaben/Zahlen/Whitespace)
    if (/[^\w\s]/.test(pw)) {
        criteriaSpecial.classList.add('valid');
    } else {
        criteriaSpecial.classList.remove('valid');
    }

    // Länge ≥ 8
    if (pw.length >= 8) {
        criteriaLength.classList.add('valid');
    } else {
        criteriaLength.classList.remove('valid');
    }
}

// Event‐Listener: Jedes Mal, wenn der Benutzer eine Taste im Passwort‐Feld drückt:
pwInput.addEventListener('input', updatePasswordCriteria);

// ===============================
// AUGENTOGGLE (PASSWORD SHOW/HIDE) – AKTUALISIERT
// ===============================
const eyeBtn = document.querySelector('.toggle-password');
const pwInputUpdated = document.getElementById('guest-password');

eyeBtn.addEventListener('click', function () {
    if (pwInputUpdated.type === 'password') {
        pwInputUpdated.type = 'text';
        // Klasse hinzufügen, um das durchgestrichene Auge anzuzeigen
        eyeBtn.classList.add('showing-password');
    } else {
        pwInputUpdated.type = 'password';
        eyeBtn.classList.remove('showing-password');
    }
});


// ===============================
// GÄSTE LOGIN FORMULAR‐SUBMISSION
// ===============================
document.getElementById('form-guests').addEventListener('submit', function (e) {
    e.preventDefault(); // verhindere echtes Abschicken

    // Eingaben + Fehlermeldungs-Container
    const emailInput = document.getElementById('guest-email');
    const emailError = document.getElementById('guest-email-error');

    const pwInput = document.getElementById('guest-password');
    const pwError = document.getElementById('guest-password-error');

    const repeatInput = document.getElementById('guest-repeat');
    const repeatError = document.getElementById('guest-repeat-error');

    const submitError = document.getElementById('guest-submit-error');

    let valid = true;

    // 1) Email validieren
    if (!validateEmail(emailInput.value.trim())) {
        showError(emailError, 'Bitte gültige E-Mail eingeben.');
        valid = false;
    } else {
        hideError(emailError);
    }

    // 2) Passwortkomplexität prüfen
    if (!validatePasswordComplexity(pwInput.value)) {
        showError(
            pwError,
            'Passwort muss ≥ 8 Zeichen sein, mit Groß-/Kleinbuchstaben, Zahl & Sonderzeichen.'
        );
        valid = false;
    } else {
        hideError(pwError);
    }

    // 3) Repeat-Passwort prüfen
    if (pwInput.value !== repeatInput.value || repeatInput.value === '') {
        showError(repeatError, 'Passwörter stimmen nicht überein.');
        valid = false;
    } else {
        hideError(repeatError);
    }

    // 4) Wenn alles gültig, zeige “Maintenance”-Fehler
    if (valid) {
        submitError.classList.add('active');
    } else {
        submitError.classList.remove('active');
    }
});

// ===============================
// CORPORATE LOGIN FORMULAR‐SUBMISSION
// ===============================
document.getElementById('form-corp').addEventListener('submit', function (e) {
    e.preventDefault();

    const userInput = document.getElementById('corp-username');
    const userError = document.getElementById('corp-username-error');

    const passInput = document.getElementById('corp-password');
    const passError = document.getElementById('corp-password-error');

    const submitError = document.getElementById('corp-submit-error');

    let valid = true;

    // 1) Username erforderlich
    if (userInput.value.trim() === '') {
        showError(userError, 'Bitte Benutzernamen eingeben.');
        valid = false;
    } else {
        hideError(userError);
    }

    // 2) Passwort erforderlich
    if (passInput.value.trim() === '') {
        showError(passError, 'Bitte Passwort eingeben.');
        valid = false;
    } else {
        hideError(passError);
    }

    // 3) Wenn gültig, zeige “Maintenance”-Fehler
    if (valid) {
        submitError.classList.add('active');
    } else {
        submitError.classList.remove('active');
    }
});

// ===============================
// PRIVATKUNDEN LOGIN FORMULAR‐SUBMISSION
// ===============================
document.getElementById('form-private').addEventListener('submit', function (e) {
    e.preventDefault();

    const userInput = document.getElementById('private-username');
    const userError = document.getElementById('private-username-error');

    const passInput = document.getElementById('private-password');
    const passError = document.getElementById('private-password-error');

    const submitError = document.getElementById('private-submit-error');

    let valid = true;

    // 1) Username erforderlich
    if (userInput.value.trim() === '') {
        showError(userError, 'Bitte Benutzernamen eingeben.');
        valid = false;
    } else {
        hideError(userError);
    }

    // 2) Passwort erforderlich
    if (passInput.value.trim() === '') {
        showError(passError, 'Bitte Passwort eingeben.');
        valid = false;
    } else {
        hideError(passError);
    }

    // 3) Wenn gültig, zeige “Maintenance”-Fehler
    if (valid) {
        submitError.classList.add('active');
    } else {
        submitError.classList.remove('active');
    }
});
