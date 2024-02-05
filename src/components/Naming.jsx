import React, { useState } from 'react'
import './naming.css'
import Card from './Card';

function Naming() {

  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value)
    // console.log(inputValue);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayValue(inputValue);
  }

  return (
    <>
      <div className="inputs">
        <form className="naming" onSubmit={handleSubmit}>
          <label className='lab-txt'>Your Sweet Name</label>
          <input type="text" className='inp-txt'
            placeholder='Enter your Sweet Name'
            value={inputValue}
            onChange={handleChange} />

          <button type='submit' className="enter-btn">Enter</button>
        </form>
      </div>
      <Card value={displayValue} />
    </>
  )
}

export default Naming