import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [id, setId] = useState(1)
  const [lista, setLista] = useState([{}]);
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
  const get = async () => {
  const data = await axios.get("https://pokeapi.co/api/v2/pokemon/1")
  setPokemon(data.data)
  return data.data    
  }
  get()
  },[]);
  const obtenerInformacion =async (id) =>{
    console.log(id)
    const data= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    setPokemon(data.data)
    console.log(data.data)
    let a= id + 1;
    setId(a)
  }
  
  
  return (
    <div className="App" >
    <div className="imagen" >
        <h1 className="">{pokemon.name}</h1>  
       {/*  <img src={pokemon.sprites.front_default} alt="pokemon" />   */}
        </div>
        <button onClick={() => obtenerInformacion(id)} className="boton">Siguiente</button>
    </div>
  );
}

export default App;
