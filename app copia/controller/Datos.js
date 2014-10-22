Ext.define('TestApp.controller.Datos', {
	extend: 'Ext.app.Controller',
	
	requires: [
			'Ext.device.Connection',
			//'TestApp.store.DatoLoginStore',
			'TestApp.model.GetDatosOffline',
			'TestApp.model.GetDatosOnline'
	],
	
	config: {
		control: {
			
		}
        
    },
	init : function () {
		if(sessionStorage.getItem('idUsuario')!=null){
			this.cargaDatos();
			
		}else{
				console.log("Usuario no logeado");
	
		}
	},
	cargaDatos : function (){
		if (Ext.device.Connection.isOnline()) {
						onlineStore = Ext.create('Ext.data.Store', { 
							model: "TestApp.model.GetDatosOnline"
						}),
						me = this;
						onlineStore.load();
						
						onlineStore.sync();
						//console.log(onlineStore);
		
						Ext.getCmp('datosMedico').setStore(onlineStore);
			}else{
						console.log("offline");
			}
	}
});

