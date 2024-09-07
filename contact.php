<!-- contact.php -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

   
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
   
        $to = "info@thrivingmomspace.com";  
        $subject = "New Contact Message from $name";

 
        $body = "You have received a new message from your website contact form.\n\n" .
                "Name: $name\n" .
                "Email: $email\n\n" .
                "Message:\n$message";

      
        $headers = "From: $email";

       l
        if (mail($to, $subject, $body, $headers)) {
            echo "Thank you! Your message has been sent.";
        } else {
            echo "Error: Unable to send your message. Please try again later.";
        }
    } else {
        echo "Invalid email address. Please enter a valid email.";
    }
} else {
    echo "Form submission error.";
}
?>

