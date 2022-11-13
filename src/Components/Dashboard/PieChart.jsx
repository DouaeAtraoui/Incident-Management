import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { incident } from './Data';
import { Chart as ChartJS } from 'chart.js/auto';


function PieChart() {
  let HELPERS = [
    { id: "14", Nom: "Sohaib mounir", DateAcces: "20/03/2022", Secteur: "Electricité", Activite: "", Province: "CASABLANCA" },
    { id: "15", Nom: "Hafsa Meataoui", Secteur: "Automobile", Activite: "", DateAcces: "11/11/2022", Province: "CASABLANCA" },
    { id: "16", Nom: "Kaouthar Hamdaoui", Secteur: "Hydraulique", Activite: "", DateAcces: "11/11/2022", Province: "MOHAMMEDIA" },
    { id: "17", Nom: "Fatima Bourzik", Secteur: "Immobilier", Activite: "", DateAcces: "11/11/2022", Province: "CASABLANCA" },
  ];
  const [incidentData, setIncidentData] = useState({
    labels: HELPERS.map((helper) => helper.Secteur),
    datasets: [{
      label: "Le nombre d'incidents par secteur",
      data: incident.map((incident) => incident.num),
      backgroundColor: ["#55D5E0", "#335F8A", "#2F4558", "#F6B12D", "#F26619"]
    }]
  })
  return (
    <Pie
      data={incidentData}
    />

  )
}

export default PieChart