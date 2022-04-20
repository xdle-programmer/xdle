<?php

$answers = $_POST['answers'];

$headers = "From: worldloungeru@yandex.ru \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$answers = urldecode($answers);

$answers = trim($answers);

echo $answers;

$success = mail("worldloungeru@yandex.ru", "Бронирование стола", $answers, $headers);
//$success = mail("yury.inform@gmail.com", "Бронирование стола", $answers, $headers);

if (!$success) {
    echo error_get_last()['message'];
}

?>