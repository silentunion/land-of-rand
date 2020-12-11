import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Tabs from './forms/Tabs';
import NameViewer from './NameViewer';

import FormRandom from './forms/FormRandom';
import FormTemplate from './forms/FormTemplate';

const NamegenContainer = () => {
  const [data, setData] = useState([]);
  const [words, setWords] = useState([]);
  const [endpoint, setEndpoint] = useState(0);
  const [form, setForm] = useState('None');
  
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

  const handleFormRandom = () => {
    setEndpoint(2);
    setWords({'num': 5});
  };

  const changeTemplate = (formData) => {
    setEndpoint(1);
    setWords(formData);
  };

  const chooseForm = () => {
    switch (form) {
      case 'Random': return <FormRandom onClickRandom={handleFormRandom} />;
      case 'Template': return <FormTemplate onceSubmitted={(formData) => changeTemplate(formData)} />;
      default: return null;
  }};

  return (
  <div className="namegen-container">
    <Tabs getActiveTab={(tab) => setForm(tab)} />
    {chooseForm()}
    <NameViewer data={data} />
  </div>
  );
};

export default NamegenContainer;