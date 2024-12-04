import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon, LatLngExpression } from 'leaflet';

// Fix for default marker icons in React-Leaflet
delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const rescueLocations = [
  {
    id: 1,
    name: 'First Encounter Beach',
    position: [41.8924, -69.9544] as LatLngExpression,
    description: 'Common cold-stunning location',
    type: 'stranding'
  },
  {
    id: 2,
    name: 'National Marine Life Center',
    position: [41.7485, -70.6153] as LatLngExpression,
    description: 'Rehabilitation facility',
    type: 'facility'
  },
  {
    id: 3,
    name: 'Wellfleet Bay',
    position: [41.9262, -70.0419] as LatLngExpression,
    description: 'Frequent turtle stranding area',
    type: 'stranding'
  }
];

const InteractiveMap = () => {
  return (
    <MapContainer
      center={[41.8262, -70.2062]}
      zoom={10}
      style={{ height: '100%', width: '100%' }}
      className="rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {/* Cold water zone indicator */}
      <Circle
        center={[41.8262, -70.2062]}
        radius={20000}
        pathOptions={{ 
          color: 'blue',
          fillColor: 'blue',
          fillOpacity: 0.2
        }}
      />

      {rescueLocations.map((location) => (
        <Marker 
          key={location.id} 
          position={location.position}
          icon={new Icon({
            iconUrl: location.type === 'facility' 
              ? '/facility-marker.png'
              : '/stranding-marker.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
          })}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-blue-900">{location.name}</h3>
              <p className="text-sm text-gray-600">{location.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default InteractiveMap;