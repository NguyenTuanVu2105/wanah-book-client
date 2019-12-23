import LoginContainer from "../app/login/components/LoginContainer"
import RegisterContainer from "../app/register/components/RegisterContainer"
import Paths from "./Paths"
import App from "../App"
// import AppNoSideBar from "../AppNoSideBar"
import HomePage from '../app/homepage/HomePage'
import BooksContainer from '../app/books/BooksContainer'
import AuthorSearch from '../app/books/AuthorSearch.js'
import Reviews from '../app/reviews/Reviews'
import Messages from '../app/messages/Messages'
import UserContainer from '../app/users/UserContainer'
import Notifications from '../app/notifications/Notifications'
import User from "../app/users/User"
import BookDetail from "../app/books/BookDetail"
import MapTest from "../app/register/components/MapConfirm"
import Profile from "../app/profile/Profile"
import ProfileUpdate from "../app/profile/ProfileUpdate"
import Borrow from '../app/borrows/Borrow'
import Request from "../app/notifications/Request"
import Error404 from "../Error404"
import Authors from "../app/books/Authors"
import UserSearch from "../app/users/UserSearch"

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
                component: BooksContainer
            },
            {
                path: Paths.Reviews,
                exact: true,
                component: Reviews
            },
            {
                path: Paths.Users,
                exact: true,
                component: UserContainer
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
            {
                path: Paths.Borrow,
                exact: true,
                component: Borrow
            }, 
            {
                path: Paths.Request,
                exact: true,
                component: Request
            }, 
            {
                path: Paths.AuthorSearch,
                exact: true,
                component: AuthorSearch
            },
            {
                path: Paths.Authors,
                exact: true,
                component: Authors
            },
            {
                path: Paths.UserSearch,
                exact: true,
                component: UserSearch
            },
            {
                path: '*',
                exact: true,
                component: Error404
            }
        ]
    },
]

export default routes