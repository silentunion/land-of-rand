import React from 'react';
import NamegenContainer from '../components/namegen/NamegenContainer';
import ExtraSpace from '../components/ExtraSpace/ExtraSpace';

const Names = () => {
  return (
    <div className="page-home-names">
      <div className="page-home-namegen">
        <NamegenContainer />
      </div>
      <ExtraSpace />
    </div>
  )
};

export default Names;