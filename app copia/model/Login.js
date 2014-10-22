Ext.define('TestApp.model.Login', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'Correo', type: 'string' },
            { name: 'Password', type: 'string' }
        ],
        validations: [
            { type: 'presence', name: 'Correo', message: 'Debe ingresar su correo <br>' },
			{ type: 'presence', name: 'Password', message: 'Debe ingresar su contraseña <br>'},			
            { type: 'format', name: 'Correo', matcher : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'El correo debe tener un formato válido <br>'}
        ]
    }


});
