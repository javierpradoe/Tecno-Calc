Ext.define('TestApp.controller.SignIn', {
	extend: 'Ext.app.Controller',
	config: {
		control: {
            '#volverLogin': {
                tap: 'onVolverLogin'
            },
			'#enviarCuenta': {
				tap: 'onEnviarCuenta'
			}
        }
    },

    onVolverLogin: function(button) {
		
		var loginPanel = Ext.Viewport.down('loginPanel');
		Ext.Viewport.animateActiveItem(loginPanel, { type: 'slide', direction: 'right' })
		loginPanel.show();	
	},
	onEnviarCuenta: function(button){
		
		
		var errorString = '',		
		form = button.up('formpanel');
		fields = form.query("field");
		values = form.getValues();
		
		/* Validacion formulario */
		var model = Ext.create("TestApp.model.SignIn", values);
		var errors = model.validate();
		if (!errors.isValid()) {
			// loop through validation errors and generate a message to the user
				errors.each(function (errorObj){
					errorString += errorObj.getMessage() + " ";
					var s = Ext.String.format('field[name={0}]',errorObj.getField());
					form.down(s).addCls('invalidField');
				});
			Ext.Msg.alert('Revise sus datos', errorString);
		}else{
			// Reviso password == password1
		
			var pass = Ext.getCmp('crearPassword').getValue(); 
			var pass1 = Ext.getCmp('crearPassword1').getValue(); 
			
			if(pass == pass1){
				//Envio dato para creación cuenta
				/* Salvo los calculos */
		
				if (Ext.device.Connection.isOnline()) {
					//online
					//Datos
					Nombre = values["Nombre"];					
					Apellido =values["Apellido"];
					Correo = values["crearCorreo"];
					Password = values["crearPassword"];
		
					var onlineStore = Ext.create('TestApp.model.CrearCuenta', {
							NombreDta: Nombre,
							ApellidoDta: Apellido,
							crearCorreoDta:Correo,
							crearPasswordDta:Password	
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

				
				//Fin envío datos
				
			}else{
				Ext.Msg.alert('La contraseña no corresponde');
			}
		}
		
	},
	proxySuccess: function (record, operation) {
		
		//Ext.Msg.alert("Sucess",operation.request.scope.reader.jsonData["resultado"]);
		Ext.Msg.alert(operation._request._scope._reader.rawData.message);
		
		//creo registro elimino los valores en los campos
		Ext.getCmp('Nombre').reset();
		Ext.getCmp('Apellido').reset();
		Ext.getCmp('crearCorreo').reset();
		Ext.getCmp('crearPassword').reset();
		Ext.getCmp('crearPassword1').reset();
		
		var loginPanel = Ext.Viewport.down('loginPanel');
		Ext.Viewport.animateActiveItem(loginPanel, { type: 'slide', direction: 'right' });
		loginPanel.show();
		
	},
	proxyFailure: function (record, operation) {
		Ext.Msg.alert(operation._request._scope._reader.rawData.message);
		
	},
	proxyCallback: function (record, operation) {
		
		console.log("callback");
	}
});

