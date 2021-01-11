import React from 'react';
import './Sort.css'

const Sort = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value)
}

  return (
    <div>
        <form className="sort-container" onSubmit={props.handleSubmit}>
            <label htmlFor="sort">SORT BY:</label>
            <select className="sort" onChange={handleChange}>
                <option className="option" value="name-ascending" >&nbsp; Alphabetically, A-Z &nbsp;</option>
                <option value="name-descending">&nbsp; Alphabetically, Z-A &nbsp;</option>
                <option value="price-ascending">&nbsp; Price, low to high &nbsp;</option>
                <option value="price-descending">&nbsp; Price, high to low &nbsp;</option>
            </select>
        </form>
    </div>
  );
};

export default Sort;