<?php

require_once("database2.php");
$errors = [];

if($_SERVER['REQUEST_METHOD'] === 'POST') {

    //Retrieve the form data
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $phonenumber = $_POST['phonenumber'];
    $email = $_POST['email'];
    $enquiry = $_POST['enquiry'];
    $message= $_POST['message'];

    //Validate firstname
    if(empty($firstname)) {
        $errors[] = "First name is required";
    }

    //Validate last name
    if(empty($lastname)) {
        $errors[] = "Last name is required";
    }

    //Validate phone number 
    if(empty($phonenumber)) {
        $errors[] = "Phone number is required";

    } elseif (!preg_match("/^[0-9]+$/", $phonenumber)) {
        $errors[] = "Invalid phone number";
    }

    //Validate email
    if (empty($email)) {
        $errors[] = "Email is required";
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }

    //Validate enquiry
    if($enquiry === 'None') {
        $errors[] = "Please select an enquiry";
    }

    //Validate message
    if(empty($message)) {
        $errors[] = "Message is required";
    }
   
    //If there are no errors please send the email
    if (empty($errors)) {
        //Send an email notification to the site owner
        $to = "youremail@example.com";
        $subject = "New contact form submission";
        $body = "First name: $firstname\nLast name: $lastname\n Phone Number: $phonenumber\n Email: $email\nEnquiry@ $enquiry\n Message: $message";
        $headers = "From: $email";

  
        $contactInsert = "INSERT INTO contact_form (`firstname`, `lastname`,`phonenumber`, `email`, `message`) 
        values ('".$_POST["firstname"]."', '".$_POST["lastname"]."', '".$_POST["phonenumber"]."', '".$_POST["email"]."', '".$_POST["message"]."' )";
        $result = mysqli_query($mysqli, $contactInsert);
        $row = mysqli_affected_rows($mysqli);
        if(!empty($row)) {
            echo "Your query has been recorded successfully";
            header('Location: thankyou.html');
            exit;
        } else {
            echo "Sorry!, soemthing wrong went.";
        }
}

}

?>