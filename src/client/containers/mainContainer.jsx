/* eslint-disable import/extensions */
import React from 'react';
import LeftContainer from './leftContainer.jsx';
import UserContainer from './userContainer.jsx';
import Cards from '../components/card.jsx';


const mainContainer = () => (

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

export default mainContainer;
