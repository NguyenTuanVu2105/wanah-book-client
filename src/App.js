import React,{Component} from 'react'
import LoginContainer from './app/login/components/LoginContainer'
import RegisterContainer from './app/register/components/RegisterContainer'

import "./App.css"

class App extends Component{
    render() {
        return (
            <div>
                <LoginContainer></LoginContainer>               
                {/* <RegisterContainer></RegisterContainer> */}
            </div>
        )
    }
}

export default App;