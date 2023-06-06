<?php

require_once("database2.php");

if(empty($_POST["username"]))
{
    die("Username is required");
}

if(empty($_POST["password"]))
{
    die("Last name is required.");
} else if (strlen($_POST["password"]) < 8) 
{
    die("Password must be atleast 8 charactwrs.");
} else if (!preg_match("/[a-z]/i", $_POST["password"]))
{
    die("Password must contains atleast one letter");
} else if ( !preg_match("/[0-9]/i", $_POST["password"]))
{
    die("Password must contains atleast one number");
}

$password_hash = password_hash($_POST["password"], PASSWORD_DEFAULT);

if (!empty($_POST["username"]) && !empty($_POST["password"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $loginQuery = "select * from login_form where email = '".$username."' and password = '".$password."'";
    if(mysqli_query($mysqli, $loginQuery)) {
         $result = mysqli_query($mysqli, $loginQuery);
         $row = mysqli_fetch_array($result);
         if(isset($row['Email'])) {
            echo "Your login has been sucessfully";
         } else {
            echo "Your details are invalid";
         }
    } 
    
}


?>