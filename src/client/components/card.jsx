/* eslint-disable react/button-has-type */
import React from 'react';

const card = (props) => {
  const { card } = props;
  console.log(card);
  return (
    <div className="cards">
      <img className="avatar" src={card.avatarUrl} />
      <h2>
        {card.firstName}
        {' '}
        {card.lastName}
      </h2>
      <h4>{card.email}</h4>
      <h4>{card.phoneNum}</h4>
      <h4>{card.linkedinUrl}</h4>
      <h4>{card.githubUrl}</h4>
      <h4>{card.facebookUrl}</h4>
      <h4>{card.twitterUrl}</h4>
      <h4>{card.instagramUrl}</h4>
    </div>
  );
};

export default card;
