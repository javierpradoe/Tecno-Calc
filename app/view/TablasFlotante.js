Ext.define('TestApp.view.TablasFlotante', {
    extend: 'Ext.form.Panel',
    alias : 'widget.someForm',
	config: {
     
     // We give it a left and top property
     //to make it floating by default
        left: 0,
        top: 0,

        // Make it modal so you can click the mask to hide the overlay
        modal: true,
        hideOnMaskTap: true,

        // Set the width and height of the panel
        width: '90%',
        height: '90%',
     layout: {
            type: 'vbox', align: 'stretch', packed: 'center'
        },
        defaults: {
            margin: '0 0 5 0',
            labelWidth: '40%'
        },
        items: [
			{xtype: 'label',html: '[ Ingresar Tabla a mostrar ]', padding: '10'},
            {xtype: 'label', name: 'separador',html: '<hr>', padding: '0 10'},
			{xtype: 'label',html: '[ Ingresar Tabla a mostrar ]', padding: '10'},
			{xtype: 'label', name: 'separador',html: '<hr>', padding: '0 10'}
        ]
    }
  
});