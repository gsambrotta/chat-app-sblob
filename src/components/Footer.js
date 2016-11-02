/* global document */
import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super();

    this.state = {
      body: ''
    };
  }

  componentDidMount() {
    document.querySelector('body').addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    document.querySelector('body').removeEventListener('keydown', this.handleKeyDown.bind(this));
  }

  handleNewMessage(e) {
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let body = this.state.body.trim();
    if (!body) {
      return;
    }

    this.props.onMessageSubmit({body});
    this.setState({body: ''});
  }

  handleKeyDown(e) {
    let ENTER = 13;
    if (e.keyCode === ENTER) {
      this.handleNewMessage(e);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type='text'
          placeholder='write your message'
          value={this.state.body}
          onChange={this.handleNewMessage.bind(this)}
        />
      </form>
    );
  }
}

/*
Footer.propTypes = {
  sender: React.PropTypes.string.isRequired,
  onMessageSubmit: React.PropTypes.func.isRequired
};
*/
