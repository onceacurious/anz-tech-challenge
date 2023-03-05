import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import {
  Summary,
  Support,
  Login,
  Graph,
  Register,
  Dashboard,
  AskQuestion,
  Admin,
} from "./pages";
import AppContext from "./helpers/AppContext";

import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Menu,
  MenuItem,
  Toolbar,
  List,
  Tooltip,
  Button,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CssBaseline,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
// Icon
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SummarizeIcon from "@mui/icons-material/Summarize";
import TimelineIcon from "@mui/icons-material/Timeline";
import CreateIcon from "@mui/icons-material/Create";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

import PrivateRoute from "./helpers/PrivateRoute";

const dark = createTheme({
  palette: {
    mode: "dark",
  },
});

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const App = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { isAuthenticated, validate_token, username } = useContext(AppContext);

  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    validate_token();
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <Router>
        <AppBar
          position="fixed"
          open={open}
          sx={{ background: "rgba(1, 0, 89, .90)" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,

                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ANZ Internal Audit
            </Typography>

            {isAuthenticated ? (
              <div>
                <Button
                  id="basic-button"
                  aria-controls={openMenu ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                  onClick={handleClick}
                >
                  {username}
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <Link to="login/" style={{ color: "inherit" }}>
                <Button color="inherit">Login</Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          sx={{ background: "rgba(0,0,0,.90) !important" }}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />

          {/* TOP LIST ITEM */}
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              {/* DASHBOARD */}
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Link to="/" style={{ color: "inherit" }}>
                    <Tooltip title="Dashboard">
                      <DashboardIcon />
                    </Tooltip>
                  </Link>
                </ListItemIcon>
                <ListItemText
                  primary="Dashboard"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>

              {/* CREATE */}
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Link to="ask-question/" style={{ color: "inherit" }}>
                    <Tooltip title="Ask Question">
                      <CreateIcon />
                    </Tooltip>
                  </Link>
                </ListItemIcon>
                <ListItemText primary="Graph" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>

              {/* SUMMARY */}
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                disabled
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Link to="summary/" style={{ color: "inherit" }}>
                    <Tooltip title="Summary">
                      <SummarizeIcon />
                    </Tooltip>
                  </Link>
                </ListItemIcon>
                <ListItemText
                  primary="Summary"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>

              {/* GRAPH */}
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Link to="graph/" style={{ color: "inherit" }}>
                    <Tooltip title="Graph">
                      <TimelineIcon />
                    </Tooltip>
                  </Link>
                </ListItemIcon>
                <ListItemText primary="Graph" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />

          {/* BOTTOM LIST ITEM  TO BE IMPLEMENTED*/}
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                {/* ADMIN */}
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Tooltip title="Admin Panel">
                    <Link to="admin/" style={{ color: "inherit" }}>
                      <AdminPanelSettingsIcon />
                    </Link>
                  </Tooltip>
                </ListItemIcon>
                <ListItemText
                  primary="Admin Panel"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                disabled
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Link to="summary/" style={{ color: "inherit" }}>
                    <SummarizeIcon />
                  </Link>
                </ListItemIcon>
                <ListItemText
                  primary="Summary"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Link to="graph/" style={{ color: "inherit" }}>
                    <TimelineIcon />
                  </Link>
                </ListItemIcon>
                <ListItemText primary="Graph" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Routes>
              <Route
                index
                path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                index
                path="summary/"
                element={
                  <PrivateRoute>
                    <Summary />
                  </PrivateRoute>
                }
              />
              <Route
                path="support/"
                element={
                  <PrivateRoute>
                    <Support />
                  </PrivateRoute>
                }
              />
              <Route
                path="ask-question/"
                element={
                  <PrivateRoute>
                    <AskQuestion />
                  </PrivateRoute>
                }
              />
              <Route
                path="admin/"
                element={
                  <PrivateRoute>
                    <Admin />
                  </PrivateRoute>
                }
              />
              <Route
                path="graph/"
                element={
                  <PrivateRoute>
                    <Graph />
                  </PrivateRoute>
                }
              />
              <Route path="login/" element={<Login />} />
              <Route path="register/" element={<Register />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </Router>
    </Box>
  );
};

export default App;
