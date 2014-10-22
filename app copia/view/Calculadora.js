Ext.define('TestApp.view.Calculadora', {
	extend: 'Ext.form.Panel',
	xtype: 'calcpanel',
	alias: 'widget.calcPanel',
	requires: [
        'Ext.field.Select',
		'Ext.Img'
	],
    config: {
		layout: { type: 'vbox', align: 'stretch',pack: 'center', cls:'fondopanel'},padding: '10', 
		items: [
				{xtype: 'titlebar',docked: 'top', items: [
							{xtype: 'image', src: 'resources/css/images/icon_valores.svg', style:'margin-left: 1em; float:left; width:35px; height:35px;'},
							{xtype: 'label', html:'VALORES', style:'font-size: 1.3em; margin-top:0.1em; margin-left: 0.5em; width:100px;',width: '100%'},
                  			{xtype: 'button',text: 'Salir', id: 'logOut', action :'logOut',width: '100%', align: 'right', cls:'boton-accion', margin:'0 20px 0 0',style:'float: right;'}
              				]
				},						
				{title: 'Calculadora',items: [
				{xtype: 'panel',
								items:[
				{xtype: 'label', html:'', docked: 'top', id:'bienvenida', padding: '10', cls: 'x-fuente-klavica title'},
				{xtype: 'label', html:'<span style="color: #008a45;">&bull;</span> Use esta calculadora  para determinar el Síndromes Mielodisplasicos', docked: 'top', padding: '10',cls:'x-fuente-klavica'},
				{xtype: 'spacer', height: '1em'},
				{xtype: 'fieldset', id: 'formCalculadora',defaults:{ labelAlign: 'left',labelWidth: '35%',labelWrap: true},
								items:[
									{xtype: 'selectfield',label : 'Blastos M.O. (%)', name : 'Blastos',cls: 'x-fuente-klavica etiqueta',
										options: [
												{text: '< 5',  value: '0'},
												{text: '5 - 10',  value: '0.5'},
												{text: '11 - 20', value: '1.5'},
												{text: '21 - 30',  value: '2.0'}
												]
									},
									{xtype: 'selectfield',label : 'Cariotipo', name : 'Cariotipo', cls: 'x-fuente-klavica etiqueta',
										options: [
												{text: 'Bueno',  value: '0'},
												{text: 'Intermedio',  value: '0.5'},
												{text: 'Malo', value: '1'}
												]
									},
									{xtype: 'selectfield',label : 'Nº de Citopenias ', name : 'Citopenias', cls: 'x-fuente-klavica etiqueta',
										options: [
												{text: '0 - 1', value: '0'},
												{text: '2 - 3', value: '0.5'}
												]
									}
									
								]
							
					},
					{xtype: 'spacer', height: '1em'},
					{xtype: 'panel',layout: { type: 'hbox', align: 'start',pack: 'end'	},
								items:[
									
									{xtype: 'button',text: 'Calcular', id: 'calcularDatos', action :'calcularDatos', margin: 2, ui: 'round', width:'70%', cls: 'boton-accion'}
								]}
					
					]}
		]
		
		}]
               		
	}
        });