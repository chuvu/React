<?php
session_start();
class dbConfig extends dbh{
     
    public function login($username, $password)
    {
        try {
            $result0 = $this->connect()->prepare("SELECT * FROM `users` WHERE username = :username");
            $result0->bindParam(":username", $username);
            $result0->execute();
            $row_count = $result0->rowCount();
            if ($row_count > 0){
                while($row = $result0->fetch(PDO::FETCH_ASSOC)){  
                    $DBpass = $row['password'];
                    //$Verify = password_verify($password, $DBpass);
                    if(password_verify($password, $row['password'])){
                        $query = $this->connect()->prepare("SELECT * FROM users WHERE username=:username");
                        $query->bindParam(":username", $username);
                        $query->execute();
                        if ($query->rowCount() > 0) {
                            $result1 = $query->fetch(PDO::FETCH_OBJ);                    
                            echo json_encode('ok');
                        } else {
                            echo json_encode('Login failed');
                            return false;
                            }
                        }else{
                            echo json_encode('Wrong Password');
                        }
                    }
            }else{
                echo json_encode('Username does not exist');
            }
            } catch (PDOException $e) {
                exit($e->getMessage());
            }
        }   
    
    public function createUser($username,$password, $firstName, $lastName){ 
        try{
            //future features
            //allow only letters in first name and username
            //use password hash next time
            $result = $this->connect()->prepare("SELECT count(*) FROM `users` WHERE username = :username");
            $result->bindParam(":username", $username);
            $result->execute();
            $number_of_rows = $result->fetchColumn(); 
            if($number_of_rows > 0) {
                echo json_encode("Username already taken");
            }
            else
            {
                $RegStmt = $this->connect()->prepare("INSERT INTO users(username,password,firstName,lastName) VALUES (:username,:password,:firstName,:lastName)");
                $RegStmt->bindparam(":username",$username);
                $encpassword = password_hash($password, PASSWORD_DEFAULT);
                $RegStmt->bindparam(":password",$encpassword);
                $RegStmt->bindparam(":firstName",$firstName);
                $RegStmt->bindparam(":lastName",$lastName);
                $RegStmt->execute();
                $this->success = true;
                echo json_encode('User Registered Successfully'); 
            }           
        } catch (PDOException $ex){
            echo $ex->getMessage();
            $this->success = false;
            return false;
            echo "Sign up Failed!";
        }
    }
    
}//end of class
?>