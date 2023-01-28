var mensaje1 = document.querySelector(".mensaje1");
var mensaje2 = document.querySelector(".mensaje2");
var instruccion = document.querySelector(".instruccion");
var mensaje = document.querySelector(".mensaje");

function validar(e) {
    var key = e.keycode || e.which;
    var tecla = String.fromCharCode(key).toString();
    var letras = " abcdefghijklmnopqrstuvwxyz";

    if (letras.indexOf(tecla) == -1) {
        alert ("Ingresa solo letras minúsculas. No se aceptan acentos, caracteres especiales y números");
        return false;
    }
}

function encriptar(txtCaptura) {
    let claveEncriptar = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    txtCaptura = txtCaptura.toLowerCase();

    for(i = 0; i < claveEncriptar.length; i++) {
        if(txtCaptura.includes(claveEncriptar[i][0])) {
            txtCaptura = txtCaptura.replaceAll(claveEncriptar[i][0], claveEncriptar[i][1])
        }
    }

    return txtCaptura;
}

function resultadoEncriptar() {
    var txtEncriptar = encriptar(mensaje1.value);

    if(mensaje1.value.length == 0) {
        instruccion.style.display = "inline-flex";
        mensaje.style.display = "none";
        mensaje1.focus();
    } else {
        mensaje2.value = txtEncriptar;
        mensaje1.value = "";
        instruccion.style.display = "none";
        mensaje.style.display = "inline-flex";
        mensaje2.focus();
    }
}

function desencriptar(txtCopiar) {
    let claveEncriptar = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    txtCopiar = txtCopiar.toLowerCase();

    for(i = 0; i < claveEncriptar.length; i++) {
        if(txtCopiar.includes(claveEncriptar[i][1])) {
            txtCopiar = txtCopiar.replaceAll(claveEncriptar[i][1], claveEncriptar[i][0]);
        }
    }

    return txtCopiar;
}

function resultadoDesencriptar() {
    var txtDesencriptar = desencriptar(mensaje1.value);

    if(mensaje1.value.length == 0) {
        instruccion.style.display = "inline-flex";
        mensaje.style.display = "none";
        mensaje1.focus();
    } else {
        mensaje2.value = txtDesencriptar;
        mensaje1.value = "";
        instruccion.style.display = "none";
        mensaje.style.display = "inline-flex";
        mensaje2.focus();
    }
}

function copiar() {
    mensaje2.select();
    mensaje2.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(mensaje2.value);
}