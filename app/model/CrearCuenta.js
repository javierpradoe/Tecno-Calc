Ext.define('TestApp.model.CrearCuenta', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
      'NombreDta',
	  'ApellidoDta',
	  'crearCorreoDta',
	  'crearPasswordDta'
    ],
	proxy: {
      timeout: 3000, // How long to wait before going into "Offline" mode, in milliseconds.
      type: 'ajax',
      url: 'http://oxserv.dlinkddns.com/tecnofarma/data/crearCuenta.php',
	  reader: {
                type: 'json'
	  }
  	}
  }
  
});

