<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "info@thrivingmomspace.com"; // Replace with your email
    $subject = "New Message from Website";
    $email = $_POST['email'];
    $message = $_POST['message'];

    $headers = "From: " . $email;

    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>
