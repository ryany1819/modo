/* eslint-disable import/extensions */
import React from 'react';

const userContainer = (props) => {
  const { loggedInUser } = props;
  console.log(loggedInUser);
  return (
    <div className="user">
      Welcome, {loggedInUser}!
    </div>
  );
};

export default userContainer;
