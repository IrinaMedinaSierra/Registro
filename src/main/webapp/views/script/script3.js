document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('#registroForm');

    form.nombre.addEventListener('input', validarNombre);
 /*   form.apellido.addEventListener('input', validarApellido);
    form.edad.addEventListener('input',validarEdad);
    form.telefono.addEventListener('input',validarTelefono);
    form.email.addEventListener('input', validarEmail);
    form.password.addEventListener('input', validarPassword);*/
});

function validarNombre() {
    let nombre = document.querySelector('#nombre');
    let msnError = document.querySelector('.nombreError');

    if (!nombre.value.trim()) {
        nombre.classList.add("errorInput");
        nombre.classList.remove('validoInput');
        msnError.textContent = 'El nombre es obligatorio.';
        return false;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value.trim())) {
        nombre.classList.add('error-input');
        nombre.classList.remove('valid-input');
        msnError.textContent = 'El nombre solo puede contener letras y espacios.';
        return false;
    } else {
        nombre.classList.remove('error-input');
        nombre.classList.add('valid-input');
        msnError.textContent = '';
        return true;
    }
}
/*

function validateLastName() {
    let lastName = document.getElementById('lastName');
    let errorMessage = document.getElementById('errorMessage');

    if (!lastName.value.trim()) {
        lastName.classList.add('error-input');
        lastName.classList.remove('valid-input');
        errorMessage.textContent = 'El apellido es obligatorio.';
        return false;
    } else {
        lastName.classList.remove('error-input');
        lastName.classList.add('valid-input');
        errorMessage.textContent = '';
        return true;
    }
}

function validateAge() {
    let age = document.getElementById('age');
    let errorMessage = document.getElementById('errorMessage');

    if (!age.value.trim() || isNaN(age.value) || age.value <= 0) {
        age.classList.add('error-input');
        age.classList.remove('valid-input');
        errorMessage.textContent = 'La edad debe ser un número positivo.';
        return false;
    } else {
        age.classList.remove('error-input');
        age.classList.add('valid-input');
        errorMessage.textContent = '';
        return true;
    }
}

function validatePhone() {
    let phone = document.getElementById('phone');
    let errorMessage = document.getElementById('errorMessage');

    if (!phone.value.match(/^\d{10}$/)) {
        phone.classList.add('error-input');
        phone.classList.remove('valid-input');
        errorMessage.textContent = 'El teléfono debe tener 10 dígitos.';
        return false;
    } else {
        phone.classList.remove('error-input');
        phone.classList.add('valid-input');
        errorMessage.textContent = '';
        return true;
    }
}

function validateEmail() {
    let email = document.getElementById('email');
    let errorMessage = document.getElementById('errorMessage');

    if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
        email.classList.add('error-input');
        email.classList.remove('valid-input');
        errorMessage.textContent = 'El email no tiene un formato válido.';
        return false;
    } else {
        email.classList.remove('error-input');
        email.classList.add('valid-input');
        errorMessage.textContent = '';
        return true;
    }
}

function validateAddress() {
    let address = document.getElementById('address');
    let errorMessage = document.getElementById('errorMessage');

    if (!address.value.trim()) {
        address.classList.add('error-input');
        address.classList.remove('valid-input');
        errorMessage.textContent = 'La dirección es obligatoria.';
        return false;
    } else {
        address.classList.remove('error-input');
        address.classList.add('valid-input');
        errorMessage.textContent = '';
        return true;
    }
}

function validatePassword() {
    let password = document.getElementById('password');
    let errorMessage = document.getElementById('errorMessage');

    if (!password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        password.classList.add('error-input');
        password.classList.remove('valid-input');
        errorMessage.textContent = 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.';
        return false;
    } else {
        password.classList.remove('error-input');
        password.classList.add('valid-input');
        errorMessage.textContent = '';
        return true;
    }
}
*/

function validarFomulario() {
   if (validarNombre())
    /*    &&
        validateLastName() &&
        validateAge() &&
        validatePhone() &&
        validateEmail() &&
        validateAddress() &&
        validatePassword();*/
    return isValid;
    else
        return false;
}