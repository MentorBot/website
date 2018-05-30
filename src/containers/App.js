import React, { Component } from 'react'
import Navigation from '../common/navbar/Navigation'
import ChatBot from '../components/chat/ChatBot'
import Body from '../components/body/Body'

import './Header.css'


class App extends Component {
    
   
    render() {
        return (
           <div className="body"> 
            <section className= "body1">
                <Navigation/>
                <Body/>
            </section>
            <section className= "body2"> 
                <ChatBot/>
            
            
            </section>
        </div>
        )

    }
}
export default App;