import { useEffect, useState } from "react";
import axios from "axios";
import "./PokemonList.css";

function PokemonList(){

    const [PokemonList,setPokemonList] = useState([]);
    const [isLoading,setIsLoading] = useState(false);

   async function downloadPokemons(){
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        console.log(response.data);
        setIsLoading(true)

    }
     

    useEffect( ()=>{
        downloadPokemons();
    
    },[])



    return(
    <div className="pokemon-list-wrapper">
      Pokemon List
      {(isLoading) ? 'Loading...' : 'Data downloaded'}
    </div>
    )
        
}

export default PokemonList;