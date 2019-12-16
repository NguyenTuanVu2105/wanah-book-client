import LoginContainer from "../app/login/components/LoginContainer"
import RegisterContainer from "../app/register/components/RegisterContainer"
import Paths from "./Paths"
import App from "../App"
// import AppNoSideBar from "../AppNoSideBar"
import HomePage from '../app/homepage/HomePage'
import Books from '../app/books/Books'
import Reviews from '../app/reviews/Reviews'
import Messages from '../app/messages/Messages'
import Users from '../app/users/Users'
import Notifications from '../app/notifications/Notifications'
import User from "../app/users/User"
import BookDetail from "../app/books/BookDetail"
import MapTest from "../app/register/components/MapConfirm"
import Profile from "../app/profile/Profile"
import ProfileUpdate from "../app/profile/ProfileUpdate"

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
        path: '/test',
        exact: true,
        component: MapTest
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
                path: Paths.Users,
                exact: true,
                component: Users
            },
            {
                path: Paths.Notifications,
                exact: true,
                component: Notifications
            },
            {
                path: Paths.UserDetail,
                exact: true,
                component: User
            },
            {
                path: Paths.BookDetail,
                exact: true,
                component: BookDetail
            },
            {
                path: Paths.Messages,
                exact: true,
                component: Messages
            },
            {
                path: Paths.Profile,
                exact: true,
                component: Profile
            },
            {
                path: Paths.UpdateProfile,
                exact: true,
                component: ProfileUpdate
            },
        ]
    },
]

export default routes