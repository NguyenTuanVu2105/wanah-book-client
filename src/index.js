import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import './index.scss'
import {BrowserRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import routes from './routes/Routes'
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(<BrowserRouter>
    {/* kick it all off with the root route */}
    {renderRoutes(routes)}
    </BrowserRouter>, document.getElementById('root'))

serviceWorker.unregister()
