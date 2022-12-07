const API_GRAL = `https://pokeapi.co/api/v2/pokemon?limit=50`;
let API_IMG = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/`;

window.addEventListener("load",()=>{
    fetch(API_GRAL)
        .then((response) => response.json())
        .then((data) => drawResults(data.results));
});

//dibuja los resultados
const drawResults = (results)=>{
    let contentTable = "";
    let indexImg = 1;
    for(let i = 0; i<results.length; i++){
        contentTable +=`
            <tr id="${results[i].name}" class"fila-table">
                <th class="pokemon-name">${results[i].name.toUpperCase()}</th>
                <th><img class="img-pokemon" src='${API_IMG}${indexImg}.svg'></th>
            </tr>
        `;
        indexImg++;
    }
    document.querySelector("tbody").innerHTML=contentTable; 
}

//Busco los pokemones de la tabla
const searchPokemon = (element)=>{
    let pokemon_search = element.value;
    let contentTable = document.querySelectorAll(".pokemon-name");
    //Instancio el objeto RegExp para lograr la busqueda por aproximación
    let er = new RegExp(pokemon_search, "i");
    for(let i = 0; i<contentTable.length; i++){
        if(er.test(contentTable[i].innerText)){
            contentTable[i].parentNode.style.display="";
        }else{
            contentTable[i].parentNode.style.display="none";
        }
    }
}


