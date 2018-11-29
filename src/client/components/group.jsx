/* eslint-disable react/button-has-type */
import React from 'react';


const Group = (props) => {
  const { group, getCards } = props;

  return (
    <button className="groups" onClick={() => getCards(group.groupId)}>  group.groupName </button>
  );
};
export default Group;
