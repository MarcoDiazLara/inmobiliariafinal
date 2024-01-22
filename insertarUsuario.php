<?php header('Access-Control-Allow-Origin: *'); ?>
<?php

//p_nombres,p_a_paterno,p_a_materno,p_nom_usuario,p_contrasena,p_correo,p_tel_fijo,p_cel

if(isset($_POST['p_nombres']) && isset($_POST['p_a_paterno']) && isset($_POST['p_a_materno']) && isset($_POST['p_nom_usuario'])
	&& isset($_POST['p_contrasena']) && isset($_POST['p_correo']) && isset($_POST['p_tel_fijo']) && isset($_POST['p_cel'])){

    include('Conexion.php');
    $con = conectar();
    $response = array();
	
	$nombres = $_POST["p_nombres"];
	$apPaterno = $_POST["p_a_paterno"];
	$apMaterno = $_POST["p_a_materno"];
	$nomUsuario = $_POST["p_nom_usuario"];
	$contrasena = $_POST["p_contrasena"];
    $correo_Electronico = $_POST["p_correo"];
	$telFijo = $_POST["p_tel_fijo"];
	$telCel = $_POST["p_cel"];
	
	
	$queryV = mysqli_query($con, "CALL sp_web_consultarUsuario('$nomUsuario')");
	$row = mysqli_fetch_row($queryV);
	if($row!= ''){
	// echo "El nombre de usuario ya existe, por favor escoge otro.";
	 $response = "3";
	 }else{
	mysqli_next_result($con);
	 
      // '$nombres','$apPaterno','$apMaterno','$nomUsuario','$contrasena','$correo_Electronico','$telFijo','$telCel'
	  $query = mysqli_query($con, "CALL sp_web_insertarUsuario('$nomUsuario','$contrasena')");
	  //console.log($query);
       
        if($query){
		  mysqli_next_result($con);
			$id = mysqli_query($con,"SELECT id_Usuario FROM tbl_usuario WHERE Nombre_Usuario = '$nomUsuario'")or die(mysqli_errno());
			
			$fila = mysqli_fetch_array ($id);
			$idreal = $fila['id_Usuario'];
			mysqli_next_result($con);
			$query2 = mysqli_query($con,"Call sp_web_insertarInfoUsuario('$nombres','$apPaterno','$apMaterno','$correo_Electronico','$telFijo','$telCel','$idreal')")or die(mysqli_errno());
			
			if($query2){
				$response = "1";
			}else{
				$response = "2";
			}
		}
		else{
		    $response = "0";
		
		}
		
	  
	 }

    header('Content-Type: application/json');
    echo json_encode($response);
	
	$con->close();
}
	?>