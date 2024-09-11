<?php
    include '../connection.php';
    $data = [];

    $sql = 'SELECT * from vehicle order by id ASC';
    $result= $db->query($sql);

    if($result->num_rows > 0){
        while($row = $result->fetch_object()){
            $data[]= $row;
        }
        echo json_encode(array("status" => 1, "data"=>$data));
    }else{
        echo json_encode(array("staus" => 0, "data"=>$data));
    }