import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <nav className='flex px-10 py-3 justify-between items-center'>
            <h1 className='font-bold text-3xl select-none'>MMR</h1>
            <ul className='flex gap-4 bg-blue-300 px-5 rounded-4xl'>
                <NavLink to="/"><li className=' rounded-2xl select-none cursor-pointer my-1 hover:bg-blue-900 px-4 py-1 font-bold  active:scale-75 hover:text-white'>Home</li></NavLink>
                <NavLink to="/about"><li className=' rounded-2xl select-none cursor-pointer my-1 hover:bg-blue-900 px-4 py-1 font-bold  active:scale-75 hover:text-white'>About</li></NavLink>
                <NavLink to="/products"><li className=' rounded-2xl select-none cursor-pointer my-1 hover:bg-blue-900 px-4 py-1 font-bold  active:scale-75 hover:text-white'>Products</li></NavLink>    
            </ul>
            <NavLink to="/contacts"><button className=' rounded-2xl select-none cursor-pointer bg-amber-400 hover:bg-amber-700 px-4 py-1 font-bold  active:scale-75 hover:text-white'>Contact</button></NavLink>
        </nav>
    </div>
  )
}

export default Nav