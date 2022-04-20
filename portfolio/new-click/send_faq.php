<?php

// ваш секретный ключ
$secret = '6Leb8m4UAAAAAA6sHZIUqkzJJmLjS8hi9PbSSdjo';
//$secret = 'segwgwegwefwef';
// однократное включение файла autoload.php (клиентская библиотека reCAPTCHA PHP)
require_once (dirname(__FILE__).'/recaptcha/autoload.php');
// если в массиве $_POST существует ключ g-recaptcha-response, то...
if (isset($_POST['g-recaptcha-response'])) {
    // создать экземпляр службы recaptcha, используя секретный ключ
    $recaptcha = new \ReCaptcha\ReCaptcha($secret);
    // получить результат проверки кода recaptcha
    $resp = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);
    // если результат положительный, то...
    if ($resp->isSuccess()){


        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $message = $_POST['question'];

        $name = htmlspecialchars($name);
        $phone = htmlspecialchars($phone);
        $message = htmlspecialchars($message);

        $name = urldecode($name);
        $phone = urldecode($phone);
        $message = urldecode($message);

        $name = trim($name);
        $phone = trim($phone);
        $message = trim($message);

        mail("info@click-time.ru", "Заявка с сайта", "Имя:".$name.". Телефон: ".$phone.". Сообщение: ".$message ,"From: info@click-time.ru \r\n");


        $data['success']=true;
    } else {
        // иначе передать ошибку
        $errors = $resp->getErrorCodes();
        $data['error-captcha']=$errors;
        $data['errorMessage']='Код капчи не прошёл проверку на сервере';
        $data['success']=false;
    }

} else {
    //ошибка, не существует ассоциативный массив $_POST["send-message"]
    $data['errorMessage']='error';
    $data['success']=false;
}

header('Content-Type: application/json');
echo json_encode($data);

?>