import React from 'react';
import { useSelector } from 'react-redux';

import { DataGrid, useGridSlotComponentProps } from '@material-ui/data-grid';
import Pagination from '@material-ui/lab/Pagination';

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
  const consents = useSelector((state) => state.consents);

  const cols = [
    { field: 'name', headerName: 'Name' },
    { field: 'email', headerName: 'Email' },
    { field: 'consents', headerName: 'Consents', flex: 1 },
  ];

  const consentsToString = (itemConsents) => {
    const strings = [];

    if (itemConsents.newsletter) {
      strings.push('Receive newsletter');
    }

    if (itemConsents.ads) {
      strings.push('Be shown targeted ads');
    }

    if (itemConsents.statistics) {
      strings.push('Contribute to anonymous visit statistics');
    }

    return strings.join(', ');
  };

  const rows = consents.map((item) => ({
    ...item,
    consents: consentsToString(item.consents),
  }));

  return (
    <DataGrid
      className="cypress-consents-list"
      columns={cols}
      rows={rows}
      pageSize={2}
      components={{ Pagination: CustomPagination }}
      disableSelectionOnClick
      autoHeight
      style={{ wordWrap: 'break-word' }}
    />
  );
};

export default ConsentsList;
