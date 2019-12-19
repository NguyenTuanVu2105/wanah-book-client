import React, {useState, Component} from 'react'
import { Col } from 'react-bootstrap'
import {List} from 'antd'
import './AppSider.scss'
import {Link, withRouter} from 'react-router-dom'
import nav from './nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal, Input, Row, Avatar } from 'antd';
import AppContext from '../../../AppContext'
import { parseImage } from '../../../helper/parse/parser'

class AppSider extends React.Component{
    render(){
        return(
            <Col className="sidebar flex-top col-1p5">
                <div>
                    <div style={{ padding: 16, display: "flex", flexDirection: "row", alignItems: "center", height: "40%" }} className="userName" onClick={() => this.props.history.push(`/profile`)}>
                        <Avatar size={40} src={parseImage(this.context.user.avatar)} />
                        <div style={{ paddingLeft: 5 }}>{this.context.user.name}</div>
                    </div>
                    <List
                        bordered
                        dataSource={nav}
                        style={{
                            width: "200px",
                            border: 'none'
                        }}
                        renderItem={(item, index) => (
                            <List.Item className="sidebar-item">
                                <Link to={item.path} className="sidebar-link">
                                    <FontAwesomeIcon className={`sidebar-icon-${index % 4}`} icon={item.icon} size="lg"></FontAwesomeIcon>
                                    <span style={{ margin: '10px' }}>{item.name}</span>
                                </Link>
                            </List.Item>
                        )}
                    >
                    </List>
                </div>
            </Col>
        )
    }
}

AppSider.contextType = AppContext
export default withRouter(AppSider)