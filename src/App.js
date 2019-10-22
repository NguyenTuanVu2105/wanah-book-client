import React,{Component} from 'react'
import LoginContainer from './app/login/components/LoginConatainer'
import RegisterContainer from './app/register/components/RegisterContainer'

import "./App.css"

class App extends Component{
    render() {
        return (
<<<<<<< HEAD
            <div className='hello-world'>
                <h1>Hello World</h1>
                <p>Welcome to my world</p>
=======
            <div>
                <LoginContainer></LoginContainer>               
                {/* <RegisterContainer></RegisterContainer> */}
            </div>
        )
    }
}

export default App;