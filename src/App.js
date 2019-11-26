import React from 'react'
import { Layout, Col, Row } from 'antd';
import { renderRoutes } from 'react-router-config'
import './App.scss'
import AppHeader from './app/common/header/AppHeader'
import AppSider from './app/common/sidebar/AppSider';
import AppContent from './app/common/content/AppContent'
// import Content from './common/Content'
// import { Row, Container } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)

const { Header, Content } = Layout

const App = (props) => {
    return (
        // <Container className="homepage">
        //     <AppHeader></AppHeader>
        //     <Row className="app-body">
        //         <AppSider></AppSider>
        //         <AppContent route={props.route}></AppContent>
        //     </Row>
        // </Container>  
        <Layout>
            <AppHeader />
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <Row type="flex" style={{minHeight: "calc(100vh - 65px)"}}>
                    {
                        true ?
                            <div style={{width: "20%", backgroundColor: "white"}}>
                                <AppSider />
                            </div> :
                            null
                    }
                    <AppContent route={props.route}></AppContent>
                </Row>
            </Content>
        </Layout>
    )
}

export default App