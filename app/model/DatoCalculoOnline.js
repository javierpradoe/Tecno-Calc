Ext.define('TestApp.model.DatoCalculoOnline', {
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
      timeout: 3000, // How long to wait before going into "Offline" mode, in milliseconds.
      type: 'ajax',
      url: 'http://oxserv.dlinkddns.com/tecnofarma/data/insert.php',
	  reader: {
                type: 'json'
	  }
  }
  }
 
});

