import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import WordMenu from './wordmenu.component'
import WordForm from './wordform.component';
import WordView from './wordview.component';

const WordgenContainer = () => {
  const [data, setData] = useState([]);
  const [words, setWords] = useState([]);
  const [endpoint, setEndpoint] = useState(0);
  
  useEffect(() => {
    if (endpoint === 0) {
      setData([{'word': ''}])
    } else if (endpoint === 1) {
      axios
        .get(`http://localhost:5000/words/${words.num}/${words.template}`)
        .then((res) => setData(res.data))
    } else if (endpoint === 2) {
      axios
        .get(`http://localhost:5000/words/random/${words.num}`)
        .then((res) => setData(res.data))
    }
  }, [words]);

  const handleEvent = event => {
    setEndpoint(2);
    setWords({'num': 5});
  };

  const changeTemplate = (formData) => {
    setEndpoint(1);
    setWords(formData);
  };

  return (
  <div className="wordgen-container">
    <WordMenu />
    <WordForm 
      onClickRandom={handleEvent}
      onceSubmitted={(formData) => changeTemplate(formData)} />
    <WordView data={data} />
  </div>
  );
};

export default WordgenContainer;