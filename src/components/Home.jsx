import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../assets/parrot.jpg';
import { Jumbotron, Container, Button } from 'reactstrap';

function Home(){
  return (
    <div className='home'>
      <style jsx>{`
          .jumbotron {
            background-image:url(${Background});
            background-size:cover;
            font-family:sans-serif;
            height:650px;
            color:white;
          }
          .jumbotron-text {
            margin-left:10%;
          }
          .jumbotron-link {
            margin-right:5%;
          }
        `}
      </style>
      <Jumbotron fluid className='jumbotron'>
        <div className='jumbotron-text'>
          <h1 className="display-3">Zazu's House<br/>Parrot Sanctuary</h1>
          <p className="lead">Placeholder text goes here, here, and also here.</p>
          <Link to='/about'><Button className='jumbotron-link' color='info'>About Us</Button></Link>
          <Link to='/support'><Button className='jumbotron-link' color='primary'>Support Our Birds</Button></Link>
        </div>
      </Jumbotron>
      <Container>
        <h1>Home page container content</h1>
      </Container>
    </div>
  );
}

export default Home;
