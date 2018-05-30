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
      padding               : '0px',
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
          ariaHideApp={false}
          >
          <div className="mentor-content">
          <div className="mentor-top">
                 TOP MENTORS
          </div>
          <div style={{display:'flex'}}>
          <div className="mentor-left">
          </div>
          <div>
              <ol>
              {props.users.map((user, index) => {
                 return <li key={index}> {user} </li>
              })}
              </ol>
         </div>
         </div>
         
          </div>
      </Modal>
      </div>
  );
}
export default Mentors;