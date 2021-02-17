import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';

import Table from 'foundation/Table';

import { fetchData } from './table.actions';

import { getData, getIsFetchingData } from './table.selectors';
import { getConfig } from '../config/config.selectors';
import { getView } from '../view/view.selectors';

const TableContainer = () => {
  const dispatch = useDispatch();
  const { columns: configColumns } = useSelector(getConfig);
  const view = useSelector(getView);
  const { columns: viewColumns } = view;
  const isFetchingData = useSelector(getIsFetchingData);
  const data = useSelector(getData);

  // given the view - fetch the data
  useEffect(() => {
    if (view?._id) {
      dispatch(fetchData(view));
    }
  }, [dispatch, view]);

  if (!viewColumns || !configColumns) return null;
  return (
    <div className="d-flex-fill flex-1 overflow-y-scroll px-9">
      <Table
        className={cn({
          'data-qa-table-ready': !isFetchingData && data,
        })}
        data={data}
      />
    </div>
  );
};

export default TableContainer;
