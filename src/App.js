import React from 'react';
import './main.scss';

import NavBar from './components/navbar/Navbar';
import NamegenContainer from './components/namegen/NamegenContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <NamegenContainer />
    </div>
  );
}

export default App;
