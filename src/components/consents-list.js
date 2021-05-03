import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import Grid from '@material-ui/core/Grid';

const ConsentsList = () => {
  const [page, setPage] = useState(0);
  const consents = useSelector((state) => state.consents);

  const columns = ['Name', 'Email', 'Consent given for'];

  const ROWS_PER_PAGE = 2;
  const rows = consents.slice(page * ROWS_PER_PAGE, (page + 1) * ROWS_PER_PAGE);
  const pageCount = Math.floor(consents.length / ROWS_PER_PAGE)
    + (consents.length % ROWS_PER_PAGE);

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

  const handlePageChange = (e, value) => { setPage(value - 1); };

  return (
    <Paper className="cypress-consents-list">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column} component="th">
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="td">
                  {row.name}
                </TableCell>
                <TableCell component="td">
                  {row.email}
                </TableCell>
                <TableCell component="td">
                  {consentsToString(row.consents)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container justify="center">
        <Pagination
          style={{ margin: '0.5em 0' }}
          variant="outlined"
          count={pageCount}
          page={page + 1}
          onChange={handlePageChange}
        />
      </Grid>
    </Paper>
  );
};

export default ConsentsList;
