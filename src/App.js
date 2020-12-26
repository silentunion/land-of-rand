import React from 'react';
import './main.scss';

import Header from './components/header/Header';
import NavBar from './components/navbar/Navbar';
import NamegenContainer from './components/namegen/NamegenContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <NamegenContainer />
    </div>
  );
}

export default App;
