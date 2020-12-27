import React from 'react';
import './main.scss';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Home from './pages/home';
import Names from './pages/names';
import About from './pages/about';
import NamegenContainer from './components/namegen/NamegenContainer';
import ExtraSpace from './components/ExtraSpace/ExtraSpace';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="sticky-nav" ><NavBar /></div>
      <Switch>
        <Route path="">
          <Home />
        </Route>
        <Route path="names">
          <Names />
        </Route>
        <Route path="about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
