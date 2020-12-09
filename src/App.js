import React from 'react';
import './main.scss';

import NavBar from './components/navbar/Navbar';
import WordgenContainer from './components/wordgen/WordgenContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <WordgenContainer />
    </div>
  );
}

export default App;
