<?php

class Conexion{
	
	public $conexion;

	function __construct() {
		$this->conexion = new mysqli("localhost", "root", "A.1101adm", "astrazeneca");
		$this->conexion->set_charset("utf8");
		$this->conexion->query("SET NAMES 'utf8'");
	}
	
?>