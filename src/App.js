import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./mui/Header";
import Footer from "./mui/Footer";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";
import Blog from "./mui/Blog";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: "Home", url: "/home" },
  { title: "Profile", url: "/profile" },
  { title: "Apply Vacancy", url: "#" },
  { title: "Add Vacancy", url: "#" },
  { title: "Result", url: "#" }
];

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let location = useLocation();
  const classes = useStyles();
  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage()); // clear message when changing location
    }
  }, [dispatch, location]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <Header sections={sections} />
      {/* {!currentUser && (
        <Header sections={sections} />
      )}

    {!currentUser && (
        <Header sections={sections} />
      )} */}
        
        {/* <main> */}
          {/* <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}

          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/home" element={<Blog />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        {/* </main> */}
      </Container>
      <Footer/>
    </React.Fragment>
    // <div>
    //   <div>
    //     <Routes>
    //       <Route path="/" element={<Blog />} />
    //       <Route path="/home" element={<Blog />} />
    //       <Route path="/register" element={<Register />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/profile" element={<Profile />} />
    //     </Routes>
    //   </div>
    // </div>
  );
};

export default App;
