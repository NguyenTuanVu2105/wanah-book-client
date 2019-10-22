import App from "../App";
import LoginContainer from "../app/login/components/LoginConatainer"
import RegisterContainer from "../app/register/components/RegisterContainer"
import Paths from "./Paths";
import React from "react";
import {Route, Switch} from "react-router-dom"

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