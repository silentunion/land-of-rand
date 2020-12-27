import React from 'react';
import './main.scss';

import Header from './components/Header/Header';
import NavBar from './components/Header/Navbar';
import NamegenContainer from './components/namegen/NamegenContainer';
import ExtraSpace from './components/ExtraSpace/ExtraSpace';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="sticky-nav" ><NavBar /></div>
      <NamegenContainer />
      <ExtraSpace />
    </div>
  );
}

export default App;
