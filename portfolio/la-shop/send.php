<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$url = $_POST['url'];
$form_name = $_POST['form_name'];

$headers = "From: info@sale-store.com.ua \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$name = urldecode($name);
$phone = urldecode($phone);
$url = urldecode($url);
$form_name = urldecode($form_name);


$name = trim($name);
$phone = trim($phone);
$url = trim($url);
$form_name = trim($form_name);

mail("yury.inform@gmail.com, Andreyermolovvv@gmail.com", "Заявка с сайта", "Имя: ".$name."<br><br> Телефон: ".$phone."<br><br> Страница: <a href=".$url.">".$url."</a><br><br> Форма: ".$form_name , $headers);

?>
