Ext.define('TestApp.store.DatoCalcuo', {
  extend:'Ext.data.Store',
  config:{
    model:'TestApp.model.DatoCalculoOnline',
    proxy: {
      timeout: 3000, // How long to wait before going into "Offline" mode, in milliseconds.
      type: 'ajax',
      url: 'http://example.org/data/news.json' // Sample URL that simulates offline mode. Example.org does not allow cross-domain requests so this will always fail
    },
    autoLoad: false // Will load programmatically later
  }
});