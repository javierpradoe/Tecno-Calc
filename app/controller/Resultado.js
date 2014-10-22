Ext.define('TestApp.controller.Resultado', {
	extend: 'Ext.app.Controller',
	requires: [
               'TestApp.view.TablasFlotante'
	],
	config: {
		control: {
            '#volverCalcular': {
                tap: 'onVolverCalcular'
            },
			'#verTabla': {
                tap: 'onVerTabla'
            }
        }

        
    },

    onVolverCalcular: function(button) {
		
		var calcPanel = Ext.Viewport.down('principalPanel');
		Ext.Viewport.animateActiveItem(calcPanel, { type: 'slide', direction: 'right' })
		calcPanel.show();	
	},
	
	onVerTabla: function(button){
		var someForm = Ext.Viewport.down('someForm');
		if(!someForm){
			someForm = Ext.widget('someForm');
		} 
		someForm.reset();
		someForm.showBy(button);	
		
	}

});

