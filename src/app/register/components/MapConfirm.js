import React, { useState, useRef, useEffect } from 'react'
import L from "leaflet";
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import axios from 'axios'
import { AutoComplete } from 'antd';

const MapConfirm = (props) => {
  const key = 'P4QzOCt4wWfPKfuPuMF1UQSupLKLsO7ZC4DBRF6GAoC0AcaSAKRvD4v2vix948q7'

  const mapRef = useRef(null)
  const [hasLocation, setHasLocation] = useState(false)
  const {address, setAddress, position , setPosition} = props
  const [data, setData] = useState([])
  const handleClick = (e) => {
    setPosition(e.latlng)
  }

  useEffect(()=> {
    const map = mapRef.current.leafletElement
    if (map != null) {
      map.locate()
    }
  }, [])

  useEffect(() => {
    if (position) {
      axios.get(`https://api.jawg.io/places/v1/reverse?access-token=${key}&point.lat=${position.lat}&point.lon=${position.lng}&size=1&boundary.circle.radius=${10}&layers=address`)
      .then(result => {
        setAddress(result.data.features[0].properties.label)
      })
    }
  }, [position])

  const handleLocationFound = (e) => {
    setHasLocation(true)
    setPosition(e.latlng)
  }

  const onSelect = () => {
    
  }

  const onSearch = () => {
    setData(['asd','da','a'])
  }


  return (
    <div>
        <AutoComplete
          dataSource={data}
          style={{ width: 800 }}
          onSelect={onSelect}
          onSearch={onSearch}
          placeholder="Nhập địa chỉ của bạn tại đây"
        />
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

    <div style={{background: 'white', marginTop:'30px', fontSize:'20px', fontWeight: 'bold'}}>{address}</div>
    </div>
  );
}


export default MapConfirm