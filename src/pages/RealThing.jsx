import React, { useState } from "react";
import { AnswerCard, IssueCard, MyEditor } from "../components";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const RealThing = () => {
  const [comment, setComment] = useState("");

  return (
    <Container maxWidth="lg">
      <IssueCard />
      <Typography variant="h5" gutterBottom>
        Answers
      </Typography>
      <AnswerCard />
      <AnswerCard />
      <AnswerCard />
      <Paper
        elevation={3}
        sx={{
          padding: "1rem",
          marginBlock: "2rem",
          background: "rgba(0, 0, 0, .10)",
        }}
      >
        <MyEditor />
      </Paper>
    </Container>
  );
};

export default RealThing;
