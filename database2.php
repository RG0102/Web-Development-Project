<?php

$host = "localhost";
$dbname = "mydb";
$username = "root";
$password = "";

$mysqli = new mysqli($host,$username, $password, $dbname);
        
if ($mysqli->connect_errno)
{
    die("Connection error: " .$mysqli->connect_error);
}

//Create a prepared statement
$stmt = $mysqli->prepare("SELECT * FROM login_form");

//Execute the prepared statement
$stmt->execute();

//Close the prepared statement
$stmt->close();

?>

