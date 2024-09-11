<?php

$name = $_POST["Name"];
$email = $_POST["emailAddress"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$mailheader = "From:".$name."<".$email.">\r\n"

$myemail = "scfletcher2000@hotmail.com";

mail($myemail, $subject, $message, $mailheader)

?>