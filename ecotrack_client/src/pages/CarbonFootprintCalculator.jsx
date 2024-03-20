import React from 'react'

export default function CarbonFootprintCalculator() {
  return (
    <div>
      <h1>Carbon Footprint Calculator</h1>
      <div className='housing'>
        <form>
          <label htmlFor="countries">Select Country of Residence</label>
          <select name='countries'>
            <option value="canada">Canada</option>
            <option value="usa">United States of America</option>
          </select>
          <h2>Housing</h2>
          <label>Electricity: </label>
          <input type="text" placeholder='kWh/year'/>
          <label>Natural Gas: </label>
          <input type="text" placeholder='therms/year'/>
          <label>Heating Oil: </label>
          <input type="text" placeholder='gallons/year'/>
          <button type='submit'>Calculate</button>
        </form>
      </div>
    </div>
  )
}
