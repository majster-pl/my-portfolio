<?php
// header("Access-Control-Allow-Origin: *");
$data = json_decode(file_get_contents("php://input"), true);

// clean string from different type of contnet
function clean_string($string)
{
    $bad = array("content-type", "bcc:", "to:", "cc:", "href");
    return str_replace($bad, "", $string);
}

// echo error message and die
function died($error)
{
    echo $error;
    die();
}

// send message
$email_to = "waliczek.szymon@gmail.com";
$email_subject = clean_string("Websie enquiry");
$email_message = clean_string($data['message']);
$email_message = trim(preg_replace('/\s+/', '<br/>', $email_message));
$email_from = clean_string($data['email']);
$name = clean_string($data['name']);

// validation expected data exists
if (!isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    died('We are sorry, but there appears to be a problem with the form you\'ve submitted.fff');
}

// create email headers
$headers = "From: Szymon Waliczek Website <webmaster@waliczek.org>\r\n";
$headers .= "Reply-To: " . strip_tags($email_from) . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion() . '\r\n';
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


mail($email_to, $email_subject, $email_message, $headers);

echo 'true';
exit();



// if bad request
died('Bad request!.');
