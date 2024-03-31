import React from 'react'

export default function House({electricityConsumption,naturalGasConsumption,handleChange}) {
  return (
    <> <fieldset style={{padding:"2%"}}>
    <legend><h3>House </h3></legend>

    
      <label>
      
        <input type="number"  required name="electricityConsumption" value={electricityConsumption} placeholder="Electricity Consumption (kWh)" onChange={handleChange} />
      </label>
      <br />
      <label>
        
        <input type="number" required name="naturalGasConsumption" value={naturalGasConsumption} placeholder="Natural Gas Consumption (therms)" onChange={handleChange} />
      </label>

      
      </fieldset>
      </>
  )
}
