import React from 'react';
import './main.scss';
import WordViewContainer from './components/wordview/WordViewContainer';
import TypeChooserContainer from './components/typechooser/TypeChooserContainer';

function App() {
  return (
    <div className="App">
      <TypeChooserContainer />
      <WordViewContainer />
    </div>
  );
}

export default App;
