import React, { Component } from 'react'
import './Body.css'

class Body extends Component {
   
    render() {
        return (
            <div>
            <div className="logo-wrapper">
                <div className="logo">
                </div>
              
            </div>
            <div className="mentor-text">
            <p>A mentor is someone who sees more talent and ability <br/>within you, than you see in yourself, <br/>and helps bring it out of you.</p>
            </div>
            <div className="register-button">

            <button >REGISTER AS MENTOR</button>
            </div>
            </div>
        )

    }
}
export default Body;