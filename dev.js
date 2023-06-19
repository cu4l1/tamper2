let btn = document.getElementsByClassName("flex-shrink-0 bg-gray-700 hover:bg-gray-600 px-4 py-2 leading-6 text-white rounded-r text-sm buscar");
let boton = btn[0];
console.log(btn);
// var boton = document.getElementById('miBoton');
 boton.addEventListener("click", function() {
     alert("hola desde tamper");
    console.log("Se hizo clic en el botón");
});