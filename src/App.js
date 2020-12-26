import React from 'react';
import './main.scss';

import Header from './components/Header/Header';
import NavBar from './components/Header/Navbar';
import NamegenContainer from './components/namegen/NamegenContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <NamegenContainer />
    </div>
  );
}

export default App;
