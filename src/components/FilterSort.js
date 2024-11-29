import React, { useState } from 'react';
import '../styles/FilterSort.css';


const FilterSort = ({ onFilterChange, onSortChange }) => {
  return (
    <div className="filter-sort">
      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default FilterSort;
