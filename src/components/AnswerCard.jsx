import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ReactTimeAgo from "react-timeago";

const AnswerCard = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
          <Typography variant="body1" gutterBottom>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt earum
            obcaecati sed mollitia sapiente delectus quidem labore modi, dolore
            veritatis excepturi adipisci suscipit nemo id commodi quaerat minima
            rerum ipsam! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Sunt earum obcaecati sed mollitia sapiente delectus quidem
            labore modi, dolore veritatis excepturi adipisci suscipit nemo id
            commodi quaerat minima rerum ipsam!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt earum
            obcaecati sed mollitia sapiente delectus quidem labore modi, dolore
            veritatis excepturi adipisci suscipit nemo id commodi quaerat minima
            rerum ipsam! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Sunt earum obcaecati sed mollitia sapiente delectus quidem
            labore modi, dolore veritatis excepturi adipisci suscipit nemo id
            commodi quaerat minima rerum ipsam!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Author: User_1</Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: "end" }}>
          <ReactTimeAgo date={"2023-02-20T12:00:00Z"} />
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

export default AnswerCard;
