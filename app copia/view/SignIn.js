Ext.define('TestApp.view.SignIn', {
    extend: 'Ext.form.Panel',
	xtype: 'signpanel',
	alias: 'widget.signPanel',
    requires: [
		'Ext.form.FieldSet',
		'Ext.field.Password',
		'Ext.TitleBar',
		'Ext.Img',
		'Ext.Label'
    ],

    config: {
		layout: { type: 'vbox', align: 'stretch'},cls:'fondopanel', items: [
		{xtype: 'titlebar',title: 'Registro',docked: 'top',items: [
                  			{xtype: 'button',text: 'Volver', id: 'volverLogin', action :'volverLogin',width: '80%', ui: 'back'}
              				]
				},					
				{xtype: 'panel',items: [
				{xtype: 'label', html:'<span style="color: #008a45;">&bull;</span> Para registrarte, ingresa los datos que se solicitan a continuación', docked: 'top', padding: '10',cls:'x-fuente-klavica'},
				{xtype: 'panel', padding: '10px', style:'width:95%; margin: 0 auto;',
		items: [
                    {xtype: 'fieldset', id: 'crearcuentaForm',
                        items: [
                            {xtype: 'textfield',placeHolder: 'Ingresa tu Nombre',id: 'Nombre',name: 'Nombre',required: true},
							{xtype: 'textfield',placeHolder: 'Ingresa tu Apellido',id: 'Apellido',name: 'Apellido',required: true},
							{xtype: 'textfield',placeHolder: 'correo@dominio.com',id: 'crearCorreo',name: 'crearCorreo',required: true},
                            {xtype: 'passwordfield',placeHolder: 'Ingresa tu contraseña',id: 'crearPassword',name: 'crearPassword',required: true},
	                        {xtype: 'passwordfield',placeHolder: 'Repite tu contraseña',id: 'crearPassword1',name: 'crearPassword1',required: true},

                        ]
                    },
					{xtype: 'button',id: 'enviarCuenta', action :'enviarCuenta',text: 'Crear Cuenta',cls:'boton-accion'}
                    
         ]}
	]}
	]}
	
});
