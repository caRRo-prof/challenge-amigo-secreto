// El principal objetivo de este desafío es fortalecer tus habilidades en lógica 
// de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/**
 * Los usuarios escribirán el nombre de un amigo en un campo de texto y lo 
 * agregarán a una lista visible al hacer clic en "Adicionar".
 */

let amigos=[]
function agregarNombres(parameters) {
   let nombre = document.getElementById("amigo").value;
   
}
/**
 Si el campo de texto está vacío, el programa mostrará una alerta 
 pidiendo un nombre válido.
 */
function validarEntrada(nombre) {
    if(nombre == "")
        alert("Por favor, inserte un nombre.")
    else{
        amigos.push(nombre);
        document.getElementById("amigo").value="";
    }
}
/**
 *Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
 */
function visualizarLista(parameters) {
    
}
/**
 * Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente 
 * un nombre de la lista y se mostrará en la página.
 */
function sortearAleatorio(parameters) {
    
}