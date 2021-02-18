import React from 'react';

import BaseCell from './BaseCell';

const TextCell = (props) => {
  const { text } = props;

  return <BaseCell className={props.className}>{text}</BaseCell>;
};

export default TextCell;
