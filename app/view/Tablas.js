Ext.define('TestApp.view.Tablas', {
    extend: 'Ext.Panel',
	xtype: 'tablaspanel',
	 config: {
        scrollable: 'vertical',
        items:[
			{xtype: 'titlebar',docked: 'top',
			items: [
							{xtype: 'image', src: 'resources/css/images/icon_tablas.svg', style:'margin-left: 1em; float:left; width:35px; height:35px;'},
							{xtype: 'label', html:'TABLAS', style:'font-size: 1.3em; margin-top:0.1em; margin-left: 0.5em; width:100px;',width: '100%'},
                  			{xtype: 'button',text: 'Salir', id: 'logOut', action :'logOut',width: '100%', align: 'right', cls:'boton-accion', margin:'0 20px 0 0',style:'float: right;'}
              				]
			},
			{xtype: 'panel', padding: '10px',
					layout: { type: 'fit'},
					items: [
						{xtype: 'label', html:'<span style="color: #008a45;">&bull;</span>IPSS para MDS, Indice de valor pronostico *<br /><img src="resources/css/images/tabla_1.svg" width="100%" height="100%" />', docked: 'top', padding: '0 0.8em',cls:'x-fuente-klavica'},
						{xtype: 'label', html:'<span style="color: #008a45;">&bull;</span>Sobrevivencia y evolución LMA de pacientes MDS *<br /><img src="resources/css/images/tabla_2.svg" width="100%" height="100%" />', docked: 'top', padding: '0 0.8em',cls:'x-fuente-klavica'},
						{xtype: 'label', html:'Referencias', docked: 'top', padding: '0 0.8em',cls:'x-fuente-klavica title', style:'text-align:center'},
						{xtype: 'label', html:'Greenberg, Cox, M. LeBeau et al, International Scoring System for Evaluating Prognosis in Myelodysplastic Syndromes', docked: 'top', padding: '10',cls:'x-fuente-klavica'},
						{xtype: 'label', html:'*Schanz jet al, JClin Oncology 2012; 30:820', docked: 'top', padding: '0 0.8em',cls:'x-fuente-klavica'},
						{xtype: 'label', name: 'separador',html: '<hr>', padding: '0 10'},
						{xtype: 'label', html:'http://www.qxmd.com/calculate-online/calculate', docked: 'top', padding: '0 0.8em',cls:'x-fuente-klavica'}
						]
			}
			]

    }
});