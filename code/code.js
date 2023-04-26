const inputText = document.querySelector('#input-text');
const outputText = document.querySelector('#output-text');

const btnEncriptar = document.querySelector('#btn-encriptar');
const btnDesencriptar = document.querySelector('#btn-desencriptar');
const btnCopiar = document.querySelector('#btn-copiar');

document.getElementById("after").style.display = "none";


function encriptar(){
    let text = inputText.value.toLowerCase();
    let textEncriptado = text;
    

    textEncriptado = textEncriptado.replaceAll('e', 'enter');
    textEncriptado = textEncriptado.replaceAll('i', 'imes');
    textEncriptado = textEncriptado.replaceAll('o', 'ober');
    textEncriptado = textEncriptado.replaceAll('a', 'ai');
    textEncriptado = textEncriptado.replaceAll('u', 'ufat');
    
    document.getElementById("before").style.display = "none";
    document.getElementById("after").style.display = "initial";

    outputText.value = textEncriptado;
    document.getElementById("input-text").value = '';
}

function desencriptar (){
    let textEncriptado = inputText.value.toLowerCase();
    let text = textEncriptado;
    
    text = text.replaceAll('enter', 'e');
    text = text.replaceAll('imes', 'i');
    text = text.replaceAll('ober', 'o');
    text = text.replaceAll('ai', 'a');
    text = text.replaceAll('ufat', 'u');
    
    document.getElementById("before").style.display = "none";
    document.getElementById("after").style.display = "initial";
    
    outputText.value = text;
    document.getElementById("input-text").value = '';
}

function copiar () {
    let textEncriptado = outputText.value;
    navigator.clipboard.writeText(textEncriptado);
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
