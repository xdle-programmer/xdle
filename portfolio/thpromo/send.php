<?php

$answers = $_POST['answers'];

$headers = "From: otmleads.cmthailand@gms-group.com \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$answers = urldecode($answers);

$answers = trim($answers);

echo $answers;

$success = mail("otmleads.cmthailand@gms-group.com", "Buy now mail", $answers, $headers);

if (!$success) {
    echo error_get_last()['message'];
}

?>