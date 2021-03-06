import React from 'react';
import { Button } from 'reactstrap';

function Contact(){
  return(
    <div className='routeContainer'>
      <h1>CONTACT COMPONENT</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at dapibus est. Sed quis ligula eros. Integer eu pharetra urna, eu ornare ante. Ut id lectus a sem vehicula mollis. Quisque orci enim, posuere in dui nec, interdum ultrices lorem. Donec consequat ac leo et dapibus. Donec convallis sem a pretium venenatis. Duis laoreet felis vitae diam venenatis pretium.
      </p>

      <form>
        <label>Name:</label>
        <input
          type='text'
          id='name-input'/>
        <br/>
        <label>Email:</label>
        <input
          type='email'
          id='email-input'/>
        <br/>
        <Button outline color='info'>Submit</Button>
      </form>

    </div>
  );
}

export default Contact;
