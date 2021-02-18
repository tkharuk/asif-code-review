import React from 'react';

const BaseCell = (props) => {
  return <div className="cell">{props.children}</div>;
};

export default BaseCell;
