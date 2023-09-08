//querySelector 
const heading = document.querySelector('.header__texto h2');
heading.textContent = 'Nuevo Heading'
console.log(heading)


//querySelectorAll 

const enlaces = document.querySelectorAll('.navegacion a'); 
console.log(enlaces[0])

enlaces[0].textContent = 'Nuevo texto para enlace'; 
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');

// Generar nuevo enlace 

const nuevoEnlace = document.createElement('A')
// Agregar al nuevo enlace
nuevoEnlace.href='nuevo-enlace.html'; 

//Agregar el texto al nuevo enlace

nuevoEnlace.textContent = 'Tienda virtual'; 
// Agregar a la clase

nuevoEnlace.classList.add('navegacion__enlace')

// Agregar al documento 

const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace)
 console.log(nuevoEnlace)




 // Eventos 
/*

console.log(1)
window.addEventListener('load',function(){ //load espera a que el JS y los archivos que dependen del del HTML esten listo 
    console.log(2)
})

window.onload = function() {
    console.log(3)
}


document.addEventListener('DOMContentLoaded',function(){ // Solo espera por el HTML, pero no espera css o imagenes 
    console.log(4)
})

console.log(5) */

/*window.onscroll = function () {
    console.log('scrolling...')
} */



// Seleccionar Elementos y asociarles un evento 

const btnEnviar = document.querySelector('.boton--primario')
btnEnviar.addEventListener('click', function(evento){
console.log(evento)
console.log(evento.preventDefault())
    console.log('enviando formulario')
})

// Eventos de los inputs text area 


const datos = {
    nombre: '',
    email: '', 
    mensaje: '',

}

const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')

nombre.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input',leerTexto)

function leerTexto(e) {

    datos[e.target.id] = e.target.value ;
    console.log(datos)
}