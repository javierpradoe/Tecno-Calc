Ext.define('TestApp.model.GetDatosOffline', {
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
      type: 'localstorage',
      id  : 'datosCalculados'
    }
  }
});
