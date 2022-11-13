import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "./styles.css";
import icon from "../../../public/assets/warning.png";

function Markers({ data }) {
  const map = useMap();
  return (
    data.length > 0 &&
    data.map((marker, index) => {
      return (
        <Marker
          eventHandlers={{
            click: () => {
              map.setView(
                [
                  marker.geometry.coordinates[1],
                  marker.geometry.coordinates[0]
                ],
                14
              );
            }
          }}
          key={index}
          position={{
            lat: marker.geometry.coordinates[1],
            lng: marker.geometry.coordinates[0]
          }}
          icon={icon}
        >
          <Popup>
            <span>{marker.properties.label}</span>
          </Popup>
        </Marker>
      );
    })
  );
}

export default Markers