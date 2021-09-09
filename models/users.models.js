const { Schema, model } = require('mongoose');

const userSchmea = Schema({
    name: {
        type: 'string', 
        required: [true, 'El nombre es obligatorio']
    },
    mail: {
        type: 'string', 
        required: [true, 'El mail es obligatorio'],
        unique: true
    },
    password: {
        type: 'string', 
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: 'string', 
    },
    role: {
        type: 'string', 
        required: [true, 'El role es obligatorio'],
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    status: {
        type: Boolean, 
        default: true
    },
    google:  {
        type: Boolean, 
        default: false
    }
    
})

module.exports = model( 'User', userSchmea )