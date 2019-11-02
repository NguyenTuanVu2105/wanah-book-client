import LoginContainer from "../app/login/components/LoginContainer"
import RegisterContainer from "../app/register/components/RegisterContainer"
import Paths from "./Paths"
import HomePage from "../app/user/Homepage"

const routes = [
    {
        path: Paths.HomePage,
        exact: true,
        component: HomePage
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