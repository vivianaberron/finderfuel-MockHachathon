import React from 'react'
import {Link} from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
     <Link to={'/otherview'}>
       <div className='foryou'>Info Para ti</div>
       <div className='mechanical'>Talleres</div>
       <div className='routes'>Rutas</div>
     </Link>
    </div>
  )
}

export default Navbar;