Ext.define('TestApp.model.Sesion', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
	  'IdUsuarioDta',
      'NombreDTA',
	  'ApellidoDTA',
	  'EmailDta',
	  'IdUsuarioDta',
	  'TokenDta'
    ],
    identifier:'uuid',
	isUnique: true,
    proxy: {
      type: 'localstorage',
      id  : 'sesionApp' 
    }
  }
});