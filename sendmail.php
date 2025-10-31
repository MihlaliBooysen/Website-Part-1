<?php
$to = 'mihlalibooysen7@gmail.com';
$subject = 'Contact Form Submission';
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$body = "Name: $name\nEmail: $email\nMessage: $message";

mail($to, $subject, $body);

header('Location: thankyou.html');
?>
