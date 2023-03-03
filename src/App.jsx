import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

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
import { Navbar } from "./components";
import { AppProvider } from "./helpers/AppContext";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Tooltip, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Icon
import DashboardIcon from "@mui/icons-material/Dashboard";
import SummarizeIcon from "@mui/icons-material/Summarize";
import TimelineIcon from "@mui/icons-material/Timeline";
import CreateIcon from "@mui/icons-material/Create";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

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
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <AppProvider>
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
              <Link to="login/" style={{ color: "inherit" }}>
                <Button color="inherit">Login</Button>
              </Link>
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
                  <ListItemText
                    primary="Graph"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
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
                  <ListItemText
                    primary="Graph"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
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
                  <ListItemText
                    primary="Graph"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>

          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <DrawerHeader />
              <Routes>
                <Route index path="/" element={<Dashboard />} />
                <Route index path="summary/" element={<Summary />} />
                <Route path="login/" element={<Login />} />
                <Route path="register/" element={<Register />} />
                <Route path="support/" element={<Support />} />
                <Route path="ask-question/" element={<AskQuestion />} />
                <Route path="admin/" element={<Admin />} />
                <Route path="graph/" element={<Graph />} />
              </Routes>
            </Box>
          </ThemeProvider>
        </Router>
      </Box>
    </AppProvider>
  );
};

export default App;
