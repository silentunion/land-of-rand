import React from 'react';
import './main.scss';

import NavBar from './components/navbar/Navbar';
import WordgenContainer from './components/newwordgen/WordgenContainer';

import TabsComponent from './components/wordgen/tut/Tab';

function App() {
  return (
    <div className="App">
      <NavBar />
      <WordgenContainer />
    </div>
  );
}

export default App;
