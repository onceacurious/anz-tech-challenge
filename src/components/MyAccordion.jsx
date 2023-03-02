import React, { useEffect, useState, useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Button,
  MenuItem,
  Menu,
  Divider,
  Stack,
  Pagination,
  TableContainer,
  TablePagination,
  Chip,
  Tooltip,
  Badge,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddTaskIcon from "@mui/icons-material/AddTask";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { pink } from "@mui/material/colors";
import { styled, alpha } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactTimeAgo from "react-timeago";

import AppContext from "../helpers/AppContext";
import data from "../../data.json";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const MyAccordion = ({ topic }) => {
  const [expanded, setExpanded] = useState(false);
  const [relValue, setRelValue] = useState("Filter");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const [division, setDivision] = useState([]);
  const { setTopic, setAnswers } = useContext(AppContext);
  const nav = useNavigate();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    const value = e.target.innerText.toLowerCase();
    console.log(value);
    if (value.trim() != "" && value.trim() != "clear filter") {
      setRelValue(e.target.innerText);
    } else if (value.trim() == "clear") {
      setRelValue("Filter");
    } else {
      setRelValue("Filter");
    }
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleMore = (e) => {
    nav("support/");
    setTopic(e);

    var answer = data.answer.filter((a) => a.topicId == e?.id);
    setAnswers(answer);
  };

  useEffect(() => {
    setDivision(data.division);
  }, []);

  return (
    <>
      <Box
        sx={{
          paddingBlock: ".5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Button
          size="small"
          onClick={() => nav("ask-question/")}
          variant="contained"
          startIcon={<AddTaskIcon />}
        >
          Ask Question
        </Button>
        <div>
          <Button
            id="demo-customized-button"
            size="small"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="outlined"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            {relValue}
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              Recent
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Urgent
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Most Answer
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose} disableRipple>
              Clear Filter
            </MenuItem>
          </StyledMenu>
        </div>
      </Box>

      {/* Accordion Here */}
      <div
        style={{
          borderRadius: "4px",
          border: "1px solid #999",
          // boxShadow: "0 0 2px 2px #999",
          padding: "4px",
        }}
      >
        <TableContainer sx={{ maxHeight: "65vh" }}>
          {topic
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((i, x) => (
              <Accordion
                key={x}
                expanded={expanded === `panel${i.topicId}`}
                onChange={handleChange(`panel${i.topicId}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${i.topicId}bh-content`}
                  id={`panel${i.topicId}bh-header`}
                >
                  {i.isClosed == "YES" ? (
                    <Tooltip title="Closed">
                      <CheckCircleIcon
                        color="success"
                        sx={{ paddingRight: "2px" }}
                      />
                    </Tooltip>
                  ) : (
                    <>
                      {i.isOverdue == "YES" ? (
                        <Tooltip title="Overdue">
                          <ThumbDownIcon
                            sx={{ color: pink[500], paddingRight: "2px" }}
                          />
                        </Tooltip>
                      ) : (
                        ""
                      )}
                      <Tooltip title="Open">
                        <UnpublishedIcon
                          sx={{ color: pink[500], paddingRight: "2px" }}
                        />
                      </Tooltip>
                    </>
                  )}
                  <Typography sx={{ width: "33%", flexGrow: 1 }}>
                    {division.find((x) => x.divisionId == i.divisionId)?.title}
                  </Typography>
                  <Badge
                    title={`${
                      data.answer.filter((a) => a.topicId == i.topicId).length
                    } answer`}
                    badgeContent={
                      data.answer.filter((a) => a.topicId == i.topicId).length
                    }
                    color="primary"
                  >
                    <Typography
                      sx={{
                        color: "text.secondary",
                        minWidth: "120px",
                        textAlign: "right",
                        fontWeight: "bold",
                      }}
                    >
                      {i.category}
                    </Typography>
                  </Badge>
                  <Typography
                    sx={{
                      width: "40%",
                      flexShrink: 0,
                      textAlign: "right",
                      marginRight: "1rem",
                    }}
                  >
                    {<ReactTimeAgo date={i.createdDate} />}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                  <p
                    style={{
                      color: "blue",
                      textDecoration: "underline",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleMore(i)}
                  >
                    more details...
                  </p>
                </AccordionDetails>
              </Accordion>
            ))}
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[15, 25, 50, 100]}
          component="div"
          count={topic.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ background: "rgba(0,0,0, .10)" }}
        />
      </div>
    </>
  );
};

export default MyAccordion;
