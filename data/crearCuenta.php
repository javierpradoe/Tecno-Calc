<?php
 	require_once('Conexion.php');
	$conexion = new Conexion();
	
	$json = file_get_contents('php://input');
	$data=json_decode($json);  /* ahora en $data tenemos el objeto que nos enviaron x json, */
	
	$arr["Nombre"]= $data->NombreDta;
	$arr["Apellido"] = $data->ApellidoDta;
	$arr["Correo"] = $data->crearCorreoDta;
	$arr["Password"] = $data->crearPasswordDta;
	
	$respuesta = new stdClass();
	$resp =  $conexion->crearCuenta($arr);
	//echo $conexion->crearCuenta($arr);
	//echo $respuesta->resultado;
	
	switch($resp){
	case 'agrega':
		$respuesta->success = true;
		$respuesta->message = 'Se agregó el registro';
		echo json_encode($respuesta);
	break;
	case 'existe':
		$respuesta->success = false;
		$respuesta->message = 'Ya existe el correo';
		echo json_encode($respuesta);
	break;
	case 'error':
		$respuesta->success = false;
		$respuesta->message = 'Error registro';
		echo json_encode($respuesta);
	break;
	}
	
	 
?>