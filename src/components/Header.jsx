import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className="header">
      <style jsx>{`
          div.header {
            background-color:goldenrod;
            text-align:center;
            font-family:sans-serif;
          }
          img {
            width:10%;
            border-radius:40px;
          }
        `}
      </style>
      <Link to='/'><h1>Zazu's House</h1></Link>
      <Link to='/about'>About</Link>
      <Link to='/volunteers'>Volunteers</Link>
      <Link to='/gallery'>Gallery</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/support'>Support</Link>
      <Link to='/donate'>Donate Now!</Link>
    </div>
  );
}

export default Header;
