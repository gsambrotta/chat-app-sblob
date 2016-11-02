import React from 'React';
import moment from 'moment';

import Avatar from './common/Avatar';

const MessagesHistory = ({sender, history}) => {

  let messageBlock = history.map(message => {
    let formattedDate = moment(message.date, 'DD/MM/YYYY hh:mm').fromNow();
    return (
      <li key={message.date} className='list-items list-items__conversation'>
        <Avatar image={sender.image} />
        <span>{sender.isOnline}</span>
        <p> {message.body} </p>
        <span> {formattedDate} </span>
      </li>
    );
  });

  return (
    <ul>
      {messageBlock}
    </ul>
  );
}

export default MessagesHistory;
