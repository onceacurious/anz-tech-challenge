import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const MyEditor = () => {
  const [_id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState("");
  const [content, setContent] = useState("");
  const [headline, setHeadline] = useState("");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(false);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleSubmit = (event) => {
    event.preventDefault();
    const content = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    console.log(content);
  };

  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={{
          width: "85%",
          marginInline: "auto",
        }}
      >
        <Box
          sx={{
            padding: "1rem",
            marginBlock: "2rem",
            border: "2px solid #888",
            boxShadow: "6px 6px 2px #999",
          }}
        >
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
          />
        </Box>
        <Button variant="contained" color="success" type="submit">
          Post Answer
        </Button>
      </Box>
    </>
  );
};

export default MyEditor;
