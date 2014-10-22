<?php
 	require_once('Conexion.php');
	$conexion = new Conexion();
	
	$json = file_get_contents('php://input');
	$data=json_decode($json);  /* ahora en $data tenemos el objeto que nos enviaron x json, */
	
	$arr["Correo"]= $data->CorreoDta;
	$arr["Password"] = md5($data->PasswordDta);
		
	$datos["user"]= $arr["Correo"];
	$respuesta = new stdClass();
	$datos = new stdClass();
	$resp =  $conexion->login($arr,$datos);
		
	switch($resp){
	case 'ingresa':
		$respuesta->success = true;
		$respuesta->message = 'Registrado';
		$respuesta->IdUsuario = $datos->IdUsuario;
		$respuesta->Nombre = $datos->Nombre;
		$respuesta->Apellido = $datos->Apellido;
		$respuesta->Estado = $datos->Estado;
		$respuesta->Email = $datos->Email;
		$respuesta->Token = $datos->Token;
		
		echo json_encode($respuesta);
	break;
	case 'no ingresa':
		$respuesta->success = false;
		$respuesta->message = 'Revise su contraseña y password';
		echo json_encode($respuesta);
	break;
	case 'error':
		$respuesta->success = false;
		$respuesta->message = 'No pudo registrarse<br>intente nuevamente';
		echo json_encode($respuesta);
	break;
	}
	
	 
?>