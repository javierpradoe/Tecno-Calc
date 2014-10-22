Ext.define('TestApp.store.Datos', {
    extend: 'Ext.data.Store',
    
    config: {
     model: 'TestApp.model.DatoCalculoOffline',
     autoLoad: true,
     
     proxy: {
      //use sessionstorage if need to save data for that
      //specific session only
      type: 'localstorage',
      id  : 'calculo'
     },
	  autoLoad: true // Will load programmatically later
    }
});