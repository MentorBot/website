import React, { Component } from 'react'
import './Navigation.css'
import About from './About'
import Contact from './Contact'
import Mentors from './Mentors'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: {
                 mentor:false,
                 about:false,
                 contact:false
            },
            subtitleColor: '#fff'
        }
        
    };
    openModal = (name) => { 
        const  modalIsOpen = this.state.modalIsOpen;
        console.log('name',name);
        console.log('modalisopen', this.state.modalIsOpen);
        modalIsOpen[name] = true;
        this.setState(modalIsOpen);
        alert(JSON.stringify(this.state))
    }
    closeModal = () => {
        this.setState({modalIsOpen: false});
    }
    
    afterOpenModal = () => {
        this.setState({subtitleColor: '#f00'});
    }

    render() {
        return (
            
            <div className = "nav">
                <ul >
                    <li ><a onClick={()=>this.openModal('mentor')}>TOP MENTORS</a><Mentors
                        modalIsOpen={this.state.modalIsOpen}
                        afterOpenModal={this.afterOpenModal}
                        closeModal={this.closeModal}
                        openModal={this.state.modalIsOpen.mentor}
                    /></li>
                    <li><a onClick={()=>this.openModal()}>CONTACT US</a><Contact
                        modalIsOpen={this.state.modalIsOpen}
                        afterOpenModal={this.afterOpenModal}
                        closeModal={this.closeModal}
                        openModal={this.state.modalIsOpen.contact}
                    />
                    </li>
                    <li><a onClick={()=>this.openModal()}>ABOUT</a><About
                        modalIsOpen={this.state.modalIsOpen}
                        afterOpenModal={this.afterOpenModal}
                        closeModal={this.closeModal}
                        openModal={this.state.modalIsOpen.about}
                    />
                    </li>
                    
                </ul>    
            </div>
            
            
        )

    }
}
export default Navigation;