<?php
$answers = $_POST['answers'];

$headers = "From: chehly7878@yandex.ru \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$answers = urldecode($answers);

$answers = trim($answers);

echo $answers;

$success = mail("md@admd.pro", "Заявка с сайта", $answers, $headers);

if (!$success) {
    echo error_get_last()['message'];
}

?>