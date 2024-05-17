let PokeArreglo=[];
let PokeQuipo=[];


//buscar pokemon
function buscarPokemon(contenedorNumero){
    let inputId= `pokemonInput${contenedorNumero}`;
    let nombrePokemon=document.getElementById(inputId).value.trim().toLowerCase();

    let urlApi=`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`
    fetch(urlApi)
    .then(Response => Response.json())
    .then(datosPokemon=> mostrarPokemon(datosPokemon, contenedorNumero))
    .catch(() => mostrarError(contenedorNumero))

    console.log(inputId)
}

//Mostrar info Pokemon
function mostrarPokemon(datosPokemon, contenedorNumero){
    let infoDidID =`pokeInfo${contenedorNumero}`;
    let infoDiv=document.getElementById(infoDidID);
        infoDiv.innerHTML=`
        <h2 class="pk-nombre" id="nombrePoke">${datosPokemon.name.toUpperCase()}</h2>
        <img class="pk-img" src="${datosPokemon.sprites.other["official-artwork"].front_default}">    
        <p>Numero:${datosPokemon.id} 
        <strong>Tipos: </strong> ${datosPokemon.types[0].type.name} 
        </p>
            `;
}
  
//Agregar pokemons
document.getElementById('guardar').addEventListener('click',function(pokemonName,contenedorNumero){
    const pokemonName1=document.getElementById('pokemonInput1').value;
    const pokemonName2=document.getElementById('pokemonInput2').value;
    const pokemonName3=document.getElementById('pokemonInput3').value;
       
    PokeArreglo.push(pokemonName1,pokemonName2,pokemonName3)
        console.log(PokeArreglo.length)
        console.log(PokeArreglo)
    
        window.alert("EQUIPO GUARDADO EXITOSAMENTE")
});

//Mostrar error
function mostrarError(contenedorNumero){
    let infoDidID =`pokeInfo${contenedorNumero}`;
    let infoDiv=document.getElementById(infoDidID);

    infoDiv.innerHTML=` 
    <p class="mensaje">DATOS INGRESADOS DE FORMA INCORRECTA .</p>
        `;
}







//Parte de la otra pag


document.getElementById('buscar').addEventListener('click',function(){
    let pokemonName1=document.getElementById('pokemonInput1').value;
    let pokemonName2=document.getElementById('pokemonInput2').value;
    let pokemonName3=document.getElementById('pokemonInput3').value;

    
        if(PokeArreglo.length <3){
            displayPokemon(pokemonName1, pokemonName2,pokemonName3)
            // PokeArreglo.push(pokename1, pokename2,pokename3)

            window.alert("EQUIPO GUARDADO EXITOSAMENTE")


        }else{
            document.disabled = true; 
            console.log("Equipo lleno")
            window.alert('EQUIPO LLENO')

        }
});


//funcion para buscar al pokemon
async function getPokemon(pokemonName){
    const rensponse= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    return rensponse.json();
  }

//mostrar al pokemon
async function displayPokemon(pokemonName){
  const pokemon= await getPokemon(pokemonName);


if(PokeArreglo>0){
    PokeArreglo.unshift()


}else{
    console.log
    PokeArreglo.push(pokemon)
    onsole.log(PokeArreglo.length)
    console.log(PokeArreglo)

    const container = document.getElementById('equipos');
    const element = document.createElement('div');
    PokeArreglo.forEach ((pokemon) =>{
        element.innerHTML += `
        <div>
            <div>
            <img src= "${pokemon.sprites.front_default}" width="80%" height="50%"<"/img>
            <br>
             <strong></strong> ${pokemon.name}
             </div>
             </div>`;
            
             container.appendChild(element);
            } );
console.log(PokeArreglo)
}




    
}

//Agregar pokemon
  async function agregarPokemon(pokemonName){
    const pokemon= await getPokemon(pokemonName);
    console.log
  PokeArreglo.push(pokemon)
      console.log(PokeArreglo.length)
  console.log(PokeArreglo)
  }


 
  