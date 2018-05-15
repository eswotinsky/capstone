import React from 'react';
import { Button } from 'reactstrap';

function Contact(){
  return(
    <div>
      <h1>CONTACT COMPONENT</h1>
      <form>
        <label>Email:</label>
        <input type='email'/>
        <br/>
        <Button outline color='info'>Submit</Button>
      </form>
    </div>
  );
}

export default Contact;
