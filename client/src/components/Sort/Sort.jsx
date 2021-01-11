import React from 'react';
import './Sort.css'

const Sort = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value)
}

  return (
    <div>
      
    </div>
  );
};

export default Sort;