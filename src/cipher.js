
window.addEventListener("load", inicio, true);

function inicio(){
  document.getElementById('input-original').addEventListener("keyup", function(){
    this.value = this.value.toUpperCase();
  }, true);
//  document.getElementById('input-original2').addEventListener("keyup", function(){
//    this.value = this.value.toUpperCase();
//  }, true);
  document.getElementById("cipher").addEventListener("click",function(){
    let string = document.getElementById("input-original").value;
    let offset = document.getElementById("clave").value;
    document.getElementById("texto-cifrado").value = cipher(offset, string);
  }, true);
  document.getElementByid("decipher").addEventListener("click",function(){
    let string = document.getElementById("input-original").value;
    let offset = document.getElementById("clave").value;
    document.getElementById("texto-cifrado").value = decipher(offset, string);
  }, true);
}

function cipher(offset, string){
  if (!string)
    return "";
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  offset = (offset %26 + 26) % 26;

  return string.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+offset)%26]);
}

function decipher(offset, string){
  if (!string)
    return "";
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  offset = (offset %26 - 26) % 26;

  return string.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)-offset)%26]);
}

//const cipher = {
  // ...0
//};

export default cipher;

//const letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"]
//const inputOriginal = document.getElementById('input-original').addEventListener("keyup", inicio);
//const cifrador = document.getElementById('contenedorCodificar');
//const resultado = document.getElementById('contenedorCifrado');
//const clave = document.getElementById('clave');

//minuto 11 https://www.youtube.com/watch?v=7A4pdwpT10Q

