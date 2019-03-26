<?php 
include 'connect.php';
include 'dbconfig.php';

$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$username = $obj['username'];
$password = $obj['password'];

if($obj['username']!=""){
        $object = new dbConfig();
        $object->login($username, $password);
}
?>