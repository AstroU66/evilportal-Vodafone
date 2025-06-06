<?php
require_once __DIR__ . '/helper.php';

$orig = $_GET['url'] ?? null;
helper_redirect($orig);
?>
