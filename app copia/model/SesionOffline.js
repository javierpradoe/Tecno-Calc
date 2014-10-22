Ext.define('TestApp.model.SesionOffline', {
  extend: 'Ext.data.Model',
  config:{
  fields: [{
            name: 'IdUsuarioDta',
            type: 'int'
       		},
			{
            name: 'NombreDTA',
            type: 'string'
       		},
			{
            name: 'ApellidoDTA',
            type: 'string'
       		},
			{
            name: 'EmailDta',
            type: 'string'
       		},
			{
            name: 'IdUsuarioDta',
            type: 'int'
       		},
			{
            name: 'TokenDta',
            type: 'string'
       		}
    ],
    identifier:'uuid',
	isUnique: true,
    proxy: {
      type: 'localstorage',
      id  : 'sesionApp'
  	}
  }
});