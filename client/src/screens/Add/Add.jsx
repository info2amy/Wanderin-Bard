import React from 'react';


const Add = () => {

  return (
    <div>
      <form onSubmit={handleSubmit} className='addForm'>
        <input placeholder='Instrument Name'></input>
        <input placeholder='Img Url'></input>
      </form>
    </div>
  );
};

export default Add;