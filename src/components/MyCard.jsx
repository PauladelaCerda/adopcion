import React from 'react';
import Tags from './Tags';

function MyCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <Tags text={props.tagText} color={props.tagColor} />
      </div>
    </div>
  );
}

export default MyCard;
