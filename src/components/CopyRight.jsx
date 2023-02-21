import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const CopyRight = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        target="_blank"
        color="inherit"
        href="https://www.linkedin.com/in/francis-deo-aurelio-05a380174/"
      >
        Francis Deo Aurelio
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default CopyRight;
