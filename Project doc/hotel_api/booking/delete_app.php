<?php
 include '../connection.php';
 $data = [];
 $id=$_GET['id'];
 $sql = "delete From appointment where id = $id";
 $query= $db->query($sql);

 if($query)
    $response = ['status' => 1];
else
    $response = ['status' => 0];

echo json_encode($response);