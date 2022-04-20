<?php

error_reporting(E_ALL ^ E_NOTICE);

require 'PHPMailer/PHPMailerAutoload.php';

$response = array();

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';
$mail->setFrom('noreply@dimann90.tmweb.ru');
$mail->addAddress('a1097922@yandex.ru');

$form = isset( $_POST['form-name'] ) ? $_POST['form-name'] : null;
$subject = '';
$tokens = array();

if ( $form === 'form-add-sum' ) {
	$fields = array(
		'sum' => array( 'key' => 'Сумма пополнения', 'token' => '[[SUM]]', 'validators' => ['required' => true] ),
		'method' => array( 'key' => 'Метод оплаты', 'token' => '[[METHOD]]' )
	);

	$subject = 'Сумма пополнения';
	$html = file_get_contents('templates/form-add-sum.html');
}

check_fields( $fields );
$html = str_replace( array_keys($tokens), array_values($tokens), $html );

$mail->Subject = '=?utf-8?B?' . base64_encode($subject) . '?=';
$mail->msgHTML($html);

$send = $mail->send();

if ( $send ) {
	$response['error'] = false;
} else {
	$response['error'] = true;
}

die( json_encode( $response ) );


// вспомогательные функции
function check_fields( $fields ) {
	global $tokens;

	foreach ( $fields as $key => $field ) {
		$field['value'] = isset( $_POST[$key] ) ? strip_tags( trim( $_POST[$key] ) ) : null;

		if ( $field['validators']['required'] ) {
			if ( empty( $field['value'] ) ) {
				$response['error'] = true;
				die( json_encode( $response ) );
			}
		}

		$tokens[ $field['token'] ] = $field['value'];
	}
}

?>
