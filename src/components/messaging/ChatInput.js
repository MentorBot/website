import React from 'react';
import './Messages.css'
class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chatInput: '' };

    // React ES6 does not bind 'this' to event handlers by default
    this.submitHandler = this.submitHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
  }
  
  submitHandler(event) {
    // Stop the form from refreshing the page on submit
    event.preventDefault();

    // Clear the input box
    this.setState({ chatInput: '' });

    // Call the onSend callback with the chatInput message
    this.props.onSend(this.state.chatInput);
  }

  textChangeHandler(event)  {
    this.setState({ chatInput: event.target.value });
  }

  render() {
    return (
      <div class="chatDetails">
      <div class="messageWrapper">
        <div class="messages">
          <div class="info">Start your chat</div>
        </div>
      </div>
      <div class="textBoxWrapper">
        <div class="textBoxContainer">
          <div class="textbox" contenteditable>
            Type a message...
          </div>
        </div>
        <div class="buttonGroup">
          <button class="emojiButton"></button>
          <button class="sendButton"></button>
        </div>
      </div>
    </div>
  
    );
  }
}

ChatInput.defaultProps = {
};

export default ChatInput;