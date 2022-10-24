import React,{useState} from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import logo from "../img/logo.jpg"
import Popover from '@material-ui/core/Popover';

import { useNavigate } from "react-router-dom";

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

// const [anchorEl, setAnchorEl] = useState(null);
//     const [profilePhoto, setProfilePhoto] = useState([]);
//     const [userInfo, setUserInfo] = useState([]);

// const openPopover = Boolean(anchorEl);
//     const popOverId = openPopover ? 'simple-popover' : undefined;
    


export default function InnerHeader(props) {
  const classes = useStyles();
  const { sections, title } = props;
  const navigate = useNavigate();

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//     setAnchorEl(null);
//     };

  return (
    <>
      <Toolbar className={classes.toolbar}>
        {/* <Button size="small">Open Recruitment</Button> */}
        <img src={logo} alt="logo" className="profile-img-card-header m-2" style={{ width: 60, height: 60 }} />
        <p className="m-4"><b>E-Recruitment</b></p>
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
        {/* <Button variant="outlined" size="small" onClick={()=>navigate("/register")}>
          Sign up
        </Button> */}

        <IconButton color="inherit" >
                {/* <img
                    // src={`https://www.citizenservices.gov.bt/BtImgWS/ImageServlet?cidNo=${currentUser.cid}&type=PH`}
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img" className="profile-img-card-header"
                /> */}

                <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" className="profile-img-card-header" alt="IMG" />

                {/* {isProfileNull == true ?
                    <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" className="profile-img-card-header" alt="IMG" />
                    : <img src={`data:image/jpeg;base64,${profilePhoto}`} className="profile-img-card-header" alt="IMG" />
                } */}
            </IconButton>
            <Typography>
                Namgay Wangchuk
                {/* {currentUser.fullName} */}
                {/* {userInfo.fullName} */}
            </Typography>
            {/* <Popover
                id={popOverId}
                open={openPopover}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            ></Popover> */}

            

        {/* <Button variant="outlined" size="small" onClick={()=>navigate("/login")}>
          Sign In
        </Button> */}
        
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {/* {sections.map((section) => (
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
        ))} */}
      </Toolbar>
    </>
  );
}

InnerHeader.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
  };

