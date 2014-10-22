Ext.define('TestApp.model.GetDatosOnline', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
	  'idUsuarioDta',
      'BlastosDta',
	  'CariotipoDta',
	  'CitopeniasDta',
	  'sobrevidaDta',
	  'evolucion_lmaDta',
	  'grupoDta',
	  'scoreDta'
    ],
	 proxy: {
			  id: 'datosCalculados',
			  timeout: 3000, // How long to wait before going into "Offline" mode, in milliseconds.
			  type: 'ajax',
			  url: 'http://oxserv.dlinkddns.com/tecnofarma/data/getData.php',
			  reader: {
						type: 'json'
			  },
			  extraParams: {
					id: sessionStorage.getItem('idUsuario')
			  }	  
  		},
	autoload:true,
	setId: function (id) {
        this.itemId = id;
    }
  }
 
});

