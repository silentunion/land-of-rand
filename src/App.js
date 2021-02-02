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
        <Route exact path="/" component={Names} />
        <Route path="/names" component={Names} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
