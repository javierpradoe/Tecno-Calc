<?php

class Conexion{
	
	public $conexion;
	public $resultado;

	function __construct() {
		$this->conexion = new mysqli("localhost", "root", "A.1101adm", "tecnofarma-app");
		$this->conexion->set_charset("utf8");
		$this->conexion->query("SET NAMES 'utf8'");
	}
	
	public function insertarDato($arr){
		
		$sql = "INSERT INTO DATOS (ID_USUARIO,BLASTOS,CARIOTIPO,CITOPENIAS, SOBREVIDA, EVOLUCION_LMA, GRUPO, SCORE) VALUES (?,?,?,?,?,?,?,?)";
		$query = $this->conexion->prepare($sql);
		$query->bind_param('idddddsd',$arr["idUsuario"],$arr["Blastos"],$arr["Cariotipo"],$arr["Citopenias"],$arr["sobrevida"],$arr["evolucion_lma"],$arr["grupo"],$arr["score"]);			
			if($query->execute()){
				$this->conexion->close();
				return true;
			}else{
				printf("Error: %s.\n", $query->error);
				$this->conexion->close();
				return false;
			}
	}
	
	public function getDatosCalculados($idUsuario){
		$sql = "SELECT ID_USUARIO, BLASTOS,CARIOTIPO,CITOPENIAS,SOBREVIDA,EVOLUCION_LMA,GRUPO,SCORE FROM DATOS WHERE ID_USUARIO = ?";
		$query = $this->conexion->prepare($sql);
		$query->bind_param('i',$idUsuario);	
		if($query->execute()){
				
			$query->store_result();
			$numrows = $query->num_rows;
			if($numrows != 0){
				$indice = 0;
				$datosCalculados = array();
				$query->bind_result($col0,$col1,$col2,$col3,$col4,$col5,$col6,$col7);
					while ($query->fetch()){
							$datosCalculados[$indice]["idUsuarioDta"] = $col0;
							$datosCalculados[$indice]["BlastosDta"] = $col1;
							$datosCalculados[$indice]["CariotipoDta"] = $col2;
							$datosCalculados[$indice]["CitopeniasDta"] = $col3;
							$datosCalculados[$indice]["sobrevidaDta"] = $col4;
							$datosCalculados[$indice]["evolucion_lmaDta"] = $col5;
							$datosCalculados[$indice]["grupoDta"] = $col6;
							$datosCalculados[$indice]["scoreDta"] = $col7;
							$indice++;
					}
				return $datosCalculados;
				
			}else{
				printf("Error2: %s.\n", $query->error);
				$this->conexion->close();
				return false;
			}
				
		}else{
				printf("Error1: %s.\n", $query->error);
				$this->conexion->close();
				return false;
		}
	}
	public function crearCuenta($arr){
		
		// busco usuario existente
		
		$sql1 = "SELECT EMAIL FROM USUARIO WHERE EMAIL = ?";
		$query1 = $this->conexion->prepare($sql1);
		
		$sql2= "INSERT INTO USUARIO (NOMBRE,APELLIDO,EMAIL,PASSWORD, FECHA,HORA, ESTADO) VALUES (?,?,?,?,?,?,?)";
		$query2 = $this->conexion->prepare($sql2);
			
		$query1->bind_param('s',$arr["Correo"]);	
			if($query1->execute()){
				$query1->store_result();
				$numrows = $query1->num_rows;
				if($numrows != 0){
					$query1->bind_result($col0);
					$query1->fetch();
					if($col0 == $arr["Correo"]){
						$existe = true;
					}else{
						$existe = false;
					}
				}else{
					$existe = false;
				}				
			}else{
				printf("Error: %s.\n", $query1->error);
				$this->conexion->close();
				return 'error';
			}
			
		if(!$existe){
			$pass = md5($arr["crearPassword"]);
			$fecha = date('Y-m-d');
			$hora = date("H:i:s");
			$estado = 1; // activo
			$query2->bind_param('ssssssi',$arr["Nombre"],$arr["Apellido"],$arr["Correo"],$pass, $fecha,$hora, $estado);			
				if($query2->execute()){
					$this->conexion->close();
					return 'agrega';
				}else{
					printf("Error: %s.\n", $query2->error);
					$this->conexion->close();
					return 'error';
				}
		}else{
			return 'existe';
		}
	}
	
	public function login($arr,$datos){
		$sql1 = "SELECT ID_USUARIO, NOMBRE, APELLIDO, ESTADO  FROM USUARIO WHERE EMAIL = ? AND PASSWORD = ?";
		$query1 = $this->conexion->prepare($sql1);
		$pass = $arr["Password"];
		
		$query1->bind_param('ss',$arr["Correo"],$pass);	
			if($query1->execute()){
				$query1->store_result();
				$numrows = $query1->num_rows;
				if($numrows != 0){
					$query1->bind_result($col0,$col1,$col2,$col3);
					$query1->fetch();
					
					$datos->IdUsuario = $col0;
					$datos->Nombre = $col1;
					$datos->Apellido = $col2;
					$datos->Estado = $col3;
					$datos->Email = $arr["Correo"];
					$datos->Token = $arr["Password"];
					
					return 'ingresa';
				}else{
					return 'no ingresa';
				}
			}else{
				return 'error';
			}
		
	}
}
?>