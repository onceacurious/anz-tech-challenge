import React, { useState, useEffect } from "react";
import { Grid, Box, Button, ButtonGroup, Stack, Divider } from "@mui/material";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import { Link } from "react-router-dom";
import { MyAccordion } from "../components";
import data from "../../data.json";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.dark, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.dark, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Dashboard = () => {
  const [divisions, setDivisions] = useState(data.division);
  const [topic, setTopic] = useState(data.topic);

  const handleChangeTopic = (id) => {
    var oldTopic = data.topic;
    var newTopic = oldTopic.filter((t) => t.divisionId == id);
    setTopic(newTopic);
  };

  useEffect(() => {
    setDivisions(
      [...data.division].sort((a, b) => a.title.localeCompare(b.title))
    );
    setTopic(data.topic);
  }, []);
  return (
    <section style={{ display: "flex", width: "100%", minHeight: "75vh" }}>
      <Grid
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        container
        spacing={1}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100px",
          }}
        >
          <Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Box>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button>ALL {topic.length}</Button>
              <Button>
                CLOSED {topic.filter((t) => t.isClosed == "YES").length}
              </Button>
              <Button>
                OPEN {topic.filter((t) => t.isClosed !== "YES").length}
              </Button>
              <Button>
                OVERDUE {topic.filter((t) => t.isOverdue == "YES").length}
              </Button>
            </ButtonGroup>
          </Box>
        </Grid>
        <Grid
          container
          sx={{
            minHeight: "60vh",
            display: "flex",
            justifyContent: "center",
            flexWrap: "nowrap",
          }}
        >
          <Box
            sx={{
              marginInline: "1rem",
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              paddingTop: "3rem",
            }}
          >
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical outlined button group"
              sx={{ width: "250px" }}
            >
              {divisions.map((d, x) => (
                <Button key={x} onClick={() => handleChangeTopic(d.divisionId)}>
                  {`${d.title} ${
                    data.topic.filter((t) => t.divisionId == d.divisionId)
                      .length
                  }`}
                </Button>
              ))}
            </ButtonGroup>

            <Link
              style={{
                marginLeft: "1rem",
                textDecoration: "underline",
                color: "blue",
                paddingBlock: ".5rem",
              }}
              // to="summary/"
              onClick={() => setTopic(data.topic)}
            >
              Show all
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <MyAccordion topic={topic} />
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default Dashboard;
