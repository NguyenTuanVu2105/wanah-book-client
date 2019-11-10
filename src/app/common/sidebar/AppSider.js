import React, {useState} from 'react'
import { Col } from 'react-bootstrap'
import {List} from 'antd'
import './AppSider.scss'
import {Link} from 'react-router-dom'
import nav from './nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AppSider = () => {
    
    return (
        <Col className="sidebar flex-top col-1p5">   
            <p></p>
            <List
                bordered
                dataSource={nav}
                style={{
                    margin: "10px",
                    width: "200px",
                    border: 'none'
                }}
                renderItem={(item) => (
                    <List.Item className="sidebar-item">
                        <Link to={item.path} className="sidebar-link">
                            <FontAwesomeIcon style={{color:'blue'}} icon={item.icon} size="lg"></FontAwesomeIcon>
                            <span style={{margin:'10px'}}>{item.name}</span>
                        </Link>
                    </List.Item>                
                )}
            >
            </List>
        </Col>
    )
}

export default AppSider