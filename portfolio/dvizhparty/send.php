<?php
$name = $_POST['name'];
$mail = $_POST['email'];
$text = $_POST['message'];

$name = htmlspecialchars($name);
$mail = htmlspecialchars($mail);
$text = htmlspecialchars($text);

$name = urldecode($name);
$mail = urldecode($mail);
$text = urldecode($text);

$name = trim($name);
$mail = trim($mail);
$text = trim($text);

mail("info@dvizh-party.ru", "Заявка с сайта", "E-mail:" . $mail . "   Имя" . $name. "   Сообщение" . $text, "From: info@dvizh-party.ru \r\n");

?>