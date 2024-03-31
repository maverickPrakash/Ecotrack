import React,{ useState }  from 'react'
import '../styles/CarbonFootprintCalculator.css'; 
import House from './House';
import {useMultistageForm} from "../useMultistepForm"
import Transport from './Transport';
import Food from './Food';
import Others from './Others';
import { useNavigate } from 'react-router-dom';

import '../styles/ShowData.css'



export default function CarbonFootprintCalculator() {
 const INITIAL_DATA = {
  electricityConsumption: '',
  naturalGasConsumption: '',
  milesDriven: '',
  flights: '',
  flightDistance: '',
  meatConsumption: '',
  dairyConsumption: '',
  plantConsumption: '',
  wasteGeneration: '',
  monthlySpending: '',
  bus:'',
  coach:'',
  rail:'',
  subway:'',
  taxi:''

}
const [formData, setFormData] = useState(INITIAL_DATA);
const navigate = useNavigate()


  
  const handleChange = (e) => {
    const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
    });
  };


  
    const calculateIndividualEmissions = (formData) => {
      // Calculate emissions for each component using provided emission factors
      const electricityEmission = formData.electricityConsumption * 0.4;
      const naturalGasEmission = formData.naturalGasConsumption * 0.2;
      const vehicleEmission = formData.milesDriven * 0.25;
      const flightEmission = formData.flights * formData.flightDistance * 0.2;
      const meatEmission = formData.meatConsumption * 10;
      const dairyEmission = formData.dairyConsumption * 3;
      const plantEmission = formData.plantConsumption * 0.5;
      const wasteEmission = formData.wasteGeneration * 0.5;
      const consumptionEmission = formData.monthlySpending * 0.1;
      const busEmission = formData.bus * 0.3;
      const coachEmission = formData.coach * 0.2;
      const nationalRailEmission = formData.rail * 0.15;
      const tubeSubwayEmission = formData.subway * 0.12;
      const taxiEmission = formData.taxi * 0.25;
    
      return {
        electricityEmission,
        naturalGasEmission,
        vehicleEmission,
        flightEmission,
        meatEmission,
        dairyEmission,
        plantEmission,
        wasteEmission,
        consumptionEmission,
        busEmission,
        coachEmission,
        nationalRailEmission,
        tubeSubwayEmission,
        taxiEmission
      };
    };
    const calculateTotalCarbonFootprint = (individualEmissions) => {
      // Sum up emissions from all components to get total carbon footprint
      const totalCarbonFootprint = (
        Object.values(individualEmissions).reduce((acc, val) => acc + val, 0)
      ).toFixed(2); // Round to 2 decimal places
    
      return totalCarbonFootprint;
    };
    const[individualData, setIndividualData] = useState('')

  
    const handleSubmit = (e) => {
      e.preventDefault();

      if(isLastStep){
     
        const carbonFootprint = calculateTotalCarbonFootprint(calculateIndividualEmissions(formData));
      
         alert(`Your estimated carbon footprint is ${carbonFootprint} kg CO2e.`);
        
        navigate('/calculated', {state:calculateIndividualEmissions(formData)})
        
        

       
      }else{
        next()
      }
      
     
    };

    const {steps , currentStepIndex,next,back,isFirstStep, isLastStep} = useMultistageForm([<House {...formData} handleChange={handleChange} />, <Transport {...formData} handleChange={handleChange} />, <Food  {...formData}  handleChange={handleChange}/>,<Others  {...formData} handleChange={handleChange} calculateIndividualEmissions={calculateIndividualEmissions} />])

  
  return (
    <div id='carbonFootPrint' style={{ margin:" 2% auto"}}>
      <h1>Carbon Footprint Calculator Annual</h1>
      <div className='housing'>
      <form className="formHousing"  onSubmit={handleSubmit}>

     <div style={{
    top:"12%",right:"20%"}}>
      {currentStepIndex+1} / {steps.length}

     </div>
     {steps[currentStepIndex]}
     { !isFirstStep && <button type='button' onClick={back}>Back</button>}
     <button  type='submit' >{isLastStep ? "Submit" : "Next"}</button> 


  
      

  
      
    </form>
      </div>
    
    </div>
  )
  }
