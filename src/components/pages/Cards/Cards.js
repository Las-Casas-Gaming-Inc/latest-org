import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CardSub from './CardSub';
import CardSubA from './CardSubA';
import CardSubB from './CardSubB';
import CardSubC from './CardSubC';
import CardSubD from './CardSubD';

function Cards() {

  return (
    <div className='cards'>
      <h1>LEGEND</h1>
      <div className="card-container">
      <CardItem
        title="Employee"
      />
      <CardSub
        title="Shared Services"
      />
      <CardSubA
        title="Vacant"
      />
      <CardSubB
        title="Supervisor"
      />
      <CardSubC
        title="Consultant"
      />
      <CardSubD
        title="Department Head"
      />
      </div>
    </div>
  );
}

export default Cards;
