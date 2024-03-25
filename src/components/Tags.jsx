import React from 'react';

function Tags(props) {
  return (
    <span className={`badge bg-${props.color}`}>{props.text}</span>
  );
}

export default Tags;
