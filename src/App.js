import React from 'react'
import { Layout, Row } from 'antd';
import './App.scss'
import { withRouter } from 'react-router-dom'
import AppHeader from './app/common/header/AppHeader'
import AppSider from './app/common/sidebar/AppSider';
import AppContent from './app/common/content/AppContent'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)

const { Content } = Layout

const App = (props) => {
    return (
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

export default withRouter(App)