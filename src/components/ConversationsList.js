import React from 'react';
import moment from 'moment';

import { getConversations } from './../utility';
import ConversationPreview from './ConversationPreview';


export default class ConversationsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      conversations: getConversations()
    };
  }

  render() {
    const conversationName = this.state.conversations.map(conversation => {
      const lastConversation = conversation.conversations[conversation.conversations.length - 1];
      const lastMsg = lastConversation.messages[lastConversation.messages.length - 1];
      const isLastSenderMe = lastConversation.sender === 'me';
      const lastSender = isLastSenderMe ? 'You' : lastConversation.sender.name;
      let formattedDate = moment(lastMsg.date, 'DD/MM/YYYY hh:mm').fromNow();

      return (
        <ConversationPreview
          key={conversation.id}
          id={conversation.id}
          partecipant={conversation.participants[0]}
          pic={conversation.participants[0].image}
          date={formattedDate}
          body={lastMsg.body}
          sender={lastSender}
        />
      )
    });

    return (
      <div>
        <header>
          <h1> Conversations </h1>
        </header>
        <ul>
          {conversationName}
        </ul>
      </div>
    );
  }
}
