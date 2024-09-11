<?php
    include '../connection.php';
    $data = json_decode(file_get_contents("php://input"));

if($data){
    if($data->id){
        $sql = "update vehicle set "; 
    }
    else{
        $sql = "insert into vehicle set ";
    }
    foreach($data as $k=>$v){
        $v = $db->real_escape_string($v);
        $sql.= "$k='$v',"; // get data and set query
    }
    $sql = rtrim($sql,",");  // remove last , from query
    if($data->id){
        $sql.="where id='".$data->id."' ";
    }
    $result= $db->query($sql);
    if($result)
        echo json_encode(array("status" =>1));
    else
        echo json_encode(array("status" =>0));
}