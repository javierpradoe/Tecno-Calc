Ext.define('TestApp.view.About', {
    extend: 'Ext.form.Panel',
	
	xtype: 'aboutpanel',
 
    config: {		
		layout: { type: 'fit', align:'center'},			
			items:[
				{xtype: 'panel', id:'panel-link', items: [
				{xtype: 'titlebar',docked: 'top',
					items: [
								{xtype: 'image', src: 'resources/css/images/icon_links.svg', style:'margin-left: 1em; float:left; width:40px; height:15px;'},
								{xtype: 'label', html:'LINKS', style:'font-size: 1.3em; margin-top:0.1em; margin-left: 0.5em; width:100px;',width: '100%'},
								{xtype: 'button',text: 'Salir', id: 'logOut', action :'logOut',width: '100%', align: 'right', cls:'boton-accion', margin:'0 20px 0 0',style:'float: right;'}
								]
				},
				{xtype: 'panel', padding: '10px',
					layout: { type: 'vbox'},
					items: [
						{xtype: 'image', src: 'resources/css/images/vidaza.svg', style: 'height:120px;margin:auto'},		
						{xtype: 'panel', layout: {type: 'hbox', align: 'middle',pack: 'center'}, style:'margin: 1em 0',
						items: [
							{xtype: 'button',id: 'verSitio', ui: 'round', action :'onVerSitio',text: 'Ver sitio Web',cls:'boton-amarillo', style:'font-size: 0.8em;'},
							{xtype: 'spacer',width: '1em'},
							{xtype: 'button',id: 'unirMailing', ui: 'round', action :'onUnirMail',text: 'Unete a nuestro Mailing',cls:'boton-amarillo', style:'font-size: 0.8em;'}
						]}
					]},
			{xtype: 'label', name: 'separador',html: '<hr>', padding: '0 10'},
			{xtype: 'label', html: 'Tienes dudas acerca de esta herramienta?', cls: 'x-fuente-klavica blanca', style:'text-align:center', margin:'1em 0'},
			{xtype: 'button',id: 'btnContactanos', ui: 'round', action :'onContactanos',text: 'Contáctanos',cls:'boton-amarillo', style:'font-size: 0.8em',width:'60%', margin:'0 auto'},
			{xtype: 'label', name: 'separador',html: '<hr>', padding: '0 10'},
			{
                        xtype: 'image',
                        src: 'resources/css/images/tecnofarma.svg',
                        style: 'height:50px;margin:auto',
						margin: '1em 0'
                 },
			{xtype: 'label', html: 'Av. Pedro de Valdivia #1215 piso 6, Providencia', cls: 'x-fuente-klavica blanca small', style:'text-align:center'},
			{xtype: 'label', html: 'Santiago de Chile', cls: 'x-fuente-klavica blanca small',  style:'text-align:center'},
			{xtype: 'label', html: 'Mesa central: +562 2594900', cls: 'x-fuente-klavica blanca small',  style:'text-align:center'},
			{xtype: 'label', html: 'Email: contacto@tecnofarma.cl', cls: 'x-fuente-klavica blanca small', style:'text-align:center'},
			{xtype: 'label', name: 'separador',html: '<hr>', padding: '0 10'},
			{xtype: 'label', html: 'Desarrollado por Ox Comunicaciones, Chile.', cls: 'x-fuente-klavica blanca small', style:'text-align:center'},


			]}	
	]}
});