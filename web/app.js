// El principal objetivo de este desafío es fortalecer tus habilidades en lógica 
// de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/**
 * Los usuarios escribirán el nombre de un amigo en un campo de texto y lo 
 * agregarán a una lista visible al hacer clic en "Adicionar".
 */

let amigos=["Ana", "Raul", "Cristina","Lupita"]
function agregarAmigo() {
   let nombre = document.getElementById("amigo").value;
   validarEntrada(nombre);
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
        visualizarLista();
    }
}
/**
 *Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
 */
function visualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML="";
    for (var i = 0; i < amigos.length; i++) {
        const option = document.createElement("li");
        option.textContent=amigos[i];
        lista.appendChild(option);
    }
}

/**
 * Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente 
 * un nombre de la lista y se mostrará en la página.
 */
function sortearAmigo() {
    const lista =document.getElementById("resultado");
    lista.innerHTML="";
    if (amigos.length!==0) {
        const indice = Math.floor(Math.random() * amigos.length);
        const amigo = amigos[indice];
        
        const option = document.createElement("li");
        option.textContent=amigo;
        lista.appendChild(option);
        console.log(amigo);
    }
    else
        console.log("No hay amigos en la lisa");
}
