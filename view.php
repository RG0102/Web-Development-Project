//Student Name: Ritika Gupta
<?php include 'database2.php'; ?>
<a href="index.php">HOME</a>

<table border="1px" cellpadding="10px" cellspacing="0">
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th colspan="2">Actions</th>
  </tr>
  <?php
  $query = "SELECT * FROM student";
  $data = mysqli_query($mysqli, $query);
  $result = mysqli_num_rows($data);

  if ($result > 0) {
    while ($row = mysqli_fetch_array($data)) {
  ?>
      <tr>
        <td><?php echo $row['firstname']; ?></td>
        <td><?php echo $row['lastname']; ?></td>
        <td><?php echo $row['email']; ?></td>
        <td><a href="update.php?id=<?php echo $row['id']; ?>">Edit</a></td>

        <td><a onclick="return confirm('Are you sure you want to delete?')" href="delete.php?id=<?php echo $row['id']; ?>">Delete</a></td>
      </tr>
  <?php
    }
  } else {
  ?>
    <tr>
      <td colspan="5">No Record Found</td>
    </tr>
  <?php
  }// end else
  ?>
</table>
