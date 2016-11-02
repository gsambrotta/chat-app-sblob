import React from 'React';

import Participants from './Participants';
import MessagesHistory from './MessagesHistory';
import Footer from './Footer';

import { getConversation } from './../utility';

export default class Conversation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      conversation: getConversation(0)
    };
  }

  handleSendMessage(message) {
    //
  }

  render() {
    const convArray = this.state.conversation;
    const messages = convArray.chat.map(chatBlock => {
      return (<MessagesHistory key={chatBlock.sender.id} sender={chatBlock.sender} history={chatBlock.messages} />)
    });

    return (
      <div className='conversation'>
        <Participants participants={convArray.participants} />
        {messages}
        <Footer onSendMessage={this.handleSendMessage.bind(this)}/>
      </div>
    );
  }
}
