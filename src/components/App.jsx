import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Volunteers from './Volunteers';
import Photos from './Photos';
import Videos from './Videos';
import Contact from './Contact';
import Support from './Support';
import Donate from './Donate';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/volunteers' component={Volunteers}/>
        <Route path='/photos' component={Photos}/>
        <Route path='/videos' component={Videos}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/support' component={Support}/>
        <Route path='/donate' component={Donate}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
