import React from 'react'
import LoginContainer from "../app/login/components/LoginContainer"
import RegisterContainer from "../app/register/components/RegisterContainer"
import Paths from "./Paths"
import App from "../App"
import {Router, Switch} from 'react-dom'

const routes = [
    {
        path: Paths.HomePage,
        exact: true,
        component: App
    },
    {
        path: Paths.Login,
        exact: true,
        component: LoginContainer
    },
    {
        path: Paths.Register,
        exact: true,
        component: RegisterContainer
    },
]

export default routes