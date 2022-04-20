<?php

$answers = $_POST['answers'];

$headers = "From: motov_andrey@gmail.com \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$answers = urldecode($answers);

$answers = trim($answers);

echo $answers;

$success = mail("and2771@gmail.com,skorochtenie.od@gmail.com", "Заявка ФБ квиз", $answers, $headers);

if (!$success) {
    echo error_get_last()['message'];
}

?>