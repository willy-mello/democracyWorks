import React from 'react'
const states = require('../us_state')





const DefaultForm = (props) => {
  return (

    <form onSubmit={props.handleSubmit}>
      <label htmlFor='street1'>Street Address 1:</label>
      <input type='text' name='street1' value={props.street1} onChange={props.handleChange} />
      <label htmlFor='street2'>Street Address 2:</label>
      <input type='text' name='street2' value={props.street2} onChange={props.handleChange} />
      <label htmlFor='city'>City:</label>
      <input type='text' name='city' value={props.city} onChange={props.handleChange} />
      <label htmlFor='state'>State:</label>
      <select type='text' name='state' value={props.state} onChange={props.handleChange} >
        <option value=''></option>
        {states.map((elem, idx) => {
          return (<option key={idx} value={elem.toLowerCase()}>{elem}

          </option>)
        })}
      </select>
      <button type='submit'>Submit</button>
    </form>


  )
}

export default DefaultForm