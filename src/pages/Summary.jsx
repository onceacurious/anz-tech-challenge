import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import { MyTable } from "../components";
import data from "../../data.json";

const Summary = () => {
  const [issues, setIssues] = useState(data.issue);
  const [tableData, setTableData] = useState(data.issue);

  const handleOverdue = () => {
    const value = issues.filter((i) => i.overdue.toLowerCase() == "y");
    setTableData(value);
  };
  const handleIssues = () => {
    setTableData(data.issue);
  };
  const handleOpen = () => {
    const value = issues.filter((i) => i.status.toLowerCase() == "open");
    setTableData(value);
  };
  const handleClosed = () => {
    const value = issues.filter((i) => i.status.toLowerCase() == "closed");
    setTableData(value);
  };

  const buttons = [
    <Button key="total" onClick={() => handleIssues()}>
      Total Issue {issues.length}
    </Button>,
    <Button key="overdue" onClick={() => handleOverdue()}>
      Issue Overdue{" "}
      {issues.reduce((x, y) => (y.overdue.toLowerCase() == "y" ? x + 1 : x), 0)}
    </Button>,
    <Button key="open" onClick={() => handleOpen()}>
      Issue Open{" "}
      {issues.reduce(
        (x, y) => (y.status.toLowerCase() == "open" ? x + 1 : x),
        0
      )}
    </Button>,
    <Button key="close" onClick={() => handleClosed()}>
      Issue Closed{" "}
      {issues.reduce(
        (x, y) => (y.status.toLowerCase() == "closed" ? x + 1 : x),
        0
      )}
    </Button>,
  ];
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "1rem",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          variant="contained"
          size="large"
          aria-label="large button group"
        >
          {buttons}
        </ButtonGroup>
      </Box>

      <MyTable tableData={tableData} />
    </Container>
  );
};

export default Summary;
