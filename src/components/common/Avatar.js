import React from 'react';
import '../../sass/components/_avatar.scss';

const Avatar = (props) => {

  return (
    <div className='avatar'>
      <img src={props.image} />
    </div>
  );
};

Avatar.propsType = {};

export default Avatar;
