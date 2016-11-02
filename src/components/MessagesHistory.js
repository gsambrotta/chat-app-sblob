import React from 'react';
import moment from 'moment';

import Avatar from './common/Avatar';
import '../sass/components/_messagesHistory.scss';

const MessagesHistory = ({sender, history}) => {

  let messageBlock = history.map(message => {
    let formattedDate = moment(message.date, 'DD/MM/YYYY hh:mm').fromNow();


    return (
      <div key={message.date} className='u-list-items list-items__messages'>
        <Avatar image={sender.image} />
        <div className='list-items__text'>
          <ul>
            <li><h3>{sender.name}
              <span className={sender.isOnline ? 'u-circle u-circle--green' : 'u-circle u-circle--grey'} />
            </h3></li>
            <li><p> {message.body} </p></li>
          </ul>
        </div>
        <p className='list-items__text'> {formattedDate} </p>
      </div>
    );
  });

  return (
    <div className='messages__list'>
      {messageBlock}
    </div>
  );
}

export default MessagesHistory;
