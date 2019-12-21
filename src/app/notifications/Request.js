import React, { useEffect, useContext } from 'react'
import './Notifications.css'
import { Card, Avatar, Button, Steps, Divider } from 'antd';
import { useState } from 'react';
import { parseImage } from '../../helper/parse/parser'
import { withRouter, useParams } from 'react-router-dom';
import AppContext from '../../AppContext';

const { Meta } = Card;
const { Step } = Steps;
const Request = (props) => {
    const [current, setCurrent] = useState(0)
    const { id } = useParams() 
    const onChange = (current) => {
        setCurrent(current)
    }
    
    return (
        <div>
            <Card style={{marginTop: '20px'}}>
                <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Card title"
                description="This is the description"
                />
            </Card>
            <div>Gửi yêu cầu mượn sách</div>
            
            <Divider></Divider>
            <Steps current={current} onChange={onChange} direction="vertical">
                <Step title="Liên lạc"  />
                <Step title="Mượn sách"  />
                <Step title="Trả sách"  />
            </Steps>
        </div>
    )
}

export default withRouter(Request)