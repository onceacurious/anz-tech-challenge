import React from "react";
import { Grid, Box, Button, ButtonGroup, Stack, Divider } from "@mui/material";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import { Link } from "react-router-dom";
import { MyAccordion } from "../components";

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
  return (
    <section style={{ display: "flex", width: "100%", minHeight: "75vh" }}>
      <Grid
        direction="column"
        justifyContent="center"
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
              <Button>ALL 500</Button>
              <Button>CLOSED 70</Button>
              <Button>OPEN 30</Button>
              <Button>OVERDUE 15</Button>
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
              <Button>Admin</Button>
              <Button>Support</Button>
              <Button>Customer Service</Button>
              <Button>Human Resource</Button>
            </ButtonGroup>

            <Link
              style={{
                marginLeft: "1rem",
                textDecoration: "underline",
                color: "blue",
                paddingBlock: ".5rem",
              }}
              to="summary/"
            >
              Show all
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <MyAccordion />
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default Dashboard;
