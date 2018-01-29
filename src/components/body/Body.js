import React, { Component } from 'react'
import './Body.css'
import Register from './Register'

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            subtitleColor: '#fff'
        }
        
    };
    openModal = () => {
        this.setState({modalIsOpen: true});
    }
    closeModal = () => {
        this.setState({modalIsOpen: false});
    }
    
    afterOpenModal = () => {
        this.setState({subtitleColor: '#f00'});
    }
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

            <button onClick={this.openModal}>REGISTER AS MENTOR</button>
            <Register
                        modalIsOpen={this.state.modalIsOpen}
                        afterOpenModal={this.afterOpenModal}
                        closeModal={this.closeModal}
                        openModal={this.openModal}
                    />
            </div>
            <div className="bot-images" >
                <span className="telegram">
                <table>
                <thead></thead>
                <tbody>
                <tr>
                <td><a href='#'><img  src={require('../../assets/images/telegram.png')}/></a></td>
                <td><a href='#'><img  src={require('../../assets/images/slack.png')}/></a></td>
                <td><a href='#'><img  src={require('../../assets/images/messenger.jpg')}/></a></td>
                <td><a href='#'><img  src={require('../../assets/images/twitter.png')}/></a></td>
                </tr>
                </tbody>
                </table>
                </span>
   
            </div>
            </div>
        )

    }
}
export default Body;