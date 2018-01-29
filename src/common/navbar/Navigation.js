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
        modalIsOpen[name] = true;
        this.setState(modalIsOpen);
    
    }
    closeModal = (name) => {
        const  modalIsOpen = this.state.modalIsOpen;
        modalIsOpen[name] = false;
        this.setState(modalIsOpen)
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
                        closeModal={() => this.closeModal('mentor')}
                        openModal={this.state.modalIsOpen.mentor}
                    /></li>
                    <li><a onClick={()=>this.openModal('contact')}>CONTACT US</a><Contact
                        modalIsOpen={this.state.modalIsOpen}
                        afterOpenModal={this.afterOpenModal}
                        closeModal={() => this.closeModal('contact')}
                        openModal={this.state.modalIsOpen.contact}
                    />
                    </li>
                    <li><a onClick={()=>this.openModal('about')}>ABOUT</a><About
                        modalIsOpen={this.state.modalIsOpen}
                        afterOpenModal={this.afterOpenModal}
                        closeModal={() =>this.closeModal('about')}
                        openModal={this.state.modalIsOpen.about}
                    />
                    </li>
                    
                </ul>    
            </div>
            
            
        )

    }
}
export default Navigation;