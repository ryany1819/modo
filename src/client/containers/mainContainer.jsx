/* eslint-disable import/extensions */
import React from 'react';
import LeftContainer from './LeftContainer.jsx';
import UserContainer from './userContainer.jsx';
import Cards from '../components/card.jsx';



const MainContainer = () => (

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


export default MainContainer;
