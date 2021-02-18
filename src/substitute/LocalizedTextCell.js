import React from 'react';

import TextCell from './TextCell';
import localize from 'localization.service';

const LocalizedTextCell = (props) => {
  const { value } = props;
  const localized = localize(value);

  return <TextCell className={props.className}>{localized}</TextCell>;
};

export default LocalizedTextCell;
