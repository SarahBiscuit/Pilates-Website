<?php

$name = $_POST["Name"];
$email = $_POST["emailAddress"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$mailheader = "From:".$name."<".$email.">\r\n"

$myemail = "ADD MY EMAIL ADDRESS IN HERE";

mail($myemail, $subject, $message, $mailheader)
or die("can't send");

echo"sent";

?>
