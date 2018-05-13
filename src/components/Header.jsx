import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className="header">
      <style jsx>{`
          div.header {
            right: 0;
            top: 0;
            left: 0;
            padding: 1rem;
            background-color: cyan;
            text-align: center;
            font-family:sans-serif;
          }
          img {
            width:10%;
            border-radius:40px;
          }
          span.header-link {
            margin:5%;
          }
        `}
      </style>
      <Link to='/'><h1>Zazu's House</h1></Link>
      <Link to='/about'><span className='header-link'>About</span></Link>
      <Link to='/volunteers'><span className='header-link'>Volunteers</span></Link>
      <Link to='/gallery'><span className='header-link'>Gallery</span></Link>
      <Link to='/contact'><span className='header-link'>Contact</span></Link>
      <Link to='/support'><span className='header-link'>Support</span></Link>
      <Link to='/donate'><span className='header-link'>Donate Now!</span></Link>
    </div>
  );
}

export default Header;
//.header position:absolute;
