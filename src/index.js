import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import {renderRoutes} from 'react-router-config'
import routes from './routes/Routes'

ReactDOM.render(<BrowserRouter>
{/* kick it all off with the root route */}
{renderRoutes(routes)}
</BrowserRouter>, document.getElementById('root'))

serviceWorker.unregister()
