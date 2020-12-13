import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNames } from '../../redux/ducks/names';
import axios from 'axios';

import Tabs from './forms/Tabs';
import NameViewer from './NameViewer';

import FormRandom from './forms/FormRandom';
import FormTemplate from './forms/FormTemplate';

const NamegenContainer = () => {
  const [form, setForm] = useState('none');

  const chooseForm = () => {
    switch (form) {
      case 'random': return <FormRandom />;
      case 'template': return <FormTemplate />;
      default: return null;
  }};

  return (
  <div className="namegen-container">
    <Tabs getActiveTab={(name) => setForm(name)} />
    {chooseForm()}
    <NameViewer />
  </div>
  );
};

export default NamegenContainer;