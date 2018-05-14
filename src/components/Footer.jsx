import React from 'react';

function Footer(){
  return (
    <div className="footer">
      <style jsx>{`
          div.footer {
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            padding: 1rem;
            background-color: lime;
            text-align: center;
          }
          `}
      </style>
      <h1>FOOTER COMPONENT</h1>
    </div>
  );
}

export default Footer;
