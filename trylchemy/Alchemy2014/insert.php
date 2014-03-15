<?php
$con=mysqli_connect("delta.nitt.edu","alchemy14","zqFVKd7UseYbBPPC","alchemy14_trial");
//$con=mysqli_connect("localhost","localhost","","test");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$sql="INSERT INTO scoreboard (FirstName, Email, Score)
VALUES
('$_POST[Firstname]','$_POST[Email]','$_POST[Score]')";

if (!mysqli_query($con,$sql))
  {
  die('Error: ' . mysqli_error($con));
  }
echo "Score had been recorded! Thank you for playing!";

mysqli_close($con);
?>
