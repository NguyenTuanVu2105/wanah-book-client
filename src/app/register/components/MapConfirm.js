import React, { useState, useRef, useEffect } from 'react'
import L from "leaflet";
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import axios from 'axios'
// import 'esri-leaflet-geocoder'
// import 'esri-leaflet'
// import LCG from 'leaflet-control-geocoder';
import 'leaflet-geocoder-mapzen';

const MapConfirm = (props) => {
  const key = 'P4QzOCt4wWfPKfuPuMF1UQSupLKLsO7ZC4DBRF6GAoC0AcaSAKRvD4v2vix948q7'

  const mapRef = useRef(null)
  const [hasLocation, setHasLocation] = useState(false)
  const {address, setAddress, position: currentPos, setPosition: setCurrentPos} = props

  const handleClick = (e) => {
    setCurrentPos(e.latlng)
  }

  useEffect(()=> {
    const map = mapRef.current.leafletElement
    var options = {
      url: "https://places.jawg.io/v1",
      layers: ["street", "address", "venue"],
  }
    const gencoder = L.control.geocoder(key, options);
    gencoder.addTo(map)
    gencoder.on('select', function({latlng, feature}) {
      setCurrentPos(latlng)
      console.log(feature)
    })
    if (map != null) {
      map.locate()
    }
  }, [])

  useEffect(() => {
    if (currentPos) {
      axios.get(`https://api.jawg.io/places/v1/reverse?access-token=${key}&point.lat=${currentPos.lat}&point.lon=${currentPos.lng}&size=1&boundary.circle.radius=${10}&layers=address`)
      .then(result => {
        setAddress(result.data.features[0].properties.label)
      })
    }
  }, [currentPos])

  const handleLocationFound = (e) => {
    setHasLocation(true)
    setCurrentPos(e.latlng)
  }

  const marker = hasLocation ? (
    <Marker position={currentPos}>
      <Popup>{address}</Popup>
    </Marker>
  ) : null

  return (
    <div>
          <LeafletMap 
      center={currentPos} 
      zoom={15}
      ref={mapRef} 
      onLocationfound={handleLocationFound}
      onClick={handleClick}
      >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='http://mt0.google.com/vt/lyrs=m&hl=vi&x={x}&y={y}&z={z}'
      />
      {    currentPos && <Marker position={currentPos}>
            <Popup>{address}</Popup>
          </Marker>}
    </LeafletMap>

    <div style={{background: 'white', marginTop:'30px', fontSize:'20px', fontWeight: 'bold'}}>{address}</div>
    </div>
  );
}


export default MapConfirm