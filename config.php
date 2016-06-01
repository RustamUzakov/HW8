<?php 
$servername="localhost";
$username="root";
$password="";
$dbname="homework8";

$conn=new mysqli($servername,$username,$password,$dbname);

if($conn->connect_error){
	die("Connected failde: " . $conn->connect_error);
}

 ?>