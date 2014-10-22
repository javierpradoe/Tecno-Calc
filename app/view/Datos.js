Ext.define('TestApp.view.Datos', {
    extend: 'Ext.dataview.List',
	requires: [
			'Ext.device.Connection'
	],
	
	xtype: 'datapanel',
	id: 'datosMedico', 
    config: {
     emptyText : 'Actualmente no hay datos',
     itemTpl: '<div class="myContent">'+ 
       '<div style="font-size: 1em; color: darkgray"> {idUsuarioDta}:[({BlastosDta}),({CariotipoDta}),({CitopeniasDta}),({sobrevidaDta}),({evolucion_lmaDta}),({grupoDta}),({scoreDta})]</div>'+
       '</div>'
    
    } 
});