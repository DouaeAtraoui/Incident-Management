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
import { MapContainer, TileLayer, Marker, Popup, useMapEvent, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../Map/map.css'
import './List.css';


function ListAdmin() {
    let INCIDENTS = [
        { id: "14", Type: "Electricité", Secteur: "Electricité", Localisaton: [33.5731104, -7.5898434], Photo: "assets/enPanne.jpg", Status: "", DateDeclaration: "11/11/2022", Etat: "En cours" },
        { id: "15", Type: "Electricité", Secteur: "Automobile", Localisaton: [33.566959, -7.665966], Photo: "assets/enPanne.jpg", Status: "", DateDeclaration: "04/08/2022", Etat: "En cours" },
        { id: "16", Type: "Electricité", Secteur: "Hydraulique", Localisaton: [33.567862, -7.673659], Photo: "assets/enPanne.jpg", Status: "", DateDeclaration: "22/06/2022", Etat: "En cours" },
        { id: "17", Type: "Electricité", Secteur: "Immobilier", Localisaton: [33.559949, -7.672306], Photo: "assets/enPanne.jpg", Status: "", DateDeclaration: "24/06/2022", Etat: "En cours" },
        { id: "18", Type: "Electricité", Secteur: "Electroménager", Localisaton: [33.554560, -7.684769], Photo: "assets/enPanne.jpg", Status: "", DateDeclaration: "18/05/2022", Etat: "En cours" },
        { id: "19", Type: "Electricité", Secteur: "Electricité", Localisaton: [33.548225, -7.706158], Photo: "assets/enPanne.jpg", Status: "", DateDeclaration: "02/02/2022", Etat: "En cours" }
    ];

    let HELPERS = [
        { id: "14", Nom: "Sohaib mounir", DateAcces: "20/03/2022", Secteur: "Electricité", Activite: "", Province: "CASABLANCA" },
        { id: "15", Nom: "Hafsa Meataoui", Secteur: "Automobile", Activite: "", DateAcces: "11/11/2022", Province: "CASABLANCA" },
        { id: "16", Nom: "Kaouthar Hamdaoui", Secteur: "Hydraulique", Activite: "", DateAcces: "11/11/2022", Province: "MOHAMMEDIA" },
        { id: "17", Nom: "Fatima Bourzik", Secteur: "Immobilier", Activite: "", DateAcces: "11/11/2022", Province: "CASABLANCA" },
        { id: "18", Nom: "Saad Benziane", Secteur: "Electroménager", Activite: "", DateAcces: "11/11/2022", Province: "MEDIOUNA" },
        { id: "19", Nom: "Youssef Dehbi", Secteur: "Electricité", Activite: "", DateAcces: "11/11/2022", Province: "NOUACEUR" },
        { id: "19", Nom: "Youssef Dehbi", Secteur: "Electricité", Activite: "", DateAcces: "11/11/2022", Province: "MEDIOUNA" },
        { id: "19", Nom: "Youssef Dehbi", Secteur: "Immobilier", Activite: "", DateAcces: "11/11/2022", Province: "CASABLANCA" },
        { id: "19", Nom: "Youssef Dehbi", Secteur: "Immobilier", Activite: "", DateAcces: "11/11/2022", Province: "MOHAMMEDIA" },
        { id: "19", Nom: "Youssef Dehbi", Secteur: "Electricité", Activite: "", DateAcces: "11/11/2022", Province: "MEDIOUNA" },
        { id: "19", Nom: "Youssef Dehbi", Secteur: "Electricité", Activite: "", DateAcces: "11/11/2022", Province: "CASABLANCA" },
        { id: "19", Nom: "Youssef Dehbi", Secteur: "Hydraulique", Activite: "", DateAcces: "11/11/2022", Province: "MOHAMMEDIA" }
    ];

    const [isShowen, setIsShowen] = useState(false)
    const [status, setStatus] = useState("");
    const position = L.icon({
        iconUrl: '/assets/warning.png'
    });

    const center = [33.547924211066096, -7.649979898096864];

    // function handleClick(e) {
    //     e.L.flyTo(INCIDENTS.Localisaton, 16);
    // }

    let [incidents, setIncidents] = useState(INCIDENTS);

    const handleDelete = (incidentIndex) => {
        setIncidents((prevIncident) =>
            prevIncident.filter((_, index) => index !== incidentIndex)
        );
    };

    const [incidentsOpen, setIncidentsOpen] = useState(true);
    const [helpersOpen, setHelpersOpen] = useState(false);

    const handleClickIndicents = (e) => {
        e.preventDefault();
        setHelpersOpen(false)
        setIncidentsOpen(true);
    }
    const handleClickHelpers = (e) => {
        e.preventDefault();
        setIncidentsOpen(false);
        setHelpersOpen(true);
    }

    const [activite, setActivite] = useState(HELPERS.Activite);
    const handleChangeActivite = (e) => {
        setActivite({
            activite,
            [e.target.name]: e.target.value,
        });
    }

    const [province, setProvince] = useState(false);
    const handleClickFilterProvince = (e) => {
        e.preventDefault();
        setProvince(true)
    }


    return (
        <>
            <nav className='nav'>
                <ul className="navbar-community" >
                    <li className='items'>
                        <button className='nav-btn' onClick={handleClickIndicents}>Incidents</button>
                    </li>

                    <li className='items'>
                        <button className='nav-btn' onClick={handleClickHelpers}>Professionnels</button>
                    </li>
                </ul>
                <hr style={{ color: 'rgba(109, 181, 202, 1)' }} />
            </nav>

            {/* list of incidents */}
            {incidentsOpen && (
                <div className='list-admin'>
                    <div className="list_container">

                        <TableContainer component={Paper} className="table">
                            <Table aria-label="simple table">
                                <TableHead className='table_header'>
                                    <TableRow>
                                        <TableCell className="tableCell">ID INCIDENT</TableCell>
                                        <TableCell className="tableCell">TYPE</TableCell>
                                        <TableCell className="tableCell">SECTEUR</TableCell>
                                        <TableCell className="tableCell">DATE DE DECLARATION</TableCell>
                                        <TableCell className="tableCell">LOCALISATION</TableCell>
                                        <TableCell className="tableCell">ACTION</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {incidents.map((incident, incidentIndex) => (
                                        <TableRow key={incident.id}>
                                            <TableCell className="tableCell_id">
                                                <a href={incident.Photo} target="_blank">#{incident.id}</a>
                                            </TableCell>
                                            <TableCell className="tableCell">{incident.Type}</TableCell>
                                            <TableCell className="tableCell">{incident.Secteur}</TableCell>
                                            <TableCell className="tableCell">{incident.DateDeclaration}</TableCell>
                                            {/* <TableCell className="tableCell"><button type='button' onClick={handleClick}><i class="uil uil-map-marker"></i></button></TableCell> */}
                                            <TableCell className="tableCell">{incident.Localisaton}</TableCell>
                                            <TableCell className="tableCell">
                                                <div className='action_status'>
                                                    <button type='button' className='action_icon' onClick={() => handleDelete(incidentIndex)}><i className="uil uil-check"></i></button>
                                                    <button type='button' className='action_icon' onClick={() => handleDelete(incidentIndex)}><i className="uil uil-trash-alt"></i></button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <div className='map-container-admin' id='map'>
                            <div className='map-admin'>
                                <MapContainer
                                    center={center}
                                    zoom={12}
                                    scrollWheelZoom={false}
                                    style={{ width: "48vw", height: "80vh", textAlign: "center" }}
                                >


                                    <TileLayer
                                        url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=7LXBBrMaDv8G9TApaEhm"
                                    />



                                    {INCIDENTS.map((incident, index) => {
                                        return (
                                            <Marker
                                                eventHandlers={{
                                                    click: () => {
                                                        L.setView(
                                                            [
                                                                incident.Localisaton
                                                            ],
                                                            14
                                                        );
                                                    }
                                                }}
                                                key={incident.id}
                                                position={
                                                    incident.Localisaton
                                                }
                                                icon={position}
                                            >
                                                <Popup>
                                                    <div className='PopUp_container'>
                                                        <h4>Incident {incident.id}</h4>
                                                        <h4>Secteur: {incident.Secteur}</h4>
                                                        <img src={incident.Photo} />
                                                    </div>
                                                </Popup> 
                                                </Marker>
                                        );
                                    })}
                                                {/* {INCIDENTS.map(incident =>
                                        <Marker position={incident.Localisaton} icon={position}>
                                            <Popup>
                                                <div className='PopUp_container'>
                                                    <h4>Incident {incident.id}</h4>
                                                    <h4>Secteur: {incident.Secteur}</h4>
                                                    <img src={incident.Photo} />
                                                </div>
                                            </Popup>
                                        </Marker>
                                    )} */}
                                            

                                </MapContainer>
                            </div>

                        </div>

                    </div>
                </div>
            )}


            <div className='filter'>
                <div className={isShowen ? "header-active" : "header"}>
                    <button type='button' className='btn' onClick={() => setIsShowen(!isShowen)}>
                        <i class="uil uil-filter"></i>
                        <span>Filtrer par</span>
                    </button>
                    <div className='items'>
                        <button type='button' className='btn-item' onClick={handleClickFilterProvince}>
                            <i class="uil uil-circle footer__icon"></i>
                            <span>Province</span>

                        </button>
                        <button type='button' className='btn-item'>
                            <i class="uil uil-circle footer__icon"></i>

                            <span>Secteur</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* list of professionnels */}
            {helpersOpen && (
                <div className='list-admin'>
                    <div className="list_container">
                        <TableContainer component={Paper} className="table">
                            <Table aria-label="simple table">
                                <TableHead className='table_header'>
                                    <TableRow>
                                        <TableCell className="tableCell">ID PROFESSIONEL</TableCell>
                                        <TableCell className="tableCell">NOM</TableCell>
                                        <TableCell className="tableCell">SECTEUR</TableCell>
                                        <TableCell className="tableCell">DATE D'ACCES</TableCell>
                                        <TableCell className="tableCell">PROVINCE</TableCell>
                                        <TableCell className="tableCell">ACTIVITE</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {HELPERS.map((helper) => (
                                        <TableRow key={helper.id}>
                                            <>
                                                <TableCell className="tableCell_id">#{helper.id}</TableCell>
                                                <TableCell className="tableCell">{helper.Nom}</TableCell>
                                                <TableCell className="tableCell">{helper.Secteur}</TableCell>
                                                <TableCell className="tableCell">{helper.DateAcces}</TableCell>
                                                <TableCell className="tableCell">{helper.Province}</TableCell>
                                                {/* <TableCell className="tableCell"><button type='button' onClick={handleClick}><i class="uil uil-map-marker"></i></button></TableCell> */}
                                                <TableCell className="tableCell"><select
                                                    name='activite'
                                                    className='etat_input'
                                                    onChange={handleChangeActivite}>
                                                    <option value="En cours" selected>Actif</option>
                                                    <option value="Traité">En repos</option>
                                                    <option value="Traité">Inactif</option>
                                                </select></TableCell>

                                            </>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            )}

        </>
    )
}

export default ListAdmin