Ext.define('TestApp.controller.Main', {
	extend: 'Ext.app.Controller',
	
	requires: [
			'Ext.device.Connection',
            'TestApp.view.Index',
			'TestApp.view.SignIn',
			'TestApp.model.Login',
			'TestApp.store.Sesion',
			'TestApp.model.Ingresar',
			'TestApp.model.SesionOffline'
	],
	config: {
		control: {
			'#crearCuenta' :{
				tap : 'onCrearCuenta'
			},
            '#logInButton': {
                tap: 'onLoginTap'
            },
			'#recupPass':{
				tap: 'onPassTap'
			}
		}
        
    },
	init : function () {
		// obtengo ID_USUARIO LOCAL
    	
		localStore = Ext.create('Ext.data.Store', { 
        model: "TestApp.model.SesionOffline"
		}),
		me = this;
		localStore.load();
		
		sessionStorage.setItem('idLocalStorage', localStore.getId());
		if(localStore._data.length > 0){
			var existe = true;
		}else{
			var existe = false;
		}
		//Si ya existe session local ingreso calculadora
		if(existe){
			modelRecord = localStore.getData().getAt(0);
			modelRecord = modelRecord._data;
			valores = modelRecord;
			
			sessionStorage.setItem('idUsuario', valores.IdUsuarioDta);

			console.log(valores);
			

			var principalPanel = Ext.Viewport.down('principalPanel');

			if(!principalPanel){						
				principalPanel = Ext.widget('principalPanel');	
			}
			Ext.getCmp('bienvenida').setHtml("Hola! "+valores.NombreDTA+" "+valores.ApellidoDTA);	
			Ext.Viewport.animateActiveItem(principalPanel, { type: 'slide', direction: 'left' });	
			principalPanel.show();
		}else{
		//Si no voy al login
		}
		
	},
	onPassTap: function (button, e){
		alert("Pass");
	},
	onCrearCuenta: function (button, e){

		// Cargo forma de crear login		
		var signPanel = Ext.Viewport.down('signPanel');
	
		if(!signPanel){						
			signPanel = Ext.widget('signPanel');
					
		}
		Ext.Viewport.animateActiveItem(signPanel, { type: 'slide', direction: 'left' });	
		signPanel.show();
		
	},
    onLoginTap: function(button) {
			
		var errorString = '',		
		form = button.up('formpanel');
		fields = form.query("field");
		values = form.getValues();
		
		/* Validacion formulario */
		var model = Ext.create("TestApp.model.Login", values);
		var errors = model.validate();
		if (!errors.isValid()) {
			// loop through validation errors and generate a message to the user
				errors.each(function (errorObj){
					errorString += errorObj.getField() + " " + errorObj.getMessage() + " ";
					var s = Ext.String.format('field[name={0}]',errorObj.getField());
					form.down(s).addCls('invalidField');
				});
			Ext.Msg.alert('Revise sus datos', errorString);
		}else{
			// Envio el dato
			
			if (Ext.device.Connection.isOnline()) {
					//online
					//Datos
					Correo = values["Correo"];					
					Password =values["Password"];
		
					var onlineStore = Ext.create('TestApp.model.Ingresar', {
							CorreoDta: Correo,
							PasswordDta: Password
						})
					onlineStore.save({
						scope: this,
						success: this.proxySuccess,
						failure: this.proxyFailure,
						callback: this.proxyCallback
					})
				}else{
					
					Ext.Msg.alert('Revise su conexión de internet');
					
				}
				
		}	
	},
	proxySuccess: function (record, operation) {
		
		var estado = (operation._response.status);
		
		switch(estado){
			case 204:
				Ext.Msg.alert('Error Conexion');
			break;
			default:
			
				Ext.Msg.alert(operation._request._scope._reader.rawData.message);
				var valores = operation._request._scope._reader.rawData;
				sessionStorage.setItem('idUsuario', valores.IdUsuario);
				
				//Creo sesionlocal del usuario
				
				store = Ext.getStore(sessionStorage.getItem('idLocalStorage'));
				
				
				store.add({
									IdUsuarioDTA: valores.IdUsuario,
									NombreDTA: valores.Nombre,
									ApellidoDTA: valores.Apellido,
									EmailDta: valores.Email,
									IdUsuarioDta: valores.IdUsuario,
									TokenDta: valores.Token
				})
				
				store.sync();
				
				
				var localStorage = Ext.create('TestApp.model.Sesion', {
									IdUsuarioDTA: valores.IdUsuario,
									NombreDTA: valores.Nombre,
									ApellidoDTA: valores.Apellido,
									EmailDta: valores.Email,
									IdUsuarioDta: valores.IdUsuario,
									TokenDta: valores.Token
								})
				localStorage.save();
				
								
				Ext.getCmp('Correo').reset();
				Ext.getCmp('Password').reset();
				
				var principalPanel = Ext.Viewport.down('principalPanel');
					
				if(!principalPanel){						
					principalPanel = Ext.widget('principalPanel');	
					}
				Ext.getCmp('bienvenida').setHtml("Hola! "+valores.Nombre+" "+valores.Apellido);	
				Ext.Viewport.animateActiveItem(principalPanel, { type: 'slide', direction: 'left' })
				principalPanel.show();
		
			break;
		}
		

	},
	proxyFailure: function (record, operation) {
		Ext.Msg.alert('Revise sus datos', operation._request._scope._reader.rawData.message);
	},
	proxyCallback: function (record, operation) {
		console.log("callback");
		//Actualizo datos en vista datos
				//TestApp.app.getController('Datos').init();
	}

});

