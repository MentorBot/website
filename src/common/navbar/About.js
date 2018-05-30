import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './Navigation.scss'

const customStyles = {
overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'none'
},
  content : {
    top                   : '48%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : '#4b659b',
    fontsize              : '15px'
  }
};

const About = (props) => {

return (
    <div>
    <Modal
        isOpen={props.modalIsOpen.about}
        onAfterOpen={props.afterOpenModal}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
    >
    <h2 className='title'> Who we are</h2>

        <p className='words'>
        Hey! I’m Brandon.I created codeburst.io and I write JavaScript 
        tutorials and articles to help beginners better understand <br/> If you have any questions 
        about the article, leave a comment and I’ll get back to you, or
        find me on twitter @brandonmorelli.<br/> Lastly, when you’re ready 
        to really dive into Web Development, Check out the Best 
        Courses for Learning Full Stack Web Development
        <br/> Lastly, when you’re ready 
        to really dive into Web Development, Check out the Best 
        Courses for Learning Full Stack Web Development  
        </p>
        <div className="icon">

        
                <a href='#'><img  src={require('../../assets/images/twitter_logo.png')}/></a>
                <a href='#'><img  src={require('../../assets/images/facebooklogo.jpg')}/></a>
                <a href='#'><img  src={require('../../assets/images/emailogo.png')}/></a>
        
        </div>


    
    </Modal>
    </div>
);
}

export default About;