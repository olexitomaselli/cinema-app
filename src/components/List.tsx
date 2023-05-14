import React, { useRef } from 'react';
import { Card } from './Card';
import { Data } from '../data/Data';

export const List = () => {

  return (
    <div className="list-container">
      <span className="listTitle">Continua a guardare</span>
        <div className="card-container">
          <Card />
        </div>
        <div>
        <Data />
        </div>
      </div>
  );
};
