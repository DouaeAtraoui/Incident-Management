import React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from 'react';
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../Map/map.css'
import './List.css';

function ListHelper() {
    let INCIDENTS = [
        { id: "14", Type: "Electricité", Secteur: "Electricité", Localisaton: [33.5731104, -7.5898434], Photo: "assets/panneEle.jpg", Status: "", DateDeclaration: 11 / 11 / 2022, Etat: "En cours", Infos: "" },
        { id: "15", Type: "Electricité", Secteur: "Electricité", Localisaton: [33.566959, -7.665966], Photo: "assets/panneEle.jpg", Status: "", DateDeclaration: 11 / 11 / 2022, Etat: "En cours", Infos: "" },
        { id: "16", Type: "Electricité", Secteur: "Hydraulique", Localisaton: [33.567862, -7.673659], Photo: "assets/panneEle.jpg", Status: "", DateDeclaration: 11 / 11 / 2022, Etat: "En cours", Infos: "" },
        { id: "17", Type: "Electricité", Secteur: "Electricité", Localisaton: [33.559949, -7.672306], Photo: "assets/panneEle.jpg", Status: "", DateDeclaration: 11 / 11 / 2022, Etat: "En cours", Infos: "" },
        { id: "18", Type: "Electricité", Secteur: "Electricité", Localisaton: [33.554560, -7.684769], Photo: "assets/panneEle.jpg", Status: "", DateDeclaration: 11 / 11 / 2022, Etat: "En cours", Infos: "" },
        { id: "19", Type: "Electricité", Secteur: "Electricité", Localisaton: [33.548225, -7.706158], Photo: "assets/panneEle.jpg", Status: "", DateDeclaration: 11 / 11 / 2022, Etat: "En cours", Infos: "" }
    ];
    let [incidents, setIncidents] = useState(INCIDENTS);
    let [etat, setEtat] = useState(INCIDENTS.Etat);
    let [info, setInfo] = useState(INCIDENTS.Infos);
    const position = L.icon({
        iconUrl: '/assets/warning.png'
    });

    const center = [33.547924211066096, -7.649979898096864];

    // function handleClick(e) {
    //     e.L.flyTo(INCIDENTS.Localisaton, 16);
    // }

    let deleteRow = (e) => {
        e.preventDefault();
        let idToRemove = e.target.getAttribute("remove");
        setIncidents(incidents.filter((items) => items.id !== idToRemove));
    }

    const handleChangeEtat = (e) => {
        setEtat({
            etat,
            [e.target.name]: e.target.value,
        });
    }

    const handleChangeInfo = (e) => {
        setInfo({
            info,
            [e.target.name]: e.target.value,
        });
    }
    return (
        <div className='list-admin'>
            <div className="list_container">
        

                <TableContainer component={Paper} className="table">
                    <Table aria-label="simple table">
                        <TableHead className='table_header'>
                            <TableRow>
                                <TableCell className="tableCell">ID INCIDENT</TableCell>
                                <TableCell className="tableCell">TYPE</TableCell>
                                <TableCell className="tableCell">DATE DE DECLARATION</TableCell>
                                <TableCell className="tableCell">LOCALISATION</TableCell>
                                <TableCell className="tableCell">ETAT</TableCell>
                                <TableCell className="tableCell">RETRO-INFORMATION</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {INCIDENTS.map((incident) => (
                                <TableRow key={incident.id}>
                                    <TableCell className="tableCell_id">
                                        <a href={incident.Photo} target="_blank">#{incident.id}</a>
                                    </TableCell>
                                    <TableCell className="tableCell">{incident.Type}</TableCell>
                                    <TableCell className="tableCell">{incident.DateDeclaration}</TableCell>
                                    {/* <TableCell className="tableCell"><button type='button' onClick={handleClick}><i class="uil uil-map-marker"></i></button></TableCell> */}
                                    <TableCell className="tableCell">{incident.Localisaton}</TableCell>
                                    <TableCell className="tableCell">
                                        <select
                                            name='etat'
                                            className='etat_input'
                                            onChange={handleChangeEtat}>
                                            <option value="En cours" selected>En cours</option>
                                            <option value="Traité">Traité</option>
                                        </select>
                                    </TableCell>
                                    <TableCell className="tableCell">
                                        <textarea
                                            name="story"
                                            rows="2"
                                            cols="20"
                                            placeholder="Entrer votre rétro_information concernant l'incident"
                                        >
                                        </textarea>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <div className='map-container-admin' id='map'>
                <div className='map-admin'>
                    <MapContainer
                        center={center}
                        zoom={12}
                        style={{ width: "50vw", height: "56vh", textAlign: "center" }}
                    >

                        <TileLayer
                            url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=7LXBBrMaDv8G9TApaEhm"
                        />

                        {/* <Marker position={incident} icon={position}>
                        <Popup>
                            Incident<br /> Secteur: Electricité
                        </Popup>
                    </Marker> */}

                        {INCIDENTS.map(incident =>
                            <Marker position={incident.Localisaton} icon={position}>
                                <Popup>
                                    <div className='PopUp_container'>
                                        <h4>Incident {incident.id}</h4>
                                        <h4>Secteur: {incident.Secteur}</h4>
                                        <img src={incident.Photo} />
                                    </div>
                                </Popup>
                            </Marker>
                        )}

                    </MapContainer>
                </div>

            </div>
        </div>
    )
}

export default ListHelper