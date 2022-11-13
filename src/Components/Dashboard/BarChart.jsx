import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { incident } from './Data';
import { Chart as ChartJS } from 'chart.js/auto';


function BarChart() {
  let INCIDENTS = [
    { id: "14", Type: "Electricité", Secteur: "Electricité", Localisaton: [33.5731104, -7.5898434], Photo: "assets/enPanne.jpg", Status: "", DateDeclaration: "11/11/2022", Etat: "En cours", Province: "Casablanca"},
    { id: "15", Type: "Electricité", Secteur: "Automobile", Localisaton: [33.566959, -7.665966], Photo: "assets/enPanne.jpg", Status: "", DateDeclaration: "04/08/2022", Etat: "En cours", Province: "Nouacer"},
    { id: "16", Type: "Electricité", Secteur: "Hydraulique", Localisaton: [33.567862, -7.673659], Photo: "assets/enPanne.jpg", Status: "", DateDeclaration: "22/06/2022", Etat: "En cours", Province: "Mediouna"},
    { id: "17", Type: "Electricité", Secteur: "Immobilier", Localisaton: [33.559949, -7.672306], Photo: "assets/enPanne.jpg", Status: "", DateDeclaration: "24/06/2022", Etat: "En cours", Province: "Mohemmadia"},
    // { id: "18", Type: "Electricité", Secteur: "Electroménager", Localisaton: [33.554560, -7.684769], Photo: "assets/enPanne.jpg", Status: "", DateDeclaration: "18/05/2022", Etat: "En cours", Province: "Casablanca"},
  ];
  const [incidentData, setIncidentData] = useState({
    labels: INCIDENTS.map((incident) => incident.Province),
    datasets: [{
      data: incident.map((incident) => incident.num),
      label:"Nombre d'incidents par province",
      backgroundColor: ["#55D5E0", "#335F8A", "#2F4558", "#F6B12D", "#F26619"]
    }]
  })
  return (
    <Bar
      data={incidentData}
      
    />

  )
}

export default BarChart