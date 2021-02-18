import React from 'react';
import cn from 'classnames';

const BaseCell = (props) => {
  return <div className={cn('cell', props.className)}>{props.children}</div>;
};

export default BaseCell;
