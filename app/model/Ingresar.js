Ext.define('TestApp.model.Ingresar', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
      'CorreoDta',
	  'PasswordDta'
  	],
	proxy: {
      timeout: 3000, // How long to wait before going into "Offline" mode, in milliseconds.
      type: 'ajax',
      url: 'http://oxserv.dlinkddns.com/tecnofarma/data/ingresar.php',
	  reader: {
                type: 'json'
	  },
	  listeners : {
			exception : function(proxy, response, operation) {
				if (operation) {
					alert(operation.error);
				} else {
					alert(operation.error);
				}
			}
		}
	
  }
  }
  
});

