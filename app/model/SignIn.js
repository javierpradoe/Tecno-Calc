Ext.define('TestApp.model.SignIn', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'Nombre', type: 'string' },
			{ name: 'Apellido', type: 'string' },
			{ name: 'crearCorreo', type: 'string' },
            { name: 'crearPassword', type: 'string' },
			{ name: 'crearPassword1', type: 'string' }
        ],
        validations: [
            { type: 'presence', name: 'Nombre', message: 'Debe ingresar un Nombre <br>' },
			{ type: 'presence', name: 'Apellido', message: 'Debe ingresar un Apellido <br>' },
			{ type: 'presence', name: 'crearCorreo', message: 'Debe ingresar un correo <br>' },
			{ type: 'presence', name: 'crearPassword', message: 'Ingrese una contraseña <br>'},	
			{ type: 'presence', name: 'crearPassword1', message: 'Debe repetir su contraseña <br>'},			
            { type: 'format', name: 'crearCorreo', matcher : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'El correo debe tener un formato válido <br>'}
        ]
    }


});
