import React, { useContext, useEffect, useState } from "react";
import { AnswerCard, IssueCard, MyEditor } from "../components";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AppContext from "../helpers/AppContext";

const RealThing = () => {
  const [comment, setComment] = useState("");
  const { issues, answers } = useContext(AppContext);

  useEffect(() => {
    console.log(answers);
  }, []);

  return (
    <Container maxWidth="lg">
      <IssueCard />
      {issues == null || issues?.length == 0 ? (
        <></>
      ) : (
        <>
          {answers == null || answers?.length == 0 ? (
            <></>
          ) : (
            <>
              <Typography variant="h5" gutterBottom>
                Answers
              </Typography>
              {answers.map((answer, x) => (
                <AnswerCard key={answer.id + x} answer={answer} />
              ))}
            </>
          )}
        </>
      )}
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
