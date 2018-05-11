import React from 'react';
import { Link } from 'react-router-dom';

function Jumbotron(){
  return (
    <div className="jumbotron">
      <style jsx>{`
          div.jumbotron {
            background-color:yellow;
            text-align:center;
            font-family:sans-serif;
          }
          img {
            width:10%;
            border-radius:40px;
          }
          `}
      </style>
      <h1>JUMBOTRON COMPONENT</h1>
      <Link to='/about'>About Us</Link>
    </div>
  );
}

export default Jumbotron;
