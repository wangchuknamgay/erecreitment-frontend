import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import logo from "../img/logo.jpg";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import EventBus from "../common/EventBus";
import { logout } from "../actions/auth";
import { Avatar } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    typography: {
      padding: theme.spacing(2),
    },
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const logOut = useCallback(() => {
    dispatch(logout());
    navigate("/home");
  }, [dispatch]);

  useEffect(() => {

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Avatar alt="Remy Sharp" src={logo} style={{ width: 90, height: 90 }} />
        <h4 className="m-4">
          <b>E-Recruitment</b>
        </h4>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        {/* <IconButton>
          <SearchIcon />
        </IconButton> */}

        {!currentUser && (
          <>
            <Button
              variant="outlined"
              size="small"
              onClick={() => navigate("/login")}
            >
              <ExitToAppIcon />
              Sign In
            </Button>
          </>
        )}
        {currentUser && (
          <>
            <img
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              className="profile-img-card-header blob"
              alt="IMG"
              aria-describedby={id}
              onClick={handleClick}
              variant="contained"
            />

            <strong>{currentUser.username}</strong>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <div
                style={{
                  width: "250px",
                  // backgroundImage:
                  //   "linear-gradient(to bottom, #fffb00, rgb(245 167 15))",
                  // color: "darkred",
                }}
              >
                {/* <div className="d-flex flex-wrap flex-column align-items-center justify-content-center text-muted bg-gray">
                  <div className="mb-2"></div>
                  <div className="mb-2">
                    <span> {currentUser.username}</span>
                  </div>
                </div> */}
                <Divider />
                <ListItem
                  button
                  onClick={() => {
                    navigate("/profile");
                    setAnchorEl(null);
                  }}
                >
                  <PersonIcon />
                  <ListItemText primary=" Profile" />

                  <ListItemIcon></ListItemIcon>
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    navigate("/passwordChange");
                    setAnchorEl(null);
                  }}
                >
                  <LockOpenIcon />
                  <ListItemText primary=" Change Password" />
                  <ListItemIcon></ListItemIcon>
                </ListItem>

                <ListItem button  onClick={logOut}>
                  <ExitToAppIcon></ExitToAppIcon>
                  <ListItemText primary=" Logout" />
                </ListItem>
                <Divider />
              </div>
            </Popover>
          </>
        )}
      </Toolbar>
      <Toolbar>
        {currentUser && (
          <>
            {sections.map((section) => (
              <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                href={section.url}
                className={classes.toolbarLink}
              >
                {section.title}
              </Link>
            ))}
          </>
        )}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
