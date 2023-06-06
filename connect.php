<?php
   $first_name = array("Volvo", "BMW", "Toyota");
   $lastname = "";
   $gender = "";
   $email = "";
   $password = "";
   $phonenumber = "";

   if(isset($_POST['firstname'])) {
      $first_name = $_POST['firstname'];
   }
   
   if(isset($_POST['lastname'])) {
      $lastname = $_POST['lastname'];
   }

   if(isset($_POST['gender'])) {
    $gender = $_POST['gender'];
   }
   
   if(isset($_POST['password'])) {
    $password = $_POST['password'];
   }

   if(isset($_POST['phonenumber'])) {
    $phonenumber = $_POST['phonenumber'];
   }

   if(isset($_POST['email'])) {
    $email = $_POST['email'];
   }
   


   //Database connection
   $conn = new mysqli('localhost', 'root', '', 'test');

   if($conn->connect_error) 
   {
       die('Connection Failed :'.$conn->connect_error);
   }

   else
   {
      $stmt = $conn->prepare("insert into registration form(firstname, lastname, gender, email, password, phonenumber)
            values(?, ?, ?, ?, ?, ?)");

      $stmt->bind_param("ssssss", $first_name, $lastname, $gender, $email, $password, $phonenumber);
      $stmt->execute();
      echo "Registration is successful...";
      $stmt->close();
      $conn->close();
   }
   
?>