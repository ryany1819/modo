/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Group from '../components/group.jsx';
import * as actions from '../actions/actions.js';


// on component did mount, grab all groups where userId = loggedIn user;
// return array with groups
// map through returned array and create group components. ===> GroupName, Desc

const mapStateToProps = store => ({
  groups: store.leftContainerReducer.groups,
  loginEmail: store.userReducer.loginEmail,
});

const mapDispatchToProps = dispatch => ({
  getGroups: () => {
    dispatch(actions.getGroups());
  },
  getCards: (groupId) => {
    dispatch(actions.getCards(groupId));
  },
});

class LeftContainer extends Component {
  componentWillMount() {
    const { getGroups } = this.props;

    getGroups();
  }

  render() {
    //  console.log('props', this.props.groups)

    const { groups, getCards } = this.props;
    const groupsArray = groups.map((group, index) => <Group group={group} getCards={getCards} key={ index } />);
    return (
      <div>
        { groupsArray }
      </div>

    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LeftContainer);
