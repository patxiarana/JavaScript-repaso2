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

nuevoEnlace.href='nuevo-enlace.html'

<a href="nosotros.html" class="nuevo-enlace">Nosotros</a>

 console.log(nuevoEnlace)