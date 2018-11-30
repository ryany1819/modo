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
      <div>
        <h4>Email:</h4>
        <p>{card.email}</p>
      </div>
      <div>
        <h4>Phone Number:</h4>
        <p>{card.phoneNum}</p>
      </div>
      <div>
        <img src="https://files.slack.com/files-pri/TC5JHQ97Y-FEFQS96V8/linkedin__1_.png"></img>
        <a href={card.linkedinUrl} target="_blank" rel="noopener noreferrer">{card.linkedinUrl}</a>
      </div>
      <div>
        <img src="https://files.slack.com/files-pri/TC5JHQ97Y-FEFMS2CJF/github.png"></img>
        <a href={card.githubUrl} target="_blank" rel="noopener noreferrer">{card.githubUrl}</a>
      </div>
      <div>
        <img src="https://files.slack.com/files-pri/TC5JHQ97Y-FEFKTET5J/facebook.png"></img>
        <a href={card.facebookUrl} target="_blank" rel="noopener noreferrer">{card.facebookUrl}</a>
      </div>
      <div>
        <img src="https://files.slack.com/files-pri/TC5JHQ97Y-FEFQS3XH8/twitter.png"></img>
        <a href={card.twitterUrl} target="_blank" rel="noopener noreferrer">{card.twitterUrl}</a>
      </div>
      <div>
        <img src="https://files.slack.com/files-pri/TC5JHQ97Y-FEFMRQFSP/instagram.png"></img>
        <a href={card.instagramUrl} target="_blank" rel="noopener noreferrer">{card.instagramUrl}</a>
      </div>
    </div>
  );
};

export default card;
