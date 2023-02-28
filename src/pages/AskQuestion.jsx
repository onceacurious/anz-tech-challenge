import { Box, Container, Typography, TextField, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { MyEditor } from "../components";

const AskQuestion = () => {
  return (
    <div>
      <Container maxWidth="90%">
        <Typography variant="h3" gutterBottom>
          Ask Question
        </Typography>
        <Box
          component="div"
          sx={{
            border: "1px solid rgba(224, 222, 215, .90)",
            background: "rgba(255, 253, 247, .95)",
            borderRadius: "4px",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Typography variant="body1" gutterBottom>
            Please ask a brief and concise question. You can look for a similar
            question{" "}
            <Link style={{ textDecoration: "underline", color: "blue" }}>
              here
            </Link>
            .
          </Typography>
          <TextField fullWidth label="Subject..." id="subject" />
        </Box>

        <MyEditor />
      </Container>
    </div>
  );
};

export default AskQuestion;
