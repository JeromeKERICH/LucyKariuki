<?php
// Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load PHPMailer library files (adjust the path based on where you installed it)
require 'path-to-phpmailer/PHPMailer/src/Exception.php';
require 'path-to-phpmailer/PHPMailer/src/PHPMailer.php';
require 'path-to-phpmailer/PHPMailer/src/SMTP.php';

// Create an instance of PHPMailer
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();                                        // Send using SMTP
    $mail->Host       = 'mail.yourdomain.com';              // Set the SMTP server to send through (from your hosting provider)
    $mail->SMTPAuth   = true;                               // Enable SMTP authentication
    $mail->Username   = 'admin@yourdomain.com';             // SMTP username (your email)
    $mail->Password   = 'your-email-password';              // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;     // Enable TLS encryption; or 'PHPMailer::ENCRYPTION_SMTPS' for SSL
    $mail->Port       = 587;                                // TCP port to connect to (use 465 for SSL)

    // Recipients
    $mail->setFrom('admin@yourdomain.com', 'Your Name');    // Your email address
    $mail->addAddress('recipient@example.com', 'Recipient Name');  // Add a recipient

    // Content
    $mail->isHTML(true);                                   // Set email format to HTML
    $mail->Subject = 'Test Email Subject';                 // Email subject
    $mail->Body    = 'This is the <b>HTML</b> message body';  // HTML body content
    $mail->AltBody = 'This is the plain text version of the email content'; // Plain text version

    // Send the email
    $mail->send();
    echo 'Message has been sent successfully';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>


