Ext.define('TestApp.store.DatoCalculoStore', {
  extend:'Ext.data.Store',
  config:{
    model:'TestApp.model.DatoCalculoOnline',
    proxy: {
      timeout: 3000, // How long to wait before going into "Offline" mode, in milliseconds.
      type: 'ajax',
      url: 'http://oxserv.dlinkddns.com/tecnofarma/data/insert.php',
	  reader:{
	  	type:'json'
	  }
    },
    autoLoad: false // Will load programmatically later
  }
});