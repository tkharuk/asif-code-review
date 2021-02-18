import React, { useState } from 'react';
import { useTable, useFilters, useSortBy } from 'react-table';

import TextCell from './cells/TextCell';
import PersonCell from './cells/PersonCell';
import DateCell from './cells/DateCell';

const CELLS = {
  TextCell,
  PersonCell,
  DateCell,
};

export default function Table({ columns, data }) {
  const [filterInput, setFilterInput] = useState('');
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy
  );

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter('show.name', value);
    setFilterInput(value);
  };

  // Render the UI for your table
  return (
    <>
      <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={'Search name'}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? 'sort-desc'
                        : 'sort-asc'
                      : ''
                  }
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  const { cellType = '' } = cell;
                  const Cell = CELLS[cellType] || TextCell;

                  return (
                    <td {...cell.getCellProps()}>
                      {<Cell value={cell.value} {...cell} />}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
