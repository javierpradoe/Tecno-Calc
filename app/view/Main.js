Ext.define('TestApp.view.Main', {
    extend: 'Ext.form.Panel',
	alias: 'widget.loginPanel',
    xtype: 'main',
	id: 'VistaLogin',
    requires: [
		'Ext.form.FieldSet',
		'Ext.field.Password',
		'Ext.TitleBar',
		'Ext.Img',
		'Ext.Label'
    ],
    config: {
		layout: {type: 'vbox', align: 'stretch'},cls:'fondo-login', scrollable: {direction: 'vertical', directionLock: true}, items: [	
				{
                        xtype: 'image',
                        src: Ext.Viewport.getOrientation() == 'portrait' ? 'resources/css/images/cabecera_640x502.png' : 'resources/css/images/cabecera_320x251.png',			
						mode : 'img',
						height: Ext.Viewport.getWindowHeight()-Ext.Viewport.getWindowHeight()*0.5,
						//width : Ext.Viewport.getWindowWidth()-Ext.Viewport.getWindowWidth()*0.75
						style: 'text-align:center'
				},				
				{title: 'Ingresar',items: [
				{xtype: 'panel', padding: '10px', height:'50%',
		items: [
			
                    {
                        xtype: 'label',
                        html: 'Login failed. Please enter the correct credentials.',
                        id: 'signInFailedLabel',
                        hidden: true,
                        hideAnimation: 'fadeOut',
                        showAnimation: 'fadeIn',
                        style: 'color:#990000;margin:5px 0px;'
                    },
					{xtype: 'spacer',height: '2em'},
                    {xtype: 'fieldset', id: 'loginForm', title: 'Ingresa', style:'color:#fff;',cls:'titulo-formulario', style:'width:80%; margin: 0 auto;',
                        items: [
                            {xtype: 'textfield',placeHolder: 'Email',id: 'Correo',name: 'Correo',required: true,cls:'campo-texto'},
                            {xtype: 'passwordfield',placeHolder: 'Password',id: 'Password',name: 'Password',required: true, cls:'campo-texto'},
							{xtype: 'button',id: 'logInButton', ui: 'action', action :'enviarLogin',text: 'Entrar',cls:'boton-amarillo'}
                        ]
                    },
                    
					{xtype: 'spacer',height: '1em'},
					{xtype: 'panel', padding: '10px', layout: {type: 'hbox', align: 'start',pack: 'end'}, style: 'width:100%',
						items: [
						{xtype: 'panel', padding: '0 0 0 10px', layout: {type: 'vbox', align: 'start',pack: 'end'}, style:'width:50%; text-align: center',
							items: [
								{xtype: 'label', html:'¿Olvidaste tu contraseña?', style: 'font-size: 0.8em; color:#fff;margin:5px 0px; font-weight: lighter;'},
								{xtype: 'button',id: 'recupPass', ui: 'action', action :'onPassTap',text: 'Recuperar contraseña',cls:'boton-amarillo', style:'font-size: 0.8em'}
							]},
						{xtype: 'panel', padding: '0 0 0 10px', layout: {type: 'vbox', align: 'start',pack: 'end'}, style:'width:50%; text-align: center',
							items: [
								{xtype: 'label', html:'¿Aún no creas tu usuario?', style: 'font-size: 0.8em; color:#fff;margin:5px 0px;font-weight: lighter;'},
								
								/*listeners : {
									element : 'element',
									tap : function(e, t) {
									this.fireEvent('tap', this, e, t);
														}
									}
								},*/
								
								{xtype: 'button',id: 'crearCuenta', ui: 'action', action :'enviarLogin',text: 'Crear Usuario',cls:'boton-amarillo', style:'font-size: 0.8em'}
							]}
					]}
			]}
		]}
	]}
});
