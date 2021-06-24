import React from 'react';

import {SortType} from '../../../const';
import SortingOption from './sorting-option';

function SortingOptionsList() {
  const sortingOptions = Object.values(SortType);
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {sortingOptions.map((option) => <SortingOption key={option} sortingType={option}/>)}
    </ul>
  );
}


export default SortingOptionsList;
