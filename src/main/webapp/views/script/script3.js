window.onload=function () {
    let form = document.querySelector('#registroForm');
    form.nombre.addEventListener('input', validarNombre);
}

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

function validarFomulario() {
   if (validarNombre())
        return true;
    else
        return false;
}