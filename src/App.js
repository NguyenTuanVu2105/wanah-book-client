import React from 'react'
import './App.scss'
import AppHeader from './app/common/header/AppHeader'
import AppSider from './app/common/sidebar/AppSider';
import AppContent from './app/common/content/AppContent'
// import Content from './common/Content'
import {Row, Container} from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)

const App = (props) => {
    return (
        <Container className="app-container">
            <AppHeader></AppHeader>
            <Row className="app-body">
                <AppSider></AppSider>
                <AppContent route={props.route}></AppContent>
            </Row>
        </Container>  
    )
}

export default App