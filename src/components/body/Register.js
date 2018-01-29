import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Button, FormControl, FormGroup, Label ,ControlLabel, Col, Row} from 'react-bootstrap';

const customStyles = {
    content : {
      top                   : '30%',
      left                  : '50%',
      right                 : '30%',
      bottom                : '30%',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 :'65%',
      borderRadius         :'30px',
      height                :'75%',
      marginTop             : '10%',
      padding               :'0'
      
    }
  };

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show:false,
            content: {
            name: '',
            mobile:'',
            email:'',
            github:'',
            facebook:'',
            twitter:'',
            blog:''
        }
          };
    this.handleChange = this.handleChange.bind(this); 
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
     
    }
    getValidationState() {
        const length = this.state.content.name.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
      }
    
      handleChange(e) {
        const field = e.target.name;
        const value = e.target.value;
        const content = this.state.content;
        content[field] = value;
        this.setState({content})
        console.log(content)
      } 
     handleShow() {
        this.setState({ show: true });
      }
    
      handleHide() {
        this.setState({ show: false });
      }
  render(){
  return (
      <div className="register-form">
      <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.props.afterOpenModal}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Example Modal">
          <section className="register-left">
          {/* <div className="logo-wrapper">
                <div className="logo">
                </div>
              
            </div> */}
          </section>
          <section className="register-right">
          <form horizontal>
                <FormGroup controlId="name" validationState={this.getValidationState()} bsSize="small" className="formcontent">
                    <Row>
                        <Col componentClass={ControlLabel} sm={2}>
                            Name
                        </Col>
                        <Col sm={10}>
                        <FormControl
                                type="text"
                                value={this.state.name}
                                placeholder="Enter your Name."
                                onChange={this.handleChange}
                            />
                            <FormControl.Feedback />
                        </Col> 
                    </Row>   
                
                </FormGroup>
                <FormGroup controlId="mobile" validationState={this.getValidationState()} bsSize="small"  className="formcontent">
                    <Row>
                        <Col componentClass={ControlLabel} sm={2}>
                            Mobile 
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                    type="number"
                                    value={this.state.mobile}
                                    placeholder="Enter Mobile Number."
                                    onChange={this.handleChange}
                                />
                            <FormControl.Feedback />
                        </Col>  
                    </Row>
                </FormGroup>
                <FormGroup controlId="email" validationState={this.getValidationState()} bsSize="small"  className="formcontent">
                    <Row>
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                    type="email"
                                    value={this.state.email}
                                    placeholder="Enter Email Address."
                                    onChange={this.handleChange}
                                />
                            <FormControl.Feedback />
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup controlId="github" validationState={this.getValidationState()} bsSize="small"  className="formcontent">
                    <Row>    
                        <Col componentClass={ControlLabel} sm={2}>
                            Github Url
                        </Col>
                        <Col sm={10}>
                        <FormControl
                                type="text"
                                value={this.state.github}
                                placeholder="Enter github url."
                                onChange={this.handleChange}
                            />
                        <FormControl.Feedback />
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup controlId="facebook" validationState={this.getValidationState()} bsSize="small"  className="formcontent">
                    <Row>
                        <Col componentClass={ControlLabel} sm={2}>
                            Facebook Url
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                    type="text"
                                    value={this.state.facebook}
                                    placeholder="Enter Facebook Url."
                                    onChange={this.handleChange}
                                />
                            <FormControl.Feedback />
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup controlId="twitter" validationState={this.getValidationState()} bsSize="small"  className="formcontent">
                    <Row>
                        <Col componentClass={ControlLabel} sm={2}>
                            Twitter Url
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                    type="text"
                                    value={this.state.twitter}
                                    placeholder="Enter Twitter Url."
                                    onChange={this.handleChange}
                                />
                            <FormControl.Feedback />
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup controlId="blog" validationState={this.getValidationState()} bsSize="small"  className="formcontent">
                    <Row>
                        <Col componentClass={ControlLabel} sm={2}>
                            Blog Url
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                    type="text"
                                    value={this.state.blog}
                                    placeholder="Enter Blog Url"
                                    onChange={this.handleChange}
                                />
                            <FormControl.Feedback />
                        </Col>
                    </Row>
                </FormGroup>
            <FormGroup className="button-align">
            <Row>
                <Col  sm={10}>
                <Button type="submit">Cancel</Button>
                
                <Button type="submit" bsStyle="primary">Sign Up</Button>
                </Col>
            </Row>    
             </FormGroup>
               
          </form>
          </section> 
      </Modal>
      </div>
  );
}

}
export default Register;