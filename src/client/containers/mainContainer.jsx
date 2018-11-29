/* eslint-disable import/extensions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeftContainer from './leftContainer.jsx';
import UserContainer from './userContainer.jsx';
import Cards from '../components/card.jsx';
import * as actions from '../actions/actions.js';

const mapStateToProps = store => ({
  isLoggedIn: store.userReducer.isLoggedIn,
  loggedInUser: store.userReducer.loggedInUser,
});

const mainContainer = (props) => {
  console.log(props.isLoggedIn, props.loggedInUser);
  return (
    <div className="body">
      <LeftContainer />
      <div className="innerDiv">
        <UserContainer />
        <div>

          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(mainContainer);
