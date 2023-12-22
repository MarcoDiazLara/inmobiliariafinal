<?php include('ser_cors.php'); ?>
<?php


  include('Conexion.php');
  $con = conectar();
  $respuesta = array();
  $p_Id_Socio = $_POST['p_Id_Socio'];
 

  
  $query = mysqli_query($con,"call sp_web_selecciona_asesor('$p_Id_Socio')");  

  if(mysqli_num_rows($query)==0){

    echo "201";

  }

  else{

  
    while ($row_tb=mysqli_fetch_assoc($query)){
      $respuesta[] = $row_tb;
    }

    header('Content-Type: application/json;');
    echo json_encode($respuesta);  

  }



?>