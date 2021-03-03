import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Help from './Components/Help';
import Recipes from './Components/Recipes';
import Recipe from './Components/Recipe';

const App = () => {
  return (
    <React.Fragment>
      <Router>
          <Header />
          <Switch>
              <Route exact path='/'>
                  <Home />
              </Route>
              <Route path='/help'>
                  <Help />
              </Route>
              <Route path='/edmam-recipe'>
                <Recipes />
              </Route> 
              <Route path='/recipe'>
                <Recipe />
              </Route>         
          </Switch>
      </Router>
      {/*<Footer />*/}
    </React.Fragment>
  )
}

export default App;
