<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "wealthygloria1@gmail.com"; // Replace with your email address
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    $email_body = "You have received a new message from your website contact form.\n\n" .
        "Here are the details:\n\nName: $full_name\n\nEmail: $email\n\nPhone: $phone\n\nSubject: $subject\n\nMessage:\n$message";

    if (mail($to, $subject, $email_body, $headers)) {
        echo "Thank you for contacting us. We will get back to you soon!";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
} else {
    echo "This script can only be accessed through a form submission.";
}
?>