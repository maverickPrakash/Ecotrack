import React from 'react'

export default function Others({ wasteGeneration,
monthlySpending,handleChange}) {
  return (
    <>

<fieldset style={{padding:"2%"}}>
    <legend><h3>Others </h3></legend>
      
      <label>
        
        <input type="number" name="wasteGeneration" value={wasteGeneration}  placeholder="Waste Generation (kilograms)" onChange={handleChange} />
      </label>
      <br />
      <label>
        
        <input type="number" name="monthlySpending" value={monthlySpending}  placeholder="Monthly Spending (CAD):" onChange={handleChange} />
      </label>
      <br />
      </fieldset>
    </>
  )
}
