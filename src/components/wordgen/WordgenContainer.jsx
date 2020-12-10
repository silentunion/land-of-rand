import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import WordMenu from './menuWordgen';
import WordView from './viewWord';
import FormRandom from './forms/formRandom';
import FormTemplate from './forms/formTemplate';

const WordgenContainer = () => {
  const [data, setData] = useState([]);
  const [words, setWords] = useState([]);
  const [endpoint, setEndpoint] = useState(0);
  const [form, setForm] = useState(0);
  
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
  }, [words, endpoint]);

  const handleEvent = event => {
    setEndpoint(2);
    setWords({'num': 5});
  };

  const changeTemplate = (formData) => {
    setEndpoint(1);
    setWords(formData);
  };

  const testThis = (tab) => {
    console.log('Tab' + tab);
    setForm(tab);
    console.log('Form ' + form);
  };

  return (
  <div className="wordgen-container">
    <WordMenu tabSelector={(tab) => testThis(tab)} />
    <div>
      {form === 0 ? 
        <FormRandom onClickRandom={handleEvent} /> : 
        <FormTemplate onceSubmitted={(formData) => changeTemplate(formData)} />}
    </div>
    <WordView data={data} />
  </div>
  );
};

export default WordgenContainer;