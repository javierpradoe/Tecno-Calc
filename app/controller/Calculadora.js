Ext.define('TestApp.controller.Calculadora', {
	extend: 'Ext.app.Controller',
	
	requires: [
			'Ext.device.Connection',
               'TestApp.view.Resultado',
			   'TestApp.store.DatoCalculoStore'
	],
	config: {
		control: {
            '#calcularDatos': {
                tap: 'onCalcFormTap'
            },
			'#logOut':{
				tap: 'onLogOut'
			}
        }

        
    },
	onLogOut: function(button){
		
		/*
		localStore = Ext.getStore('Sesion');
	   	localStore.removeAll();
		*/
		var loginPanel = Ext.Viewport.down('loginPanel');
		Ext.Viewport.animateActiveItem(loginPanel, { type: 'slide', direction: 'right' });
		loginPanel.show();
	},
    onCalcFormTap: function(button) {
		
        var errorString = '',		
		form = button.up('formpanel');
		fields = form.query("field");
		values = form.getValues();
		
		this.doCalculadora(button, values);
		
							
	},
	
	doCalculadora: function(button,values){
		
		/* Calculo */
		Blastos = parseFloat(values["Blastos"]);
		Cariotipo = parseFloat(values["Cariotipo"]);
		Citopenias = parseFloat(values["Citopenias"]);
		
		score = Blastos+Cariotipo+Citopenias;

		if (score == 0) {
			sobrevida = 5.7; evolucion_lma = 9.4; grupo = "Bajo";
		} else if (score >= 0.5 && score <= 1.0) {
			sobrevida = 3.5; evolucion_lma = 3.3; grupo = "Intermedio 1";
		} else if (score >= 1.5 && score <= 2.0) {
			sobrevida = 1.2; evolucion_lma = 1.1; grupo = "Intermedio 2";
		} else if (score >= 2.5) {
			sobrevida = 0.4; evolucion_lma = 0.2; grupo = "Alto";
		}
		
		texto = "<b>El puntaje calculado es: "+score+"</b>.<br> Esto representa un riesgo <b>"+grupo+" (Grupo)</b> MDS—asociado con una media de <b>sobrevivencia de "+sobrevida+"</b>.<br> En este subgrupo de pacientes, ¼ evolucionará a una leucemia mieloide aguda en <b>"+evolucion_lma+"</b> años.";
		
		/* Fin Calculo */
		
		
		/* Salvo los calculos */
		
		if (Ext.device.Connection.isOnline()) {
 			//online
			var onlineStore = Ext.create('TestApp.model.DatoCalculoOnline', {
					idUsuarioDta: sessionStorage.getItem('idUsuario'),
					BlastosDta: Blastos,
					CariotipoDta:Cariotipo,
					CitopeniasDta:Citopenias,
					sobrevidaDta: sobrevida,
					evolucion_lmaDta:evolucion_lma,
					grupoDta:grupo,
					scoreDta:score
				
				});
			onlineStore.save({
				scope: this,
				success: this.proxySuccess,
				failure: this.proxyFailure,
				callback: this.proxyCallback
			});
			
			
			
			// offline - localstorage
			var offlineStore = Ext.create('TestApp.model.DatoCalculoOffline',{
			idUsuarioDta: sessionStorage.getItem('idUsuario'),
		   	BlastosDta: Blastos,
		   	CariotipoDta:Cariotipo,
		   	CitopeniasDta:Citopenias,
		   	sobrevidaDta: sobrevida,
		   	evolucion_lmaDta:evolucion_lma,
		   	grupoDta:grupo,
		   	scoreDta: score
		 	});
	  		offlineStore.save();
			
      			
			
		} else {
		 	
			// offline - localstorage
			var offlineStore = Ext.create('TestApp.model.DatoCalculoOffline',{
		   	BlastosDta: Blastos,
		   	CariotipoDta:Cariotipo,
		   	CitopeniasDta:Citopenias,
		   	sobrevidaDta: sobrevida,
		   	evolucion_lmaDta:evolucion_lma,
		   	grupoDta:grupo,
		   	scoreDta: score
		 	});
	  		offlineStore.save();
			
		}

		
		
  
		
	  
	  
		/* Muestro los datos en la vista resultados */
		
		Ext.getCmp('result_puntaje').setValue(score);
		Ext.getCmp('result_categoria').setValue(grupo);
		
		Ext.getCmp('pronost_puntaje').setValue(sobrevida);
		Ext.getCmp('pronost_categoria').setValue(evolucion_lma);
		Ext.getCmp('leyenda_resultado').setHtml(texto);
		
		
	},
	proxySuccess: function (record, operation) {
		console.log("success");
		var principalPanel = Ext.Viewport.down('principalPanel');
		principalPanel.setActiveItem(1);
	},
	proxyFailure: function (record, operation) {
		console.log("fail");
	},
	proxyCallback: function (record, operation) {
		console.log("callback");
	}

});

