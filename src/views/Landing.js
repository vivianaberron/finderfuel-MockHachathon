import React from 'react'
import { Link } from 'react-router-dom';


import './otherview.css';

export const Landing = () => {
  return (
    <div className='landing'>
      this is landing
      <Link to='/otherview'>
           TogetherClick 
      </Link>
    
    </div>
  )
}

export default Landing;