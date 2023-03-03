<?php

function getUserIP(){
    $value = '';

    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $value = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $value = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } elseif (!empty($_SERVER['REMOTE_ADDR'])) {
        $value = $_SERVER['REMOTE_ADDR'];
    }

    return $value;
}

function backupData($payload) {
    // Записуємо дані у файл.
    $fp = fopen('leads_backup.json', 'a');
    fwrite($fp, json_encode($payload) . PHP_EOL);
    fwrite($fp, PHP_EOL);
    fclose($fp);
}

function validateUserData() {
    // Перевіряємо, чи немає у даних користувача пустих значень.
    $userData = func_get_args();

    for ($i = 0; $i < count($userData); $i++) {
        if (!preg_match('/\S/', $userData[$i])) {
            die('Invalid user data!');
        }
    }
}

function getPayload($post) {
	$extra = str_replace(
        array("\r\n", "\r", "\n", "\t"), '',  strip_tags($post['extra'])
    );
	$name = $post['f_name'];
	$surname = $post['l_name'];
	$email = $post['email'];
	$phone = $post['phone2'];

    validateUserData($name, $surname, $email, $phone);

    $payload = array(
        'name' => $name,
        'surname' => $surname,
        'email' => $email,
        'phone' => $phone,
        'offer_id' => $post['offer_id'],
        'integration_id' => $post['integration_id'],
        'domain' => $_SERVER["SERVER_NAME"],
        'ip' => getUserIP(),
        'extra' => $extra,
    );
    backupData($payload);

    return $payload;
}

function formHeaders($post) {
	$authorization = sprintf('Authorization: Bearer %s', $post['b']);
	$headers = array($authorization, 'Content-Type: application/json');

	return $headers;
}

function makeRequest($payload, $headers) {
	$chr = curl_init();

	curl_setopt($chr, CURLOPT_URL, 'https://foxleads.net/api/create_lead');
	curl_setopt($chr, CURLOPT_POST, 1); 
	curl_setopt($chr, CURLOPT_POSTFIELDS, json_encode($payload));
	curl_setopt($chr, CURLOPT_HTTPHEADER, $headers);
	curl_setopt($chr, CURLOPT_SSL_VERIFYPEER, 0);
	curl_setopt($chr, CURLOPT_SSL_VERIFYHOST, 0);
	curl_setopt($chr, CURLOPT_RETURNTRANSFER, 1); 

	$obj = json_decode(curl_exec($chr), true);
	curl_close($chr);

	return $obj;
}

if($_POST) {
	$payload = getPayload($_POST);
	$headers = formHeaders($_POST);
	$obj = makeRequest($payload, $headers);

	if($obj['success']) {
		setcookie('cabinet', $obj['cabinet'], time() + 60 * 90);
		header('Location: success.php?p='.$_POST['p'].'&g='.$_POST['g']);
		die();
	} else {
		header('Location: success.php?error&p='.$_POST['p'].'&g='.$_POST['g']);
		die();
	}
}
