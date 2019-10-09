import React from 'react';

import ListView from '../components/ListView';
import SearchBar from '../components/SearchBar';


const ComponentListPage = (props) => {
  return (
    <div>
      <SearchBar />
      <ListView/>
    </div>
  )
};

export default ComponentListPage;

