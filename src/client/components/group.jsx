/* eslint-disable react/button-has-type */
import React from 'react';


const Group = (props) => {
  const { group, getCards, updateGroup } = props;

  return (
    <button className="groups" id={group.groupId} onClick={() => { updateGroup(group.groupId); getCards(group.groupId); }}>
      { group.groupName }
    </button>
  );
};
export default Group;
