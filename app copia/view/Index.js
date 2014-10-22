Ext.define('TestApp.view.Index', {
    extend: 'Ext.tab.Panel',
	alias: 'widget.principalPanel',
    xtype: 'main',
	id: 'VistaPrincipal',
	requires: [
        'TestApp.view.Calculadora',
		'TestApp.view.Resultado',
        'TestApp.view.Tablas',
        'TestApp.view.About',
    ],
    config: {
        tabBar: {
            docked: 'bottom'
        },

        items: [{
            title: 'Calculadora',
            xtype: 'calcpanel',
			iconCls: 'valores-icon',
			cls: 'btn-tab'
        },
		{
            title: 'Resultados',
			iconCls: 'datos-icon',
            xtype: 'resultPanel',
			cls: 'btn-tab'
        },
		{
            title: 'Tablas',
            iconCls: 'tablas-icon',
            xtype: 'tablaspanel',
			cls: 'btn-tab'
        }, {
            title: 'Links',
            iconCls: 'acerca-icon',
            xtype: 'aboutpanel',
			cls: 'btn-tab'
        }]
    }
});
