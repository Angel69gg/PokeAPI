import React from 'react'
import { NavLink } from 'react-router-dom'



export const Navbar = () => {
    const activeStyle = {
        activate: "",
        desactivate: ""
    }
    return (
            <div className="flex flex-col items-center w-16 h-full overflow-hidden text-gray-700 bg-gray-100 rounded" >
		<NavLink className="flex items-center justify-center mt-3" to="190547" >
			Estudiante
		</NavLink>
		<div className="flex flex-col items-center mt-3 border-t border-gray-300">
			<NavLink className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" to="/">
            Pokemons
			</NavLink>
		</div>
	</div>
       
    )
}
