import React, {useState} from 'react';
import {Line} from 'react-chartjs-2';
import {incident} from './Data';
import { Chart as ChartJS } from 'chart.js/auto';


function LineChart() {
    const [incidentData, setIncidentData] = useState({
        labels: incident.map((incident) => incident.year),
        datasets: [{
            label: "Le nombre d'incidents déclarés par année",
            data: incident.map((incident) => incident.num),
            backgroundColor: ["#9BAEBF","#636D73"]
        }]
    })
  return (
    <Line
    data={incidentData}
    />

  )
}

export default LineChart