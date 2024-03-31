import React from 'react'

export default function Food({meatConsumption,
dairyConsumption,
plantConsumption,handleChange}) {
  return (
    <>
    <fieldset style={{padding:"2%"}}>
    <legend><h3>Food </h3></legend>
      <label>
        
        <input type="number" name="meatConsumption" value={meatConsumption}  placeholder="Meat Consumption (grams)" onChange={handleChange} />
      </label>
      <br />
      <label>
        
        <input type="number" name="dairyConsumption" value={dairyConsumption}  placeholder="Dairy Consumption (grams)" onChange={handleChange} />
      </label>
      <br />
      <label>
        
        <input type="number" name="plantConsumption" value={plantConsumption}  placeholder="Plant Consumption (grams):" onChange={handleChange} />
      </label>
      <br />
      </fieldset>
      <br />
    </>
  )
}
