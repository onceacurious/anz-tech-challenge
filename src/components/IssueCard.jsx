import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import ReactTimeAgo from "react-timeago";

const IssueCard = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Paper
      elevation={3}
      sx={{
        marginBlock: "1rem",
        padding: "1rem",
        background: "rgba(0, 0, 0, .10)",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={1}>
            <Chip color="primary" label="Open" />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, doloribus.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant="overline" display="block">
            Division 1
          </Typography>
        </Grid>
        <Grid item md={6} sx={{ textAlign: "end" }}>
          <Typography variant="overline" display="block">
            <ReactTimeAgo date={"2023-02-20T12:00:00Z"} />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              minHeight: "55px",
              padding: "1rem",
              background: "rgba(0, 0, 0, .25)",
            }}
          >
            {/* Hard Coded Comment Sample */}
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

export default IssueCard;
