import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNames } from '../../redux/ducks/names';
import axios from 'axios';

import Tabs from './forms/Tabs';
import NameViewer from './NameViewer';

import FormRandom from './forms/FormRandom';
import FormTemplate from './forms/FormTemplate';

const NamegenContainer = () => {
  const [data, setData] = useState([]);
  const [words, setWords] = useState([]);
  const [endpoint, setEndpoint] = useState(0);
  const [form, setForm] = useState('none');
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNames(true, 6, 'vcvcvcv'));
  }, [dispatch]);

  var stuff = useSelector((state) => state.names.data);
  console.log(stuff);

  // useEffect(() => {
  //   if (endpoint === 0) {
  //     setData([{'word': ''}])
  //   } else if (endpoint === 1) {
  //     axios
  //       .get(`http://localhost:5000/words/${words.isWeighted}/${words.num}/${words.template}`)
  //       .then((res) => setData(res.data))
  //   } else if (endpoint === 2) {
  //     axios
  //       .get(`http://localhost:5000/words/${words.isWeighted}/${words.num}`)
  //       .then((res) => setData(res.data))
  //   }
  // }, [words, endpoint]);

  const chooseTemplate = (formData) => {
    setEndpoint(1);
    setWords(formData);
  };

  const chooseRandom = (formData) => {
    setEndpoint(2);
    setWords(formData);
  };

  const chooseForm = () => {
    switch (form) {
      case 'random': return <FormRandom onClickRandom={(formData) => chooseRandom(formData)} />;
      case 'template': return <FormTemplate onClickTemplate={(formData) => chooseTemplate(formData)} />;
      default: return null;
  }};

  return (
  <div className="namegen-container">
    <Tabs getActiveTab={(name) => setForm(name)} />
    {chooseForm()}
    <NameViewer data={data} />
  </div>
  );
};

export default NamegenContainer;