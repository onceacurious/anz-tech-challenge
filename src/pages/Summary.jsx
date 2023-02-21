import React, { useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import { MyTable } from "../components";
import data from "../../data.json";

const Summary = () => {
  const [issues, setIssues] = useState(data.issue);
  console.log();
  const buttons = [
    <Button key="total">Total Issue {issues.length}</Button>,
    <Button key="overdue">
      Issue Overdue{" "}
      {issues.reduce((x, y) => (y.overdue.toLowerCase() == "y" ? x + 1 : x), 0)}
    </Button>,
    <Button key="open">
      Issue Open{" "}
      {issues.reduce(
        (x, y) => (y.status.toLowerCase() == "open" ? x + 1 : x),
        0
      )}
    </Button>,
    <Button key="close">
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

      <MyTable />
    </Container>
  );
};

export default Summary;
