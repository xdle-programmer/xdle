<?php

$answers = $_POST['answers'];
$email = $_POST['hidden_email'];

$headers = "From: " . $email . " \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$answers = urldecode($answers);

$answers = trim($answers);

echo $answers;

$success = mail("goldmandavid.gd@gmail.com", "Заявка Made in Earth online", $answers, $headers);

if (!$success) {
    echo error_get_last()['message'];
}

?>