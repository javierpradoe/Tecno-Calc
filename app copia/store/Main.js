Ext.define('TestApp.store.Main', {
    extend: 'Ext.data.Store',
	alias: 'store.sesionApp',
 
    requires: [
        'TestApp.model.SesionOffline'
    ],
 
    config: {
        model: 'TestApp.model.SesionOffline',
        storeId: 'sesionApp',
        proxy: {
            type: 'localstorage'
        }
    }
});