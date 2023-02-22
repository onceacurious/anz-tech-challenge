import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { Image } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import ReactHtmlParser from "react-html-parser";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import data from "../../data.json";

const MyEditor = () => {
  const [_id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState("");
  const [content, setContent] = useState("");
  const [headline, setHeadline] = useState("");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState(data.answer);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {}, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = convertToRaw(editorState.getCurrentContent());
    const markup = draftToHtml(text);
    setContent(markup);
    // console.log(content);
  };

  const toolbarOptions = {
    options: [
      "blockType",
      "fontSize",
      "inline",
      "list",
      "textAlign",
      "link",
      "image",
      "history",
      "code",
      "quote",
    ],
    blockType: {
      inDropdown: true,
      options: ["Normal", "H1", "H2", "H3", "H4", "H5", "H6"],
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
    },
    fontSize: {
      icon: "size",
      options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
    },
    image: {
      className: undefined,
      component: undefined,
      popupClassName: undefined,
      urlEnabled: true,
      uploadEnabled: true,
      alignmentEnabled: true,
      uploadCallback: undefined,
      previewImage: false,
      inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
      alt: { present: false, mandatory: false },
      defaultSize: {
        height: "auto",
        width: "auto",
      },
    },
    link: {
      inDropdown: false,
      className: undefined,
      component: undefined,
      popupClassName: undefined,
      dropdownClassName: undefined,
      showOpenOptionOnHover: true,
      defaultTargetOption: "_self",
      options: ["link", "unlink"],
      linkCallback: undefined,
    },
    code: {
      className: undefined,
      component: undefined,
    },
    quote: {
      className: undefined,
      component: undefined,
    },
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
            toolbar={{ toolbarOptions }}
            placeholder="Enter your text here..."
            // toolbar={{
            //   options: [
            //     "inline",
            //     "blockType",
            //     "fontSize",
            //     "fontFamily",
            //     "list",
            //     "textAlign",
            //     "colorPicker",
            //     "link",
            //     "embedded",
            //     "emoji",
            //     "image",
            //     "remove",
            //     "history",
            //   ],
            //   inline: {
            //     options: [
            //       "bold",
            //       "italic",
            //       "underline",
            //       "strikethrough",
            //       "monospace",
            //     ],
            //   },
            //   blockType: {
            //     options: [
            //       "Normal",
            //       "H1",
            //       "H2",
            //       "H3",
            //       "H4",
            //       "H5",
            //       "H6",
            //       "Blockquote",
            //       "Code",
            //     ],
            //   },
            //   fontSize: {
            //     options: [
            //       8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96,
            //     ],
            //   },
            //   image: {
            //     icon: Image,
            //     className: undefined,
            //     component: undefined,
            //     popupClassName: undefined,
            //     urlEnabled: true,
            //     uploadEnabled: true,
            //     alignmentEnabled: true,
            //     uploadCallback: undefined,
            //     inputAccept:
            //       "image/gif,image/jpeg,image/jpg,image/png,image/svg",
            //     alt: { present: false, mandatory: false },
            //     defaultSize: { height: "auto", width: "auto" },
            //   },
            // }}
          />
        </Box>
        <Button
          variant="contained"
          color="success"
          type="submit"
          sx={{ marginBottom: "1rem" }}
        >
          Post Answer
        </Button>
        <div>{ReactHtmlParser(content)}</div>
      </Box>
    </>
  );
};

export default MyEditor;
