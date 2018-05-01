import React from 'react';

const Box = ({link, linkName, description, imgLink}) => {
  return (
    <div className='tc dib br3 ma0 pa3 black bg-light-gray ma2 grow bw2 shadow-5'>
      <h2>{linkName}</h2>
      <a className='black' href={link} target='_blank'>
        <img className='h2' src={imgLink} alt='icon' />
      </a>
      <p>{description}</p>
    </div>
  );
};

export default Box;
