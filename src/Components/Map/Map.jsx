import React from 'react';
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css'

function Map() {
    const INCIDENTS = [
        { id: "14", Type: "Electricité", Secteur: "Electricité", Localisaton: [33.5731104, -7.5898434], Photo: "assets/enPanne.jpg", Status: "" },
        { id: "15", Type: "Electricité", Secteur: "Automobile", Localisaton: [33.566959, -7.665966], Photo: "assets/enPanne.jpg", Status: "" },
        { id: "16", Type: "Electricité", Secteur: "Hydraulique", Localisaton: [33.567862, -7.673659], Photo: "assets/enPanne.jpg", Status: "" },
        { id: "17", Type: "Electricité", Secteur: "Immobilier", Localisaton: [33.559949, -7.672306], Photo: "assets/enPanne.jpg", Status: "" },
        { id: "18", Type: "Electricité", Secteur: "Electroménager", Localisaton: [33.554560, -7.684769], Photo: "assets/enPanne.jpg", Status: "" },
        { id: "19", Type: "Electricité", Secteur: "Electricité", Localisaton: [33.548225, -7.706158], Photo: "assets/enPanne.jpg", Status: "" }
    ];



    const position = L.icon({
        iconUrl: '/assets/warning.png'
    })

    const center = [33.547924211066096, -7.649979898096864];
    ;
    return (
        <div className='map-container' id='map'>
            <div className='map'>
                <MapContainer
                    center={center}
                    zoom={12}
                    style={{ width: "80vw", height: "80vh", textAlign: "center" }}
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
                                    <h4>Incident</h4>
                                    <h4>Secteur: {incident.Secteur}</h4>
                                    <img src={incident.Photo} />
                                </div>
                            </Popup>
                        </Marker>
                    )}

                </MapContainer>
            </div>

        </div>
    )
}

export default Map