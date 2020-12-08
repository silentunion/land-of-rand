import React from 'react';


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