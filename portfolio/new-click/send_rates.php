<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['rates'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$message = htmlspecialchars($message);

$name = urldecode($name);
$phone = urldecode($phone);
$message = urldecode($message);

$name = trim($name);
$phone = trim($phone);
$message = trim($message);

mail("info@click-time.ru", "Заявка с сайта", "Имя:".$name.". Телефон: ".$phone.". Тариф: ".$message ,"From: info@click-time.ru \r\n");

?>