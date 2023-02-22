import React, { useState, useContext, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import ReactTimeAgo from "react-timeago";
import AppContext from "../helpers/AppContext";

const IssueCard = () => {
  const [issue, setIssue] = useState([]);
  const { issues } = useContext(AppContext);

  useEffect(() => {
    // setIssue(issues == null ? [] : []);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {issues == null || issues == "undefined" || issues?.length == 0 ? (
        <></>
      ) : (
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
                {issues.subject?.length == 0 ? "No subject" : issues.subject}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                {issues.description?.length == 0
                  ? "No description"
                  : issues.description}
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography variant="overline" display="block">
                {issues.division?.toUpperCase()}
              </Typography>
            </Grid>
            <Grid item md={6} sx={{ textAlign: "end" }}>
              <Typography variant="overline" display="block">
                <ReactTimeAgo date={issues.dateraised} />
              </Typography>
            </Grid>
            {issues.comment?.length == 0 || issues.comment == null ? (
              <></>
            ) : (
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
                  {issues.comment.map((com) => (
                    <Grid
                      key={com.id}
                      item
                      xs={12}
                      sx={{
                        padding: "16px 8px",
                        marginBlock: "4px",
                        borderBottom: "2px solid #fff",
                      }}
                    >
                      {com.text}
                    </Grid>
                  ))}
                </Paper>
              </Grid>
            )}
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
      )}
    </>
  );
};

export default IssueCard;
