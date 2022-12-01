<?php
$email = $_POST['email'];
$password = $_POST['password'];

// database cooncetion
// work

    &conn = new mysqli('localhost','root','','log');
    if($conn->connect_error){
        die('connection failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepapre("insert into registration(email,password)
        values(?,?)");
        $stmt->bind_param("ss",$email,$password);
        $stmt->execute();
        echo "registration successfully";
        $stmt->close();
        $conn->close();
    }
?>