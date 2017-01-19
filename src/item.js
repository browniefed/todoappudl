import React from 'react';

const Item = ({ children, onDelete}) => {
  return (
    <div>
      <span>{children}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Item;