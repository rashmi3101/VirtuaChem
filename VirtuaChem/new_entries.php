include("db_connect.php");
$result = mysql_query("SELECT * FROM new_entries");
while($row = mysql_fetch_assoc($result)){
    echo $row['id']." has new value: ".$row['value'];
}