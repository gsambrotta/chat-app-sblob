import React from 'react';
import {Link} from 'react-router';

import Avatar from './common/Avatar';

const ConversationPreview = (props) => {
	console.log(props);

  return (
    <li key={props.id} className='list-items list-items__preview'>
      <Link to={{ pathname: `/${props.partecipant.name}`}}>
        <Avatar image={props.pic} />
        <h2>{props.partecipant.name}</h2>
        <span>{props.date}</span>
        <p> {props.body} </p>
        <em> by {props.sender} </em>
      </Link>
      <hr />
    </li>
  );
};

export default ConversationPreview;
