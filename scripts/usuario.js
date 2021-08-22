let usuario = []; //creo mi arreglo donde voy a guaradar lo que captura

let ingresar = document.getElementById("btnIngresar");
let registrar = document.getElementById("btnRegistrar");
//captura datos con juna funcion flecha  capturo lo que hay en ambos input
let formulario = document.getElementById("formulario");
/******************Para Registrar un usuario nuevo**************************** */
 registrar.addEventListener('click', (e)=>{
    e.preventDefault();
        capturaDatos();
})  

function capturaDatos (){
    let nombre = document.getElementById("inputname").value;
    let login = document.getElementById("inputlogin").value;

  /*hacer un objeto con lo que capturo */
  let datos = {
    'nombre': nombre,
    'login': login,
  }
      //el objeto captura lo agrego con push 
  usuario.push(datos);
  console.log(usuario);

  //llamo al local estore asigno un nombre que seria guardar y le paso el arreglo
  localStorage.setItem('Guardar', JSON.stringify(usuario));
   
}

/*******************Para Ingresar realizo una Busqueda***************************************** */
//document.addEventListener("DOMContentLoaded", getLocalStorage);

let busqueda = document.getElementById("busqueda");

/**evento click para el boton */

ingresar.addEventListener("click", (e) => {
  e.preventDefault();
  let input = document.getElementById("btnIngresar").value;
  let ingresardata = JSON.parse(localStorage.getItem("usuario"));
  
  console.log('estoy dentro de filtro');

  let filtro = usuario.filter(
    (usuario) => usuario.nombre.toLowerCase() === input.toLowerCase()
    );
   busqueda.innerHTML ="";
  console.log(filtro);
  filtro.lenghjt == 0
    ? (busqueda.innerHTML += `<div style="color:white;">El nombre ${input} no existe</div>`)
    : filtro.map((usuario) => {
        const { nombre, login} = usuario;
        busqueda.innerHTML += console.log('Usuario encontrado');
      });

});

