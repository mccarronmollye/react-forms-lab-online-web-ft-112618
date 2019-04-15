import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value //target is whichever the event was triggered on. Target is an input, has a value attribute
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMessageChange(event)} value={this.state.message} />
        <p>Characters Left: {this.props.maxChars - this.state.message.length}</p>
    </div>
    );
  }
}

export default TwitterMessage;
