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
  
  const Contact = (props) => {
      console.log("About props\n\n", props)
  
  return (
      <div>
      
      <Modal
          isOpen={props.modalIsOpen}
          onAfterOpen={props.afterOpenModal}
          onRequestClose={props.closeModal}
          style={customStyles}
          contentLabel="Example Modal">
      </Modal>
      </div>
  );
}
export default Contact;