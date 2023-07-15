const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    })
});

function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = '';
    } else {
        input.parentElement.classList.add('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tiposDeErrores = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensajesDeError = {
    nombre: {
        valueMissing: 'Este campo no puede estar vacio'
    },
    email: {
        valueMissing: 'Este campo no puede estar vacio',
        typeMismatch: 'El correo no es valido'
    },
    asunto: {
        valueMissing: 'Este campo no puede estar vacio',
        patternMismatch: 'El asunto debe contener minimo 10 caracteres'
    },
    mensaje: {
        valueMissing: 'Este campo no puede estar vacio',
        patternMismatch: 'El mensaje debe contener minimo 40 caracteres'
    }
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = '';
    tiposDeErrores.forEach(error => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });

    return mensaje;
}