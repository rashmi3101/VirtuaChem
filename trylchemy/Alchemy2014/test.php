<?php
include("db_connect.php");
 $data = mysql_query("SELECT * FROM sastrend WHERE timer='21'") 
 or die(mysql_error()); 

 $info = mysql_fetch_array( $data );
 echo $info['Price']; 
?>