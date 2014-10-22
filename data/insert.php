<?php
 	require_once('Conexion.php');
	$conexion = new Conexion();
	
	$json = file_get_contents('php://input');
	$data=json_decode($json);  /* ahora en $data tenemos el objeto que nos enviaron x json, */
	
	$arr["idUsuario"] = $data->idUsuarioDta;
	$arr["Blastos"]= $data->BlastosDta;
	$arr["Cariotipo"] = $data->CariotipoDta;
	$arr["Citopenias"] =$data->CitopeniasDta;
	$arr["sobrevida"] = $data->sobrevidaDta;
	$arr["evolucion_lma"]=$data->evolucion_lmaDta;
	$arr["grupo"]= $data->grupoDta;
	$arr["score"]=$data->scoreDta;
	
	$respuesta = new stdClass();
	$respuesta->resultado = "true";
	if($conexion->insertarDato($arr)){
		json_encode($respuesta);
	}else{
		json_encode($respuesta);
	}
	
?>