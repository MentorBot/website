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
  
  const Mentors = (props) => {
  
  return (
      <div>
      <Modal
          isOpen={props.modalIsOpen.mentor}
          onAfterOpen={props.afterOpenModal}
          onRequestClose={props.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}>
      </Modal>
      </div>
  );
}
export default Mentors;