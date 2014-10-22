Ext.define('TestApp.store.Sesion', {
    extend: 'Ext.data.Store',
    config: {
        model: 'TestApp.model.Sesion',
        storeId: 'sesionAppStore',
        proxy: {
            type: 'localstorage',
            id: 'sesionApp'
        }
    }
});