import React from 'react';
import Avatar from './common/Avatar';

const Participants = ({participants}) => {

	const avatar = participants.map(participant => (
		<Avatar key={participant.id} image={participant.image} />
	));

  return (
    <header>
      <p> To: </p>
      <div id='addContact' className='header__avatars'>
       {avatar}
      </div>
      <span className='u-circle-outside'> + </span>
    </header>
  );
};

export default Participants;
