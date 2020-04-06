import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "twitter message"
    };
  }

  handleMessageChange = event => {
    this.setState({
        message: event.target.value
    })
  }

  countChars = () => {
    let chars = this.state.message
    let charLength = chars.length
    console.log(charLength)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        onChange = {event => this.handleMessageChange(event)}
        value = {this.state.message}
        name="message" 
        id="message" />
        <p>Characters remaining = {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
