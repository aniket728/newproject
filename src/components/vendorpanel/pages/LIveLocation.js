import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet for custom icons
import 'leaflet/dist/leaflet.css';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

// Define custom icons
const currentLocationIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const savedLocationIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const LiveLocation = () => {
  const [position, setPosition] = useState([28.6139, 77.2090]); // Default position set to New Delhi, India
  const [dialogOpen, setDialogOpen] = useState(false);
  const [placeDetails, setPlaceDetails] = useState({
    placeName: '',
    placeLocality: '',
    placeAdminArea: '',
    placeCountry: ''
  });
  const [savedLocations, setSavedLocations] = useState([]); // Array to store saved locations

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          setPosition([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error('Error fetching location', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const handleAddLocation = () => {
    setDialogOpen(true); // Open the dialog box
  };

  const handleCloseDialog = () => {
    setDialogOpen(false); // Close the dialog box
    setPlaceDetails({ // Reset the place details
      placeName: '',
      placeLocality: '',
      placeAdminArea: '',
      placeCountry: ''
    });
  };

  const handleSaveLocation = () => {
    // Save the current position and place details
    const newLocation = {
      position: position,
      details: placeDetails
    };
    setSavedLocations([...savedLocations, newLocation]); // Add the new location to the saved locations array
    setDialogOpen(false); // Close the dialog box
    setPlaceDetails({ // Reset the place details
      placeName: '',
      placeLocality: '',
      placeAdminArea: '',
      placeCountry: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlaceDetails({
      ...placeDetails,
      [name]: value
    });
  };

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      {/* Map */}
      <div style={{ height: '100%', width: '100%' }}>
        <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Current Location Marker */}
          <Marker position={position} icon={currentLocationIcon}>
            <Popup>
              You are here!
            </Popup>
          </Marker>
          {/* Saved Locations Markers */}
          {savedLocations.map((location, index) => (
            <Marker key={index} position={location.position} icon={savedLocationIcon}>
              <Popup>
                <div>
                  <strong>Place Name:</strong> {location.details.placeName}<br />
                  <strong>Locality:</strong> {location.details.placeLocality}<br />
                  <strong>Admin Area:</strong> {location.details.placeAdminArea}<br />
                  <strong>Country:</strong> {location.details.placeCountry}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Top-Right Side: Button */}
      <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1000 }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleAddLocation}
          style={{ width: '200px' }}
        >
          Add Customer Location
        </Button>
      </div>

      {/* Dialog Box */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Add Location Details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="placeName"
            label="Place Name"
            type="text"
            fullWidth
            value={placeDetails.placeName}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="placeLocality"
            label="Place Locality"
            type="text"
            fullWidth
            value={placeDetails.placeLocality}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="placeAdminArea"
            label="Place Admin Area"
            type="text"
            fullWidth
            value={placeDetails.placeAdminArea}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="placeCountry"
            label="Place Country"
            type="text"
            fullWidth
            value={placeDetails.placeCountry}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveLocation} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LiveLocation;