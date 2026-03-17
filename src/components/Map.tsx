'use client';

import { useEffect, useState } from 'react';
import type { Map as LeafletMap, LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet marker icon issue - use CDN
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Sample map data - locations with free data
const mapLocations = [
  {
    id: 1,
    name: 'Hong Kong Baptist University',
    position: [22.3419, 114.1982] as LatLngExpression,
    description: 'Main campus location',
    category: 'University',
  },
  {
    id: 2,
    name: 'Kowloon Tong Station',
    position: [22.3278, 114.1635] as LatLngExpression,
    description: 'MTR station nearby',
    category: 'Transport',
  },
  {
    id: 3,
    name: 'City One Shatin',
    position: [22.3879, 114.2030] as LatLngExpression,
    description: 'Residential area',
    category: 'Residential',
  },
  {
    id: 4,
    name: 'Science Park',
    position: [22.4259, 114.2094] as LatLngExpression,
    description: 'Technology hub',
    category: 'Business',
  },
  {
    id: 5,
    name: 'Sha Tin Racecourse',
    position: [22.3955, 114.1872] as LatLngExpression,
    description: 'Horse racing venue',
    category: 'Entertainment',
  },
];

export default function MapComponent() {
  const [map, setMap] = useState<LeafletMap | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center h-96 bg-purple-100 dark:bg-purple-900 rounded-lg">
        <p className="text-purple-700 dark:text-purple-300">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">
        Interactive Map
      </h2>
      <p className="text-purple-700 dark:text-purple-300 mb-4">
        Explore locations using OpenStreetMap data (Free & Open Source)
      </p>
      
      <div className="h-96 w-full rounded-lg overflow-hidden border-2 border-purple-300 dark:border-purple-700">
        <MapContainer
          center={[22.3419, 114.1982]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {mapLocations.map((location) => (
            <Marker 
              key={location.id} 
              position={location.position}
              icon={icon}
            >
              <Popup>
                <div className="text-sm">
                  <strong className="text-purple-800">{location.name}</strong>
                  <br />
                  <span className="text-purple-600">{location.description}</span>
                  <br />
                  <span className="text-xs text-purple-500">Category: {location.category}</span>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mapLocations.map((location) => (
          <div
            key={location.id}
            className="p-4 bg-purple-50 dark:bg-purple-900 rounded-lg border border-purple-200 dark:border-purple-700"
          >
            <h3 className="font-semibold text-purple-900 dark:text-purple-100">
              {location.name}
            </h3>
            <p className="text-sm text-purple-700 dark:text-purple-300">
              {location.description}
            </p>
            <span className="inline-block mt-2 px-2 py-1 text-xs bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 rounded">
              {location.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
