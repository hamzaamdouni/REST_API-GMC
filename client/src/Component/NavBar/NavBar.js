import React from 'react';

import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='Box'>
      <div className='Logo'>
        <Link to='/' className='Linkto'> Person </Link>
      </div>
      <div className='Menu'>
        <button><Link to='/persons' className='Linkto'> person List </Link></button>
        <button><Link to='/addperson' className='Linkto'> Add person </Link></button>
      </div>
      <div className='Login'>
        <button><Link to='' className='Linkto'> Register </Link></button>
        <button><Link to='' className='Linkto'> Login </Link></button>
      </div>
    </nav>
  )
}

export default NavBar
