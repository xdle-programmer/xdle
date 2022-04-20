<?php
$name = $_POST['name'];
$phone = $_POST['phone'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);

$name = urldecode($name);
$phone = urldecode($phone);

$name = trim($name);
$phone = trim($phone);

mail("info@click-time.ru", "Заявка с сайта", "Имя:".$name.". Телефон: ".$phone ,"From: info@click-time.ru \r\n");

?>