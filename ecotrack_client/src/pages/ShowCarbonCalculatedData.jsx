import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import{ Chart as ChartJS} from 'chart.js/auto'
import { Bar , Pie} from 'react-chartjs-2';
export default function ShowCarbonCalculatedData() {
  const location = useLocation();

  // Check if location.state exists and is not undefined
  if (!location.state) {
    return <div>No data available</div>;
  }

  const emissionKeys = [
    'electricityEmission',
    'naturalGasEmission',
    'vehicleEmission',
    'flightEmission',
    'meatEmission',
    'dairyEmission',
    'plantEmission',
    'wasteEmission',
    'consumptionEmission',
    'busEmission',
    'coachEmission',
    'nationalRailEmission',
    'tubeSubwayEmission',
    'taxiEmission'
  ];

  const color = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink',
    'brown',
    'cyan',
    'magenta',
    'lime',
    'teal',
    'lavender',
    'indigo'
  ];

  const data = {
    labels: emissionKeys.map(key => key.replace(/([A-Z])/g, ' $1').trim()), // Add space before uppercase letters
    datasets: [{
      data: emissionKeys.map(key => location.state[key] || 0),
      backgroundColor: color
    }]
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom', // Position legend below the chart
        labels: {
          usePointStyle: true // Use point style for legend labels
        }
      },
      datalabels: {
        color: '#fff',
        formatter: (value, ctx) => {
          let sum = ctx.dataset.data.reduce((acc, val) => acc + val, 0);
          let percentage = ((value * 100) / sum).toFixed(2) + '%';
          return percentage;
        }
      }
    }
  };

  // const totalCarbonFootprint = (
  //   Object.values(location.state).reduce((acc, val) => acc + val, 0)
  // ).toFixed(2);
  const sum = Object.values(location.state).reduce((acc, val) => acc + val, 0);
  
  

  return (
    <div className='ShowData'>
      <h1>Show Carbon Calculated Data</h1>
      <h2 style={{textAlign:"center"}}>Total Carbon Emission : {sum} Kg CO<sub>2</sub></h2>
      
      <Bar className='BarGraph'
        data={{
          labels: ['Carbon Emission'],
          datasets: emissionKeys.map((key, index) => ({
            label: key.charAt(0).toUpperCase() + (key.replace(/([A-Z])/g, ' $1').trim()).slice(1), // Add space before uppercase letters
            data: [location.state[key] || 0],
            backgroundColor: color[index]
          }),
          
          )
          
        }
      }

      options={{
        scales: {
          x: {
            ticks: {
              font: {
                size: 25,
                weight:'bold',
                family:'lora',
                color:'white'
                
              }
            }
          }
        }
      }}
      />

      <Pie className='PieGraph' data={data} options={options} />

      
    </div>
  );
}
