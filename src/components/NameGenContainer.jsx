import React from 'react';

import TypeChooserContainer from './typechooser/TypeChooserContainer';
import WordViewConatiner from './wordview/WordViewContainer';

const NameGenContainer = () => (
    <div>
        <TypeChooserContainer />
        <WordViewConatiner />
    </div>
);

export default NameGenContainer;