/* eslint-disable import/extensions */
import React from 'react';
import { connect } from 'react-redux';
import LeftContainer from './leftContainer.jsx';
import UserContainer from './userContainer.jsx';
import Card from '../components/card.jsx';
import * as actions from '../actions/actions.js';

const mapStateToProps = store => ({
  isLoggedIn: store.userReducer.isLoggedIn,
  loggedInUser: store.userReducer.loggedInUser,
  cards: store.leftContainerReducer.cards,
});

const mapDispatchToProps = dispatch => ({
  joinGroup: () => {
    dispatch(actions.joinGroup());
  },
});

const mainContainer = (props) => {
  const { cards, loggedInUser, joinGroup } = props;
  const cardsArray = cards.map((card, index) => <Card card={card} key={index} />);

  return (
    <div className="maincontainer">
      <div>
        <LeftContainer />
      </div>
      <div className="innerDiv">
        <UserContainer loggedInUser={loggedInUser} />
        <div className="cardContainer">
          <div><button onClick={joinGroup}>Join Group</button></div>
          { cardsArray }
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(mainContainer);
