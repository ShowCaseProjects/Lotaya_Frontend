
import "./users.scss";
import usePaymentMethod from "./PaymentMethod.Data";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell  from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import {  Button, TableHead,  TablePagination } from "@mui/material";
import React from "react";

interface Column {
  id: 'paymentMethodId' | 'userId' | 'receiverAccountName' | 'receiverAccount' | 'amount'|'paymentConfirmationCode'|'registerDate'|'updatedDate';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [

  { id: "paymentMethodId", label: "Payment Method Id", minWidth: 160 },

  { id: "userId", label: "User Id", minWidth: 90 },
  {
    id: "receiverAccountName",
    label: "Receiver Account Name",
    minWidth: 200,
  },
  {
    id: "receiverAccount",
    label: "Receiver Account",
    minWidth: 150,
  },
  {
    id: "amount",
    label: "Amount",
    minWidth: 300,
  },
  {
    id: "paymentConfirmationCode",
    label: "Payment Confirmation Code",
    minWidth: 250,
  },
  {
    id: "registerDate",
    label: "Register Date",
    minWidth: 200,
  },
  {
    id: "updatedDate",
    label: "Updated Date",
    minWidth: 200,
  },
];

interface PaymentMethod {
  paymentMethodId: string;
  userId: string;
  receiverAccountName: string;
  receiverAccount: string;
  amount: string;
  paymentConfirmationCode: string;
  registerDate:string;
  updatedDate:string;
}

const Users = () => {
  const [open, setOpen] = useState(false);
  const {paymentmethods}=usePaymentMethod();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  function handleClick(id:any) {
    console.log(`Button clicked for row with id ${id}`);
  }
  
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <Paper sx={{ width: '89%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 800 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paymentmethods
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.paymentMethodId}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                    <Button variant="contained" onClick={() => handleClick(row.paymentMethodId)}>Update</Button>
                    </TableCell>
                    <TableCell>
                    <Button variant="contained" onClick={() => handleClick(row.paymentMethodId)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={paymentmethods.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
};


export default Users;
