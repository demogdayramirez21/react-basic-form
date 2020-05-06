export default {
    model: [
        {
            id: 'email',
            label: 'Email',
            type: 'text',
            required: true,
        },
        {
            id: 'name',
            label: 'Nombre',
            type: 'text',
            required: true,
        },
        {
            id: 'lastName',
            label: 'Apellido',
            type: 'text',
            required: true,
        },
        {
            id: 'age',
            label: 'Edad',
            type: 'text',
            required: true,
        },
        {
            id: 'securityQuestion',
            label: 'Pregunta de seguridad',
            type: 'text',
            required: true,
        },
        {
            id: 'answer',
            label: 'Respuesta a la pregunta de seguridad',
            type: 'text',
            required: true,
        }
    ],
    form: {
        email: '',
        name: '',
        lastName:'',
        age: '',
        securityQuestion: '',
        answer: '',
    },
    errors: {
        email: '',
        name: '',
        lastName:'',
        age: '',
        securityQuestion: '',
        answer: '',
    }
}