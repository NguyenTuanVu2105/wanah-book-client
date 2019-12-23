import React, { useState, useRef, useEffect } from 'react'
import L from "leaflet";
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import axios from 'axios'
// import 'esri-leaflet-geocoder'
// import 'esri-leaflet'
// import LCG from 'leaflet-control-geocoder';
import 'leaflet-geocoder-mapzen';
import { Button } from 'react-bootstrap';

const MapConfirm = (props) => {
  const key = 'P4QzOCt4wWfPKfuPuMF1UQSupLKLsO7ZC4DBRF6GAoC0AcaSAKRvD4v2vix948q7'

  const mapRef = useRef(null)
  const [hasLocation, setHasLocation] = useState(false)
  const {address, setAddress, position , setPosition} = props
  const [locate, setLocate] = useState(false)
  const handleClick = (e) => {
    setPosition(e.latlng)
    axios.get(`https://api.jawg.io/places/v1/reverse?access-token=${key}&point.lat=${e.latlng.lat}&point.lon=${e.latlng.lng}&size=1&boundary.circle.radius=${10}&layers=address`)
    .then(result => {
      setAddress(result.data.features[0].properties.label)
    })
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
      setPosition(latlng)
      setAddress(feature.properties.label)
    })
    if (map != null) {
      map.locate()
    }
  }, [])

  const handleLocate = () => {
    const map = mapRef.current.leafletElement
    map.locate()
    setLocate(false)
  }
  
  const handleLocationFound = (e) => {
    setHasLocation(true)
    setPosition(e.latlng)
    if (!locate) {
      axios.get(`https://api.jawg.io/places/v1/reverse?access-token=${key}&point.lat=${e.latlng.lat}&point.lon=${e.latlng.lng}&size=1&boundary.circle.radius=${10}&layers=address`)
      .then(result => {
        setAddress(result.data.features[0].properties.label)
      })
      setLocate(true)
    }
  }

  const marker = hasLocation ? (
    <Marker position={position}>
      <Popup>{address}</Popup>
    </Marker>
  ) : null

  return (
    <div>
          <LeafletMap 
      center={position} 
      zoom={15}
      ref={mapRef} 
      onLocationfound={handleLocationFound}
      onClick={handleClick}
      >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='http://mt0.google.com/vt/lyrs=m&hl=vi&x={x}&y={y}&z={z}'
      />
      {    position && <Marker position={position}>
            <Popup>{address}</Popup>
          </Marker>}
    </LeafletMap>

    <div className='flex'>
    <div style={{background: 'white', marginTop:'30px', fontSize:'20px', fontWeight: 'bold'}}>{address}</div>
    <Button style={{margin: '30px 15px', height:'35px'}} onClick={handleLocate}>vị trí của bạn</Button>
    </div>
    </div>
  );
}


export default MapConfirm