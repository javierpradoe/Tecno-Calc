<?php
 	require_once('Conexion.php');
	$conexion = new Conexion();
		
	$idUsuario = $_GET['id'];
	
	$respuesta = new stdClass();
	$respuesta->resultado = "true";
	$respuesta = $conexion->getDatosCalculados($idUsuario);
	if($respuesta != false){
		echo json_encode($respuesta);
	}else{
		echo json_encode($respuesta);
	}	
?>