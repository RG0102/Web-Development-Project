<?php 
include 'database2.php'; // Include the file that contains the database connection code

if(isset($_GET['id']) && !empty($_GET['id'])) {
  $id = $_GET['id'];
  $select= "SELECT * FROM student WHERE id='$id'";
  $data= mysqli_query($mysqli,$select);
  $row= mysqli_fetch_array($data);
} else {
  // Handle the case where the 'id' key is not set in $_GET
}

?>

<h1>User account update </h1>

<div>
  <form action="" method="POST">
    <input type="text" id="firstname" name="firstname" placeholder="firstname" value="<?php echo isset($row['firstname']) ? $row['firstname'] : ''; ?>"><br><br>
    <input type="text" id="lastname" name="lastname" placeholder="lastname" value="<?php echo isset($row['lastname']) ? $row['lastname'] : ''; ?>"> <br><br>
    <input type="text" id="email" name="email" placeholder="email" value="<?php echo isset($row['email']) ? $row['email'] : ''; ?>"><br><br>
    <input type="text" id="password" name="password" placeholder="password" value="<?php echo isset($row['password']) ? $row['password'] : ''; ?>"><br><br>

    <input type="submit" name="update_btn" value="Update">
    <button><a href="view.php">Back</a></button>
  </form>     
</div>

<?php 
      if(isset($_POST['update_btn'])) {
         $fname=$_POST['firstname'];
         $lname=$_POST['lastname'];
         $email=$_POST['email'];

        $update = "UPDATE student SET firstname='$fname', lastname='$lname', email='$email' WHERE id='$id'";
         $data= mysqli_query($mysqli, $update);

         if($data) {
            ?>
              <script type="text/javascript">
                 alert("Data Updated Successfully")
                 window.open("http://localhost/WebDportal/view.php", "_self");
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