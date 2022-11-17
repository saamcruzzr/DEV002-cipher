import cipher from './cipher.js';

//console.log(cipher);


alert("¡Alerta de seguridad! \nEl uso de internet puede ser monitoreado y es imposible de eliminar por completo. Si necesitas ayuda urgente llama a los servicios de emergencia (911 Mx/Cl/Pr/Ec; 123 Colombia;). Obten más información sobre la seguridad digital y recuerda borrar el historial de tu navegador después de utilizar este sitio web. \nPresiona CTRL + W / CMD + W para salir inmediatamente de SOS CODE, o utiliza el botón de emergencia para redirigirte a otra página de inmediato.");


document.getElementById('input-original').addEventListener("keyup", function() {
    this.value = this.value.toUpperCase();
});
//  document.getElementById('input-original2').addEventListener("keyup", function(){
//    this.value = this.value.toUpperCase();
//  });
document.getElementById("cipher").addEventListener("click",function() {
    let offset = document.getElementById("clave").value;
    let string = document.getElementById("input-original").value;
    document.getElementById("texto-cifrado").value = cipher.encode(offset, string);
});

document.getElementById("decipher").addEventListener("click",function() {
    let offset = document.getElementById("clave").value;
    let string = document.getElementById("input-original").value;
    document.getElementById("texto-cifrado").value = cipher.decode(offset, string);
});

//document.getElementById("copy").addEventListener("click", function(e){
//    e.preventDefault();
//    texto-cifrado.select();   
//})

//var button = document.getElementById("copy"),
//input = document.getElementById("texto-cifrado");

//button.addEventListener("click", function(event) {
//event.preventDefault();
//input.select();
//document.execCommand("copy");
//});
