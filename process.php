<?php 
include("config.php");



$FirstName = $_POST['FirstName'];
$LastName = $_POST['LastName'];
$Email = $_POST['email'];
$PhoneNumber = $_POST['phoneNumber'];


echo $FirstName;

echo "<hr style='border:solid 1px red;'/>";

echo $LastName;

echo "<hr style='border:solid 1px red;'/>";

echo $Email;

echo "<hr style='border:solid 1px red;'/>";

echo $PhoneNumber;

echo "<hr style='border:solid 1px red;'/>";







$sql = "INSERT into contactsvolunteer (FirstName,LastName,Email) VALUES('".$FirstName."','".$LastName."','".$Email."')";
echo "<hr>";
echo $sql;

if($conn->query($sql)===TRUE){
	echo "New record created successfully";
}else{
	echo "Error: " . $sql . "<br>" . $conn->error;
}


/*
$to      = 'rust.uzakov@gmail.com';
$subject = 'email from Personal Site';
$message = 'hello';
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: rust.uzakov@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);*/







 ?>