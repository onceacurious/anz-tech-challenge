import React, { useState, useContext, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import ReactTimeAgo from "react-timeago";
import AppContext from "../helpers/AppContext";
import TextField from "@mui/material/TextField";

const IssueCard = () => {
  const [issue, setIssue] = useState([]);
  const { topic } = useContext(AppContext);

  useEffect(() => {}, []);
  const ariaLabel = { "aria-label": "description" };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {topic == null || topic == "undefined" || topic?.length == 0 ? (
        <></>
      ) : (
        <Paper
          elevation={3}
          sx={{
            marginBlock: "1rem",
            padding: "1rem",
            background: "rgba(232, 232, 227, .50)",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Chip color="warning" label={`TOPIC ID: ${topic.topicId}`} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                {topic.subject?.length == 0 ? "No subject" : topic.subject}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                {topic.markupText?.length == 0
                  ? "No description"
                  : topic.markupText}
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography variant="overline" display="block">
                {topic.divisionId}
              </Typography>
            </Grid>
            <Grid item md={6} sx={{ textAlign: "end" }}>
              <Typography variant="overline" display="block">
                <ReactTimeAgo date={topic.createdDate} />
              </Typography>
            </Grid>
            {topic.comment?.length == 0 || topic.comment == null ? (
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
                  {topic.comment.map((com) => (
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
                  "& > :not(style)": {
                    // width: 500,
                    maxWidth: "100%",
                  },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <TextField fullWidth label="Add Comment" id="fullWidth" />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}
    </>
  );
};

export default IssueCard;
