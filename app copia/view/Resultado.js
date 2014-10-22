Ext.define('TestApp.view.Resultado', {
    extend: 'Ext.form.Panel',
	xtype: 'resultadocalcpanel',
	alias: 'widget.resultPanel',
    config: {
		layout: { type: 'vbox', pack: 'center'},
        items: [
				{xtype: 'titlebar',docked: 'top',cls: 'x-fuente-klavica', 
					items: [
							{xtype: 'image', src: 'resources/css/images/icon_resultados.svg', style:'margin-left: 1em; float:left; width:40px; height:35px;'},
							{xtype: 'label', html:'RESULTADOS', style:'font-size: 1.3em; margin-top:0.1em; margin-left: 0.5em; width:100px;',width: '100%'},
                  			{xtype: 'button',text: 'Salir', id: 'logOut', action :'logOut',width: '100%', align: 'right', cls:'boton-accion', margin:'0 20px 0 0',style:'float: right;'}
              				]
				},
				{xtype: 'panel',padding: '0 10',
						layout: { type: 'vbox', align: 'stretch'},
						items: [
								{xtype: 'fieldset', defaults:{ labelAlign: 'left',labelWidth: '55%',labelWrap: true },
								style: { padding: '0 10', margin: '0 0 5 0'},
									items: [
											{xtype: 'textfield',label: 'IPSS Puntaje',name: 'puntaje',id:'result_puntaje',readOnly: true},
											{xtype: 'textfield',label: 'IPSS Categoría',name: 'categoria', id: 'result_categoria',readOnly: true}
											]
								},
								{xtype: 'fieldset', style: { padding: '0 10', margin: '0 0 10 0'}, defaults:{ labelAlign: 'left',labelWidth: '55%',labelWrap: true },
									items: [
											{xtype: 'textfield',label: 'Años Sobrevida',name: 'pronost_puntaje',id: 'pronost_puntaje',readOnly: true},
											{xtype: 'textfield',label: 'Evolución LMA',name: 'pronost_categoria',id: 'pronost_categoria',readOnly: true}
											]
								},
								{xtype: 'spacer',height: '1em'},
								{xtype: 'label', name: 'separador',html: '<hr>',  padding: '0 10'},
								{xtype: 'label',id:'leyenda_resultado',html: '', cls: 'x-fuente-klavica', padding: '10'},
								{xtype: 'label', name: 'separador',html: '<hr>', padding: '0 10'},
								{xtype: 'spacer',height: '1em'},
								{xtype: 'panel',layout: 'vbox',pack: 'center',padding: '10',
										layout: { type: 'hbox',align: 'middle', pack: 'center'},
										items:[
											{xtype: 'button',text: 'Ver Gráfico IPSS', id: 'verTabla', action :'verTabla',width: '80%', ui: 'round', cls:'boton-accion'}
										]
								}
				]}
        	]
    }
});
