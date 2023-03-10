import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import {
  TextField,
  Box,
  Tabs,
  Tab,
  Button,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { add_division, get_divisions, update_division } from "../helpers/API";
import { Register } from "../components";

const style = {
  width: "100%",
  bgcolor: "rgba(232, 232, 227, .50)",
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Admin = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [divisions, setDivisions] = useState();
  const [title, setTitle] = useState();
  const titleRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getDivisions = async () => {
    var res = await get_divisions();
    setDivisions(res);
  };

  const addDivision = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const div = { title: data.get("title") };

    await add_division(div);
    var res = getDivisions();
    setDivisions(res);
  };

  const getDivision = async (id) => {};

  const updateDivision = async (id) => {
    const data = new FormData(e.currentTarget);
    const div = { title: data.get("title") };

    const res = update_division(id, div);
    setDivisions(res);
  };

  useEffect(() => {
    getDivisions();
  }, []);
  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Add Division" />
        <Tab label="Register User" />
        <Tab label="Item Three" />
      </Tabs>
      <Divider />
      <TabPanel value={value} index={0} dir={theme.direction}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                textAlign: "left",
              }}
              component="form"
              onSubmit={addDivision}
              noValidate
            >
              <TextField
                id="outlined-basic"
                label="Division Title"
                variant="outlined"
                sx={{ minWidth: "300px" }}
                name="title"
                autoComplete="title"
                autoFocus
                required
                ref={titleRef}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{ width: "fit-content", marginTop: "1rem" }}
              >
                Submit
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <Box sx={{ maxHeight: "500px", overflow: "auto" }}>
              <List sx={style} component="nav" aria-label="mailbox folders">
                {divisions?.length > 0 ? (
                  divisions?.map((d, x) => (
                    <div key={x}>
                      <ListItem button onClick={() => console.log()}>
                        <ListItemText primary={d.title.toUpperCase()} />
                      </ListItem>
                      <Divider />
                    </div>
                  ))
                ) : (
                  <div>
                    <ListItem>
                      <ListItemText primary="Nothing to display" />
                    </ListItem>
                    <Divider />
                  </div>
                )}
              </List>
            </Box>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <h2>Register user</h2>
        <Register />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <h2>Other tab</h2>
      </TabPanel>
    </Box>
  );
};

export default Admin;
