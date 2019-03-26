<?php
include 'connect.php';
include 'dbconfig.php';

$json = file_get_contents('php://input');

$obj = json_decode($json,true);

$username = $obj['username'];
$password = $obj['password'];
$firstName = $obj['firstName'];
$lastName = $obj['lastName'];

$object = new dbConfig();
$object->createUser($username, $password, $firstName, $lastName);        
   
?>
