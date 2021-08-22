/**crear arreglo */
let citas = [];

/**capturara el formulario  sin el value, */
let formulario = document.getElementById("formulario");

//cpaturo el listar cita
let listarCita = document.getElementById("listarCita");
/**para capturar datos queentran con html */
let buscar = document.getElementById("btnBuscar");
let busqueda = document.getElementById("busqueda");

/* con el boton guardar */
let guardar = document.getElementById("btn");

const capturaDatos = () => {
  let nombre = document.getElementById("nombre").value;
  let fecha = document.getElementById("fecha").value;
  let hora = document.getElementById("hora").value;
  let sintomas = document.getElementById("sintomas").value;

  /*como hacer un objeto con lo que capturo */
  let registro = {
    nombre,
    fecha,
    hora,
    sintomas,
  };

  // citas.shift();//elimina el primer elemento de un arreglo
  //unshift agrega elementos al incio del areglo
  citas.unshift(registro);

  /**para guardar dentro de un lugar */
  localStorage.setItem("citas", JSON.stringify(citas));
};
console.log(citas);

/**como capture el formulario llamo al elemento 
 submit, y llama a la funcion capturar datos
  */

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  capturaDatos();
});

/**para mostrar, en consola como un arreglo
 * debo usar JSOn patra traeer la infrmacion la convierte de string ytexto a
 * un arreglo
 */

const getLocalStorage = () => {
  //el innerhtml es para cambiar de contenido a el html
  listarCita.innerHTML = "";
  let citaslocalStorage = JSON.parse(localStorage.getItem("citas"));
  console.log(citaslocalStorage);

  //voya reecorrer con un .map

  citaslocalStorage.map((cita) => {
    //desestructurar el objeto cita
    const { nombre, fecha, hora, sintomas } = cita;
    //los bactis sojnn cmoitas alreves dale acento dos veces
    // el += es para que coloqueuna nueva lista sin remplazar
    //el td me ayuda a colocar el texto en la tabla como

    /** desde aqui voy a enviar informacion al html
     * para llenar listarCita
     */
    listarCita.innerHTML += `
    <td>${nombre}</td> 
    <td>${fecha}</td>
    <td>${hora}</td>
    <td>${sintomas}</td>
        `;
  });
};

document.addEventListener("DOMContentLoaded", getLocalStorage);

/**evento click para el boton */

buscar.addEventListener("click", (e) => {
  let input = document.getElementById("inputBuscar").value;
  let data = JSON.parse(localStorage.getItem("citas"));
  //callback
  //tolowercase pasa todo  en minuscula

  let filtro = data.filter(
    (cita) => cita.nombre.toLowerCase() === input.toLowerCase()
  );
  busqueda.innerHTML = "";
  console.log(filtro);
  filtro.lenghjt == 0
    ? (busqueda.innerHTML += `<div style="color:white;">El nombre ${input} no existe</div>`)
    : filtro.map((cita) => {
        const { nombre, fecha, hora, sintomas } = cita;
        busqueda.innerHTML += `
                <div style="color:white; font-size: 20px;">${nombre}</div>
                <div style="color:white; font-size: 20px;">${fecha}</div>
                <div style="color:white;font-size: 20px;">${hora}</div>
                <div style="color:white;font-size: 20px;">${sintomas}
                <button id="Borrar">Borrar</Button></div><br>             
                `;
      });
});


