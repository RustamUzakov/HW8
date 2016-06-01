<?php 
include("config.php");



$FirstName = $_POST['FirstName'];
$LastName = $_POST['LastName'];
$Email = $_POST['email'];
$Address=$_POST['address'];
$City=$_POST['city'];
$State=$_POST['state'];
$PostCode=$_POST['zip'];
$Country=$_POST['country'];
$CardName=$_POST['card-holder-name'];
$CardNumber=$_POST['card-number'];
$CardCVV=$_POST['cvv'];
$Amount=$_POST['money'];






echo $FirstName;

echo "<hr style='border:solid 1px green;'/>";

echo $LastName;

echo "<hr style='border:solid 1px green;'/>";

echo $Email;

echo "<hr style='border:solid 1px green;'/>";

echo $Address;

echo "<hr style='border:solid 1px green;'/>";

echo $City;

echo "<hr style='border:solid 1px green;'/>";

echo $State;

echo "<hr style='border:solid 1px green;'/>";

echo $PostCode;

echo "<hr style='border:solid 1px green;'/>";

echo $Country;

echo "<hr style='border:solid 1px green;'/>";

echo $CardName;

echo "<hr style='border:solid 1px green;'/>";

echo $CardNumber;

echo "<hr style='border:solid 1px green;'/>";

echo $CardCVV;

echo "<hr style='border:solid 1px green;'/>";

echo $Amount;

echo "<hr style='border:solid 1px green;'/>";










$sql = "INSERT into contactsdonate (FirstName,LastName,Email,Address,City,State,PostCode,Country,CardName,CardNumber,CardCVV,Amount) VALUES('".$FirstName."','".$LastName."','".$Email."','".$Address."','".$City."','".$State."','".$PostCode."','".$Country."','".$CardName."','".$CardNumber."','".$CardCVV."','".$Amount."')";
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