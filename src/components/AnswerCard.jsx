import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ReactTimeAgo from "react-timeago";
import Chip from "@mui/material/Chip";

const AnswerCard = ({ answer, index }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    console.log(answer);
  }, []);
  return (
    <Paper
      sx={{
        padding: "1rem",
        marginBottom: "2rem",
        background: "rgba(0, 0, 0, .10)",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Chip color="primary" label={`ANSWER: ${index + 1}`} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            {answer.description}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Author: {answer.author}</Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: "end" }}>
          <ReactTimeAgo date={answer.createdDate} />
        </Grid>
        {/* For implementation */}
        {/* Hard Coded Comment Sample */}
        <Grid item xs={12}>
          {/* 
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              minHeight: "55px",
              padding: "1rem",
              background: "rgba(0, 0, 0, .25)",
            }}
          >


            <Grid
              item
              xs={12}
              sx={{
                padding: "16px 8px",
                marginBlock: "4px",
                borderBottom: "2px solid #fff",
              }}
            >
              Comment 0. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Numquam, nesciunt?
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                padding: "16px 8px",
                marginBlock: "4px",
                borderBottom: "2px solid #fff",
              }}
            >
              Comment 1. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Numquam, nesciunt?
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                padding: "16px 8px",
                marginBlock: "4px",
                borderBottom: "2px solid #fff",
              }}
            >
              Comment 2. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Numquam, nesciunt?
            </Grid> 
          </Paper>
            */}
        </Grid>
        <Grid item xs={12}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              id="standard-basic"
              label="Add Comment"
              variant="standard"
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AnswerCard;
