<?php

require_once("database2.php");

if(empty($_POST["firstname"]))
{
    die("First name is required");
}

if(empty($_POST["lastname"]))
{
    die("Last name is required.");
}

if(! filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) 
{
    die("Valid email is required");
}

if (strlen($_POST["password"]) < 8) 
{
    die("Password must be atleast 8 charactwrs.");
}

if ( ! preg_match("/[a-z]/i", $_POST["password"]))
{
    die("Password must contains atleast one letter");
}

if ( ! preg_match("/[0-9]/i", $_POST["password"]))
{
    die("Password must contains atleast one number");
}

if ($_POST["password"] !== $_POST["password_confirmation"])
{
    die("Psswords must match");
}

//$password_hash = password_hash($_POST["password"]. PASSWORD_DEFAULT)

//$sql = "UPDATE users SET firstname = '$firstname', lastname='$lastname', 'email="$email', password='$password_hash' WHERE id=1";


//if(mysqli_query($conn, $sql)) {

//} 

?>