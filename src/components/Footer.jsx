import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube';
import faTumblr from '@fortawesome/fontawesome-free-brands/faTumblr';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import { Link } from 'react-router-dom';

function Footer(){
  return (
    <div className="footer">
      <style jsx>{`
          div.footer {
            flex-shrink: 0;
            padding-bottom: 2.1em;
            background-color: lime;
            text-align: center;
          }
          `}
      </style>
      <h1>FOOTER COMPONENT</h1>
      <Link to='/admin'><span style={{textAlign:'left', display:'block'}}>Admin</span></Link>
      <a href='https://www.youtube.com/channel/UCf8LtsnnXnwAmXOFGhp_wjw/'><FontAwesomeIcon icon={faYoutube} size='lg' pull='right' /></a>
      <a href='http://zazushousesanctuary.tumblr.com/'><FontAwesomeIcon icon={faTumblr} size='lg' pull='right' /></a>
      <a href='https://www.instagram.com/zazushousesanctuary/'><FontAwesomeIcon icon={faInstagram} size='lg' pull='right' /></a>
      <a href='https://twitter.com/zazushouse/'><FontAwesomeIcon icon={faTwitter} size='lg' pull='right' /></a>
      <a href='http://www.facebook.com/zazushouse.parrotsanctuary'><FontAwesomeIcon icon={faFacebook} size='lg' pull='right' /></a>
    </div>
  );
}

export default Footer;
