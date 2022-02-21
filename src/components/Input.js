import React, { useState } from 'react'

  const Input = () => {
    const [size, setSize] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({size})
    }
    return (
      <form onSubmit = {handleSubmit}>
          <h4>Enter table size</h4>
          <input 
            type="number"
            value = {size}
            onChange={ (e) => setSize(e.target.value)}
          />
          <button type="submit">
            Submit
          </button>
      </form>
    )
  }

  export default Input;