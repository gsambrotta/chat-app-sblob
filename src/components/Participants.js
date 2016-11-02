import React from 'React';
import Avatar from './common/Avatar';

const Participants = ({participants}) => {

	const avatar = participants.map(participant => (
		<Avatar key={participant.id} image={participant.image} />
	));

  return (
    <header>
      <p> To: </p>
      <div id='addContact'>
       {avatar}
      </div>
      <span> + </span>
    </header>
  );
};

export default Participants;
