import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Jumbotron from './Jumbotron';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Jumbotron}/>
        <Route path='/about' component={Header}/>
        <Route path='/volunteers' component={Header}/>
        <Route path='/gallery' component={Header}/>
        <Route path='/contact' component={Header}/>
        <Route path='/donate' component={Header}/>
      </Switch>
    </div>
  );
}

export default App;
