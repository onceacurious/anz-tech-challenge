import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React from "react";
import { DivisionIssue, RaisedIssue } from "../components";

const Graph = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} sx={{ padding: "2rem" }}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <h2>ANZ Graph</h2>
        </Grid>
        <Grid item md={12} lg={6}>
          <Paper elevation={3}>
            <RaisedIssue />
          </Paper>
        </Grid>
        <Grid item md={12} lg={6}>
          <Paper elevation={3}>
            <DivisionIssue />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Graph;
