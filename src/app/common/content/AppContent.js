import React, {useState} from 'react'
import {Col} from 'react-bootstrap'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import './AppContent.scss'

const AppContent = (props) => {  
    return (
        <Col className="content col-4p5">        
            {renderRoutes(props.route.routes)}
        </Col>
    )
}

export default AppContent