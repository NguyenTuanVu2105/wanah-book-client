import LoginContainer from "../app/login/components/LoginContainer"
import RegisterContainer from "../app/register/components/RegisterContainer"
import Paths from "./Paths"
import App from "../App"
import HomePage from '../app/homepage/HomePage'
import Books from '../app/books/Books'
import Reviews from '../app/reviews/Reviews'
import Messages from '../app/messages/Messages'
import Users from '../app/users/Users'
import Notifications from '../app/notifications/Notifications'

const routes = [
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
    {
        component: App,
        routes: [
            {
                path: Paths.HomePage,
                exact: true,
                component: HomePage
            },
            {
                path: Paths.Books,
                exact: true,
                component: Books
            },
            {
                path: Paths.Reviews,
                exact: true,
                component: Reviews
            },
            {
                path: Paths.Messages,
                exact: true,
                component: Messages
            },
            {
                path: Paths.Users,
                exact: true,
                component: Users
            },
            {
                path: Paths.Notifications,
                exact: true,
                component: Notifications
            },
        ]
    },
]

export default routes