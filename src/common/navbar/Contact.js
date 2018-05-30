import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './Navigation.scss'
import { Form,Button, FormControl, FormGroup,ControlLabel, Col} from 'react-bootstrap';
const customStyles = {
      overlay: {
                position: 'absolute',
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
      padding               :'0px',
      overflow              :'auto'
    }
  };
  
  const Contact = (props) => {

  return (
      <div>
      
      <Modal
          isOpen={props.modalIsOpen.contact}
          onAfterOpen={props.afterOpenModal}
          onRequestClose={props.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
          >
       <div className="contact-content">
           <div className="contact-us">
           <span className='contact'>C&nbsp;O&nbsp;N&nbsp;T&nbsp;A&nbsp;C&nbsp;T</span><span style={{color:"darkgray"}}>&nbsp;&nbsp;U&nbsp;S</span>
            </div>
            <form className="signup">
 
    <div className="form-body">
      <div className="rows">
        <input type="text" placeholder="your Name"/>
        <input type="text" placeholder="your Email"/>
      </div>
      <div className="rows">
        <textarea type='text' rows="4" cols="50"  placeholder="your Message">
          </textarea>
      </div>
    </div>
    <div className="form-footer">
      <a className="not-now">NOT NOW!<span className=""></span></a>
      <a className='send'>SEND<span className=""></span></a>
    </div>
  </form>
        </div>
         
      </Modal>
      </div>
  );
}
export default Contact;