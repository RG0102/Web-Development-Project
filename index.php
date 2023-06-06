<?php  include 'database2.php'; ?>

//Sudent Name: Ritika Gupta (C21368541)

<!DOCTYPE html>
<html lang="en">
  <head>

    <meta charset="UTF-8"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css">
    
    <title>Pharmacy Website</title>

  </head>

  <body>
 
    <div>
        <h1>Sign Up</h1>
    </div>

        <form action="" method="POST">
        <div>
           <input type="text" id="firstname" name="firstname" placeholder="firstname"> <br><br>
           <input type="text" id="lastname" name="lastname" placeholder="lastname"> <br><br>
           <input type="text" id="email" name="email" placeholder="email"> <br><br>
           <input type="text" id="password" name="password" placeholder="password"><br><br>


           <input type="submit" name="save_btn" value="Save">
           <button><a href="view.php">View</a></button>
       </form>     
      </div>


      <?php 
      if(isset($_POST['save_btn'])) {
         $fname=$_POST['firstname'];
         $lname=$_POST['lastname'];
         $email=$_POST['email'];

         //Select the database to use
         //mysqli_select_db($con, "mydb");
         
         $query = "INSERT INTO student (firstname, lastname, email) VALUES('$fname', '$lname' , '$email')";
         $data= mysqli_query($mysqli, $query);

         if($data) {
            ?>
              <script type="text/javascript">
                 alert("Data Saved Successfully")
              </script>
            <?php
         }// end if
         else {
            ?>
            <script type="text/javascript">
                alert("Please try again!")
            </script>
            <?php
         }// end else
      }// end outer if
      ?>

  </body>


</html> 