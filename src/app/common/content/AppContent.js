import React from 'react'
import {Col} from 'react-bootstrap'
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