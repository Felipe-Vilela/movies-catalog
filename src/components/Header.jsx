import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const loc = useLocation();
  console.log(loc)

  return (
 
    <header className='flex justify-around items-center relative top-0 w-full bg-zinc-900 p-4 shadow-md z-10'>
        <h2 className='text-xl font-bold'>Movies</h2>

        <ul className='flex gap-12 text-lg font-medium text-gray-700'>
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/criar'>Criar</Link></li>
          <li><Link to='/atualizar'>Atualizar</Link></li>
          <li><Link to='/deletar'>Deletar</Link></li>
        </ul>

    </header>

    
  )

}

export default Header
