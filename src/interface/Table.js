import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';

import Table from 'foundation/Table';

import { fetchData, resetData, modifyView } from './table.actions';

import { getData, getIsFetchingData } from './table.selectors';
import { getConfig } from '../config/config.selectors';
import { getView } from '../view/view.selectors';

const TableContainer = () => {
  const dispatch = useDispatch();
  const { columns: configColumns } = useSelector(getConfig);
  const view = useSelector(getView);
  const { columns: viewColumns, sort: sortBy } = view;
  const isFetchingData = useSelector(getIsFetchingData);
  const data = useSelector(getData);

  // given the view - fetch the data
  useEffect(() => {
    if (view?._id) {
      dispatch(fetchData(view));
    }
  }, [dispatch, view]);

  const handleSort = (sort) => {
    dispatch(resetData());
    dispatch(modifyView({ sort }));
  };

  if (!viewColumns || !configColumns) return null;
  return (
    <div className="d-flex-fill flex-1 overflow-y-scroll px-9">
      <Table
        className={cn({
          'data-qa-table-ready': !isFetchingData && data,
        })}
        data={data}
        onSort={handleSort}
        sortBy={sortBy}
      />
    </div>
  );
};

export default TableContainer;
