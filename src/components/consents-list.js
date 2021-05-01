import React from 'react';
import { DataGrid, useGridSlotComponentProps } from '@material-ui/data-grid';
import Pagination from '@material-ui/lab/Pagination';

import ConsentService from '../services/consent-service';

const CustomPagination = () => {
  const { state, apiRef } = useGridSlotComponentProps();
  return (
    <Pagination
      variant="outlined"
      count={state.pagination.pageCount}
      page={state.pagination.page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
};

const ConsentsList = () => {
  const consents = ConsentService.getAll();

  const cols = [
    { field: 'name', headerName: 'Name' },
    { field: 'email', headerName: 'Email' },
    { field: 'consents', headerName: 'Consents' },
  ];

  return (
    <DataGrid
      columns={cols}
      rows={consents}
      pageSize={2}
      components={{ Pagination: CustomPagination }}
      disableSelectionOnClick
      autoHeight
    />
  );
};

export default ConsentsList;
