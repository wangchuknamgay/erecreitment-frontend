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

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
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

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    // if (currentUser) {
    //   setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
    //   setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    // } else {
    //   setShowModeratorBoard(false);
    //   setShowAdminBoard(false);
    // }

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

      <Avatar alt="Remy Sharp" src={logo} style={{ width: 90, height: 90 }}/>
        {/* <img
          src={logo}
          alt="logo"
          className="avater-rounded m-2"
          style={{ width: 150, height: 70 }}
        /> */}
        <p className="m-4">
          <b>E-Recruitment</b>
        </p>
        <Typography
          component="h2" variant="h5" color="inherit" align="center" noWrap className={classes.toolbarTitle}>
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
              onClick={() => navigate("/register")}
            >
              Sign up
            </Button>
            <Button
              variant="outlined"
              size="small"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
          </>
        )}
        {currentUser && (
          <>
          <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" className="profile-img-card-header" alt="IMG" />
            <strong>{currentUser.username}</strong>

            <Button variant="contained" color="primary" onClick={logOut}>
            Logout
            </Button>
          </>
        )}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
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
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
