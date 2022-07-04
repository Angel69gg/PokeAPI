import React from 'react'
import { useParams } from 'react-router-dom';
import  { useEffect, useState } from 'react'
import axios from "axios"


export const Pokemon = () => {
  const params= useParams();
  const [pokemon, setPokemon] = useState({
    name: '',
    weight: '',
    height: '',
    base_experience: '',
    sprites:{
      front_default:''
    },
    abilities: [],
    types: [],
    stats: [],

  })
  

  useEffect(()=>{
    const pokemon= async ()=>{
      const res= await axios("https://pokeapi.co/api/v2/pokemon/"+params.id)
      console.log(res.data.sprites.front_default);
      setPokemon(res.data)
    }
    pokemon()
  },[])

  return (
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 content: center;" >
        <img class="rounded-t-lg" src={pokemon.sprites.front_default} alt="" />
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pokemon.name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Weight: {pokemon.weight}kg<br></br>Height: {pokemon.height} cm</p>
    </div>
    <div className="flex item-center  mt-3 border-b px-2">
              <div className='w-32'>
                <h2>Habiliades:</h2>
              </div>
              <div className='mx-3'>
                {pokemon.abilities.map(ability => (
                  <p className='list-item' key={ability.ability.name}>{ability.ability.name}</p>
                ))}
              </div>
      </div>
      <div className="flex item-center mt-3 border-b  px-2 ">
              <div className='w-32'>
                <h2>Tipo:</h2>
              </div>
              <div className='mx-3'>
                {pokemon.types.map(type => (
                  <p className='list-item' key={type.type.name}>{type.type.name}</p>
                ))}
              </div>
            </div>
</div>
  )
}
