<?php include 'database2.php';

$data = false;

if(isset($_GET['id']) && !empty($_GET['id'])) {
    $id = $_GET['id'];
    $query = "DELETE FROM student WHERE id='$id'";
    $data= mysqli_query($mysqli, $query);

    if(!$data) {
       echo mysqli_error($mysqli);
    }// end if

  } else {
    // Handle the case where the 'id' key is not set in $_GET
  }//end else
  
if($data){
    ?>
    <script type="text/javascript">
      alert("Data Deleted Successfully");
      window.open("http://localhost/WebDportal/delete.php", "_self");
    </script>
    <?php
}//end if

else{
     ?>

    <script type="text/javascript">
        alert("Please try again!");
    </script>

    <?php
}// end else


