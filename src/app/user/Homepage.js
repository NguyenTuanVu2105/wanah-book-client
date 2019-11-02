import React, {useState} from 'react'
import Header from './common/Header'
import Content from './common/Content'
import './Homepage.css'

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="header flex-center">
                <Header></Header>
            </div>
            <div className="content flex-center">
                <Content></Content>
            </div>
        </div>
    )
}

export default HomePage

