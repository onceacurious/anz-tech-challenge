import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TablePagination from "@mui/material/TablePagination";
import { Button } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

import AppContext from "../helpers/AppContext";
import data from "../../data.json";

function createData(division, issue_id, status, overdue, dateraised, subject) {
  return {
    division,
    issue_id,
    status,
    overdue,
    dateraised,
    subject,
  };
}

function Row({ row }) {
  const [open, setOpen] = useState(false);
  const { setIssues, setAnswers } = useContext(AppContext);

  const nav = useNavigate();

  const handleEdit = (e) => {
    nav("support/");
    setIssues(e);

    var answer = data.answer.filter((a) => a.issueId == e?.id);
    setAnswers(answer);
    // console.log(answer);
  };

  return (
    <>
      <TableRow
        sx={{
          "& > *": { borderBottom: "unset" },
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.division}
        </TableCell>
        <TableCell align="right">{row.id}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
        <TableCell align="right">{row.overdue}</TableCell>
        <TableCell align="right">{row.dateraised}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom component="div">
                    Issue
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography>{row.subject}</Typography>
                </Grid>
                <Grid item xs={2} sx={{ textAlign: "right" }}>
                  <Button
                    variant="outlined"
                    startIcon={<BorderColorIcon />}
                    onClick={() => handleEdit(row)}
                  >
                    Edit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    overdue: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    division: PropTypes.string.isRequired,
    dateraised: PropTypes.string.isRequired,
  }).isRequired,
};

const MyTable = ({ tableData }) => {
  const [issues, setIssues] = useState(tableData);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    setIssues(tableData);
  }, [tableData]);
  return (
    <Paper
      elevation={3}
      sx={{ width: "100%", background: "rgba(0, 0, 0, .05)" }}
    >
      <TableContainer sx={{ maxHeight: "70vh" }}>
        <Table aria-label="sticky collapsible table" stickyHeader>
          <TableHead sx={{ color: "white" }}>
            <TableRow>
              <TableCell />
              <TableCell>Division/Department</TableCell>
              <TableCell align="right">Issue Id</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Overdue</TableCell>
              <TableCell align="right">Raised</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {issues
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((i, x) => (
                <Row key={i + x} row={i} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={issues.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default MyTable;
