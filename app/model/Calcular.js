Ext.define('TestApp.model.Calcular', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['Blastos','Cariotipo','Citopenias'],
        validations: [
  
			//{ type: 'range1', field: 'Hemoglobin', message: 'debe ser entre 4 y 20' }       

               
        ]
    }


});
