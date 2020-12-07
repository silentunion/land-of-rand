import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import TypeChooser from './typechooser/typechooser.component';
import WordView from './wordview/wordview.component';

const NameGenContainer = () => {
    const [data, setData] = useState([]);
    const [template, setTemplate] = useState('vc');
    const [num, setNum] = useState(5);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/words/${template}/${num}`)
            .then((res) => setData(res.data))
    }, []);

    const changeTemplate = (temp) => {
        setTemplate(temp);
        console.log(temp);
        return (
            <div>
                <WordView temp={template} data={data} />
            </div>
        );
    };

    return (
    <div>
        <TypeChooser setTemplate={(temp) => changeTemplate('vvcccccv')} />
        <WordView temp={template} data={data} />
    </div>
    );
};

export default NameGenContainer;