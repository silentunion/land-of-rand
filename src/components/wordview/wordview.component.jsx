import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const WordView = ({template, data}) => {

    return(
        <div className="wordview-scrollbox">
            {data.map(({word}) => (
                <li key={word}>{word}</li>
            ))}
        </div>
    );
};

export default WordView;