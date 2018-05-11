import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className="header">
      
      <h1>Zazu's House</h1>
      <Link to='/about'>About</Link>
      <Link to='/volunteers'>Volunteers</Link>
      <Link to='/gallery'>Gallery</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/donate'>Donate</Link>
    </div>
  );
}

export default Header;
