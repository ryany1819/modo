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

const mainContainer = (props) => {
  const { cards } = props;
  const cardsArray = cards.map((card, index) => <Card card={card} key={index} />);

  return (
    <div className="body">
      <div>
        <LeftContainer />
      </div>
      <div className="innerDiv">
        <UserContainer />
        <div id="cardContainer">
          { cardsArray }
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(mainContainer);
