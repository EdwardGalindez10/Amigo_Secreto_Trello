// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos =[];

function agregarAmigos() {
    const input = document.getElementById("Amigo");
    const nombreAmigo = input.value.trim();
    if (nombreAmigo !== "" ){
        amigos.push(nombreAmigo);
        mostrarAmigoEnLista(nombreAmigo);
        input.value = "";   //Limpiar el campo de entrada.
    } else {
        alert("Por favor, ingrese un nombre valido");
    }
}

//Funcion para mostrar el nombre en las lista 
function mostrarAmigoEnLista (nombre){
    const ListaAmigos = document.getElementById(ListaAmigos);
    const li = document.createElement("li");
    li.textContent = nombre;
    ListaAmigos.appendChild(li); 
}

// Funcion para hacer el sorteo 
function sortearAmigo(){
    if(amigos.length < 2){
        alert ("Necesitas al menos dos amigos para sortear");
        return;
    }

    //Crear una copia de la lista de amigos a sortear 
    const amigosMezclados = [...amigos];
    
    //Mezclar lista 
    for (let i = amigosMezclados.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() *(i+1));
        [amigosMezclados[i],amigosMezclados[j] = amigosMezclados[j], amigosMezclados[i]];
    } 

    //Aserura que no nadie se sortee asi mismo
    const resultados = amigos.map((amigo, indexe) => {
        let amigoSecreto = amigosMezclados[indexe];
        if(amigoSecreto === amigo ){ 
            amigoSecreto = amigosMezclados[(idex + 1) % amigosMezclados.length ];
        }
        return '${amigo} tiene a  ${amigoSecreto}';
    });
    
    //Mostrar resultados 

    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";  //Limpiar resultado
    resultadoLista.array.forEach(par => {
        const li = document.createElement("li");
        li.textContent = par;
        resultadoLista.appendChild(li);
        
    });

    
}