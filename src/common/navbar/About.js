import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './Navigation.css'

const customStyles = {
  content : {
    top                   : '30%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const About = (props) => {
    console.log("About props\n\n", props)

return (
    <div>
    {/* <button onClick={props.openModal}>Open Modal</button> */}
   {/* <ul><li></li></ul> */}
  
    <Modal
        isOpen={props.modalIsOpen}
        onAfterOpen={props.afterOpenModal}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
    >
    <h2> Who we are</h2>

        <p>
        Hey! I’m Brandon.I created codeburst.io and I write JavaScript 
        tutorials <br/>and articles to help beginners better understand the 
        inner workings of Web Development.<br/> If you have any questions 
        about the article, leave a comment and I’ll get back to you, or
        find me on twitter @brandonmorelli.<br/> Lastly, when you’re ready 
        to really dive into Web Development, Check out the Best 
        Courses for Learning Full Stack Web Development
        <br/> Lastly, when you’re ready 
        to really dive into Web Development, Check out the Best 
        Courses for Learning Full Stack Web Development  
        </p>
        <div className="">
        <table>
                <tbody>
                <tr>
                <td><a href='#'><img  src={require('../../assets/images/twitter_logo.png')}/></a></td>
                <td><a href='#'><img  src={require('../../assets/images/facebooklogo.jpg')}/></a></td>
                <td><a href='#'><img  src={require('../../assets/images/emailogo.png')}/></a></td>
                </tr>
            </tbody>
            
        </table> 
            
        </div>


    
    </Modal>
    </div>
);
//   }
}

export default About;