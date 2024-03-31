import React from 'react'

export default function Transport({milesDriven,
flights,
flightDistance,
 bus,
coach,
rail,
subway,
taxi,handleChange}) {
  return (
    <>
        <fieldset style={{padding:"2%"}}>
    <legend><h3>Transport </h3></legend>
      <label>
        
        <input type="number" required name="milesDriven"  placeholder="Miles Driven" value={milesDriven}  onChange={handleChange}/>
      </label>
      <br />
      <label>
        
        <input type="number" required name="flights"  placeholder="Number Of flights" value={flights} onChange={handleChange}/>
      </label>
      <br />
      <label>
        
        <input type="number" required  name="flightDistance"  placeholder="Average Flight Distance (miles)" value={flightDistance}  onChange={handleChange}/>
      </label>

      <label>
              <input type="number" required name="bus"  placeholder="Bus (miles)" value={bus}  onChange={handleChange}/>
            </label>
            <br />
            <label>
              <input type="number" required name="coach" placeholder="Coach (miles)" value={coach} onChange={handleChange}/>
            </label>
            <br />
            <label>
              <input type="number"  required name="rail"  placeholder="Rail (miles)" value={rail} onChange={handleChange} />
            </label>
            <br />
            <label>
              <input type="number" required name="subway"  placeholder="Subway (miles)" value={subway} onChange={handleChange} />
            </label>
            <br />
            <label>
              <input type="number" required name="taxi"  placeholder="Taxi (miles)" value={taxi} onChange={handleChange} />
            </label>
      <br />
      </fieldset>
      <br />
    </>
  )
}
