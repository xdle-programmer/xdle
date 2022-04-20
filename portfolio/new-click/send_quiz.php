<?php
$phone = $_POST['phone'];
$answers = $_POST['answers'];

$headers = "From: info@click-time.ru \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$phone = urldecode($phone);
$answers = urldecode($answers);

$phone = trim($phone);
$answers = trim($answers);

mail("info@click-time.ru", "Заявка с сайта", "Телефон: ".$phone.". Ответы: ".$answers , $headers);

?>