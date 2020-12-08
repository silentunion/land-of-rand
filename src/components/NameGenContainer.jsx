import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import TypeChooser from './typechooser/typechooser.component';
import WordView from './wordview/wordview.component';

const NameGenContainer = () => {
    const [data, setData] = useState([]);
    const [template, setTemplate] = useState('');
    const [num, setNum] = useState(5);

    useEffect(() => {
        console.log(template);
        fetchData();
        console.log(template);
    }, [template]);

    const fetchData = () => {
        axios
            .get(`http://localhost:5000/words/${num}/${template.template}`)
            .then((res) => setData(res.data))
            .then(() => console.log(num, template))
    };

    const changeTemplate = (temp) => {
        setTemplate(temp);
    };

    return (
    <div>
        <TypeChooser onceSubmitted={(temp) => changeTemplate(temp)} />
        <WordView data={data} />
    </div>
    );
};

export default NameGenContainer;