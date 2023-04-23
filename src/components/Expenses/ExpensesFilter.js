import React, {useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

let [yearFilter,yearFilterChange] = useState();

const onYearChange = (event) => {
  yearFilterChange(event.target.value);
  props.onYearFilterchange(event.target.value);
};


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select className='expenses_filter_select' onChange={onYearChange}>
        <option value='2020'>2020</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;