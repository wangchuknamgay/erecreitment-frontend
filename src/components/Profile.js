import React, { useState, useEffect, useCallback,useRef } from "react";
import { Navigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import EventBus from "../common/EventBus";
import { logout } from "../actions/auth";
import userProfile from "../img/spy.jpeg";
import PersonIcon from "@material-ui/icons/Person";
import ContactsIcon from "@material-ui/icons/Contacts";
import CallIcon from "@material-ui/icons/Call";
import DateRangeIcon from "@material-ui/icons/DateRange";
import WcIcon from "@material-ui/icons/Wc";
import EmailIcon from "@material-ui/icons/Email";
import AssessmentIcon from "@material-ui/icons/Assessment";
import EditIcon from "@material-ui/icons/Edit";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AddIcon from "@material-ui/icons/Add";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import experienceService from "../services/experience.service";
import {Alert, Snackbar} from "@mui/material";
import moment from "moment"
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 8,
  },
  body: {
    fontSize: 9,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData1(school,year,academic,certificate) {
  return { school,year,academic,certificate };
}

const row1 = [
  createData1(
    "CST",
    2022,
    "IT",
    77,
    13 / 2 / 2018,
    "14 / 56 / 2022",
    "attached"
  ),
];
function createData2(school,year,academic,certificate) {
  return { school,year,academic,certificate };
}

const row2 = [
  createData2(
    "CST",
    2017,
    "IT",
    "attached"
  ),
];
function createData3(college,year,percentage,academic,certificate) {
  return { college,year,percentage,academic,certificate};
}

const row3 = [
  createData3(
    "CST",
    2022,
    "IT",
    "IT",
    "attached"
  ),
];
function createData4(college,year,percentage,academic,certificate) {
  return { college,year,percentage,academic,certificate };
}

const row4 = [
  createData4(
    "CST",
    2022,
    "IT",
    "IT",
    "attached"
  ),
];
function createData5(college,year,percentage,academic,certificate) {
  return { college,year,percentage,academic,certificate};
}

const row5 = [
  createData5(
    "CST",
    2022,
    "IT",
    "IT",
    "attached"
  ),
];
function createData6(company, designation, from, to, country, certificate) {
  return { company, designation, from, to, country, certificate };
}

const row6 = [
  createData6(
    "Ditt",
    "developer",
    "13/ 2 / 2022",
    "14 / 56 / 2022",
    "Bhutan",
    "attached"
  ),
];
function createData7(name, title, position, relation, address, mobile, email) {
  return { name, title, position, relation, address, mobile, email };
}

const row7 = [
  createData7(
    "Thinley",
    "association",
    "developer",
    "employee",
    "Town",
    17839405,
    "thinleydema@gmail.com"
  ),
];


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  table: {
    maxWidth: 700,
  },
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
}));
const Profile = () => {
  const classes = useStyles();

  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [gender, setGender] = React.useState("");
  const [employe, setEmploye] = React.useState("");
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [responseMessage, setResponseMessage] = React.useState("");
  const [openSuccess, setOpenSuccess] = useState(false);

  const [basicInfoModel, setBasicInfoModel] = React.useState(false);
  const [educationModel, setEducationModel] = React.useState(false);
  const [experienceModel, setExperienceModel] = React.useState(false);
  const [refereeModel, setRefereeModel] = React.useState(false);
  const [inputs, setInputs] = useState({});

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
};

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const toggleBasicInfoModel = () => {
    setBasicInfoModel(!basicInfoModel);
  };
  const toggleEducationModel = () => {
    setEducationModel(!educationModel);
  };
  const toggleExperienceModel = () => {
    setExperienceModel(!experienceModel);
  };
  const toggleRefereeModel = () => {
    setRefereeModel(!refereeModel);
  };


  const handleIschange = (event) => {
    setEmploye(event.target.value);
  };

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


const submitForm = (event) => {
  event.preventDefault();
  experienceService.save(inputs).then(
    response=>{
      setResponseMessage(response.data);
      setOpenSuccess(true);
      setExperienceModel(!experienceModel);
    }
);
}
useEffect(() => {
  getAll();

}, [])

const getAll = () => {
  experienceService.getAll().then(
      response => {
        console.log(response.data);
          // setNoticeConfigServiceList(response.data)
      },
      // error => {
      //     setContent(
      //         (error.response &&
      //             error.response.data &&
      //             error.response.data.message) ||
      //         error.message ||
      //         error.toString()
      //     );
      // }
  );

}


  if (!currentUser) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="col-md-12 row p-0">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <div className="mb-4">
              <img
                src={userProfile}
                className="rounded-corner"
                alt="spy profile"
                width="300"
                height="250"
              ></img>
            </div>
            <div className="mb-4">
              <div className="h7 text-center">USER INFORMATION</div>
            </div>
            <div className="mb-2">
              <div className="text-muted">
                {" "}
                <PersonIcon /> Full Name: Thinley Dema
              </div>
            </div>
            <div className="mb-2">
              <div className="text-muted">
                {" "}
                <ContactsIcon /> CID: 11105000350
              </div>
            </div>
            <div className="mb-2">
              <div className="text-muted">
                {" "}
                <CallIcon /> Mobile No: 17526042
              </div>
            </div>
            <div className="mb-2">
              <div className="text-muted">
                {" "}
                <DateRangeIcon /> DOB: 21/23/1990
              </div>
            </div>
            <div className="mb-2">
              <div className="text-muted">
                {" "}
                <WcIcon /> Gender: Female
              </div>
            </div>
            <div className="mb-2">
              <div className="text-muted">
                {" "}
                <EmailIcon /> Email: thinley@gmail.com
              </div>
            </div>
            <div className="mb-2">
              <div className="text-muted">
                {" "}
                <AssessmentIcon /> Employment Status: NO
              </div>
            </div>
            <div className="mb-4">
              <div className="text-muted">
                {" "}
                <BrandingWatermarkIcon /> Currently Employer: No
              </div>
            </div>
            <div className="mb-2">
              <div>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={toggleBasicInfoModel}
                >
                  {" "}
                  <EditIcon />
                  Edit basic information
                </Button>
                <Dialog
                  open={basicInfoModel}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={toggleBasicInfoModel}
                  aria-labelledby="gg"
                  aria-describedby="dssd-fff"
                >
                  <DialogTitle id="basicInfo">
                    {"Basic Information"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="basicInfo-description">
                      <div>
                        <div className="form-group">
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                              <TextField
                                autoComplete="fname"
                                type="text"
                                name="fName"
                                variant="outlined"
                                required
                                fullWidth
                                id="fName"
                                label="Full Name"
                                autoFocus
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                autoComplete="cid"
                                type="number"
                                variant="outlined"
                                required
                                fullWidth
                                id="cid"
                                label="CID"
                                autoFocus
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <FormControl
                                variant="outlined"
                                className="gendersize"
                                required
                              >
                                <InputLabel id="demo-simple-select-outlined-label">
                                  Gender
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  value={gender}
                                  onChange={handleChange}
                                  label="Gender"
                                >
                                  <MenuItem value={10}>Female</MenuItem>
                                  <MenuItem value={20}>Male</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                autoComplete="dzongkhag"
                                type="text"
                                name="dzongkhag"
                                variant="outlined"
                                required
                                fullWidth
                                id="dzongkhag"
                                label="Dzongkhag"
                                autoFocus
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                variant="outlined"
                                type="text"
                                required
                                fullWidth
                                id="gewog"
                                label="Gewog"
                                name="gewog"
                                autoComplete="gewog"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                autoComplete="village"
                                type="text"
                                name="village"
                                variant="outlined"
                                required
                                fullWidth
                                id="village"
                                label="Village"
                                autoFocus
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                variant="outlined"
                                type="text"
                                required
                                fullWidth
                                id="current address"
                                label="Current Address"
                                name="current address"
                                autoComplete="current address"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                autoComplete="dob"
                                type="date"
                                name="dob"
                                variant="outlined"
                                required
                                fullWidth
                                id="date"
                                autoFocus
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                variant="outlined"
                                type="number"
                                required
                                fullWidth
                                id="Mno"
                                label="Mobile No."
                                name="Mno"
                                autoComplete="Mno"
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                className="width"
                                autoComplete="email"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <FormControl
                                variant="outlined"
                                className="gendersize"
                                required
                              >
                                <InputLabel id="demo-simple-select-outlined-label">
                                  Currently Employed
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  value={employe}
                                  onChange={handleIschange}
                                  label="Currently Employed"
                                >
                                  <MenuItem value={10}>Yes</MenuItem>
                                  <MenuItem value={20}>No</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                              <InputLabel id="demo-simple-select-outlined-label">
                                Passport Photo *
                              </InputLabel>
                              <TextField
                                variant="outlined"
                                required
                                fullWidth
                                type="file"
                                id="file"
                                autoComplete="file"
                              />
                            </Grid>
                          </Grid>
                        </div>
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      variant="contained"
                      onClick={toggleBasicInfoModel}
                      color="secondary"
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      onClick={toggleBasicInfoModel}
                      color="primary"
                    >
                      Save Changes
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <div className="education">
              <div className="h7  text-left">
                {" "}
                <AddIcon />
                <Link to="/classten" onClick={toggleEducationModel}>
                  Education{" "}
                </Link>
                <Link to= "/classten" onClick={toggleEducationModel}>Class X </Link>
              </div>
              {/* <Dialog
                open={educationModel}
                TransitionComponent={Transition}
                keepMounted
                onClose={toggleEducationModel}
                aria-labelledby="education"
                aria-describedby="education-description"
              >
                <DialogTitle id="education">{"Education"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="education-description">
                    <div>
                      <div className="form-group">
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={12}>
                            <TextField
                              autoComplete="fname"
                              type="text"
                              name="fName"
                              variant="outlined"
                              required
                              fullWidth
                              id="fName"
                              label="Full Name"
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              autoComplete="cid"
                              type="number"
                              variant="outlined"
                              required
                              fullWidth
                              id="cid"
                              label="CID"
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <FormControl
                              variant="outlined"
                              className="gendersize"
                              required
                            >
                              <InputLabel id="demo-simple-select-outlined-label">
                                Gender
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={gender}
                                onChange={handleChange}
                                label="Gender"
                              >
                                <MenuItem value={10}>Female</MenuItem>
                                <MenuItem value={20}>Male</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              autoComplete="dzongkhag"
                              type="text"
                              name="dzongkhag"
                              variant="outlined"
                              required
                              fullWidth
                              id="dzongkhag"
                              label="Dzongkhag"
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              variant="outlined"
                              type="text"
                              required
                              fullWidth
                              id="gewog"
                              label="Gewog"
                              name="gewog"
                              autoComplete="gewog"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              autoComplete="village"
                              type="text"
                              name="village"
                              variant="outlined"
                              required
                              fullWidth
                              id="village"
                              label="Village"
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              variant="outlined"
                              type="text"
                              required
                              fullWidth
                              id="current address"
                              label="Current Address"
                              name="current address"
                              autoComplete="current address"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              autoComplete="dob"
                              type="date"
                              name="dob"
                              variant="outlined"
                              required
                              fullWidth
                              id="date"
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              variant="outlined"
                              type="number"
                              required
                              fullWidth
                              id="Mno"
                              label="Mobile No."
                              name="Mno"
                              autoComplete="Mno"
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <TextField
                              variant="outlined"
                              required
                              fullWidth
                              id="email"
                              label="Email Address"
                              className="width"
                              autoComplete="email"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <FormControl
                              variant="outlined"
                              className="gendersize"
                              required
                            >
                              <InputLabel id="demo-simple-select-outlined-label">
                                Currently Employed
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={employe}
                                onChange={handleIschange}
                                label="Currently Employed"
                              >
                                <MenuItem value={10}>Yes</MenuItem>
                                <MenuItem value={20}>No</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={6}>
                            <InputLabel id="demo-simple-select-outlined-label">
                              Passport Photo *
                            </InputLabel>
                            <TextField
                              variant="outlined"
                              required
                              fullWidth
                              type="file"
                              id="file"
                              autoComplete="file"
                            />
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    variant="contained"
                    onClick={toggleEducationModel}
                    color="secondary"
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    onClick={toggleEducationModel}
                    color="primary"
                  >
                    Save Changes
                  </Button>
                </DialogActions>
              </Dialog> */}
            </div>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>SCHOOL</StyledTableCell>
                    <StyledTableCell align="left">YEAR</StyledTableCell>
                    <StyledTableCell align="left">ACADEMIC</StyledTableCell>
                    <StyledTableCell align="left">CERTIFICATE</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row1.map((row1) => (
                    <StyledTableRow key={row1.school}>
                      <StyledTableCell component="th" scope="row">
                        {row1.school}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row1.year}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row1.academic}
                      </StyledTableCell>
                      <StyledTableCell align="left">{row1.agg}</StyledTableCell>
                      <StyledTableCell align="left">
                        {row1.certificate}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
             
             <br/>
            <div className="h7  text-left">
                {" "}
                <AddIcon />
                <Link to= "/classxll" onClick={toggleEducationModel}>Class XII </Link>
              </div>
              <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>SCHOOL</StyledTableCell>
                    <StyledTableCell align="left">Year</StyledTableCell>
                    <StyledTableCell align="left">ACADEMIC</StyledTableCell>
                    <StyledTableCell align="left">CERTIFICATE</StyledTableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row2.map((row2) => (
                    <StyledTableRow key={row2.school}>
                      <StyledTableCell component="th" scope="row">
                        {row2.school}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row2.year}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row2.academic}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row2.certificate}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <br/>
            <div className="h7  text-left">
                {" "}
                <AddIcon />
                <Link to= "/diploma" onClick={toggleEducationModel}>Diploma</Link>
              </div>
              <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>COLLEGE</StyledTableCell>
                    <StyledTableCell align="left">Year</StyledTableCell>
                    <StyledTableCell align="left">PERCENTAGE</StyledTableCell>
                    <StyledTableCell align="left">ACADEMIC</StyledTableCell>
                    <StyledTableCell align="left">CERTIFICATE</StyledTableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row3.map((row3) => (
                    <StyledTableRow key={row3.college}>
                      <StyledTableCell component="th" scope="row">
                        {row3.college}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row3.year}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row3.percentage}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row3.academic}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row3.certificate}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <br/>
            <div className="h7  text-left">
                {" "}
                <AddIcon />
                <Link to= "/degree" onClick={toggleEducationModel}>Degree</Link>
              </div>
              <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>COLLEGE</StyledTableCell>
                    <StyledTableCell align="left">Year</StyledTableCell>
                    <StyledTableCell align="left">PERCENTAGE</StyledTableCell>
                    <StyledTableCell align="left">ACADEMIC</StyledTableCell>
                    <StyledTableCell align="left">CERTIFICATE</StyledTableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row4.map((row4) => (
                    <StyledTableRow key={row4.college}>
                      <StyledTableCell component="th" scope="row">
                        {row4.college}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row4.year}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row4.percentage}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row4.academic}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row4.certificate}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <br/>
            <div className="h7  text-left">
                {" "}
                <AddIcon />
                <Link to= "/master" onClick={toggleEducationModel}>Master</Link>
              </div>
              <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>COLLEGE</StyledTableCell>
                    <StyledTableCell align="left">Year</StyledTableCell>
                    <StyledTableCell align="left">PERCENTAGE</StyledTableCell>
                    <StyledTableCell align="left">ACADEMIC</StyledTableCell>
                    <StyledTableCell align="left">CERTIFICATE</StyledTableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row5.map((row5) => (
                    <StyledTableRow key={row5.college}>
                      <StyledTableCell component="th" scope="row">
                        {row5.college}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row5.year}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row5.percentage}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row5.academic}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row5.certificate}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <br />

            {/**Experience Section */}
            <div className="experience">
            {/* {moment("02/02/2022").format("MMM DD, YYYY")} */}
              <div className="h7  text-left">
                {" "}
                <AddIcon />
                <Link onClick={toggleExperienceModel}>Experience </Link>
              </div>
              <Dialog
              onBackdropClick="false"
                open={experienceModel}
                TransitionComponent={Transition}
                keepMounted
                onClose={toggleExperienceModel}
                aria-labelledby="experience"
                aria-describedby="experience-description"
              >
                <form>
                  <DialogTitle id="experience">{"Experience"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="experience-description">
                      <div>
                        <div className="form-group">
                          <Grid item xs={12} sm={12} className="pb-2">
                            <TextField
                              autoComplete="Cname"
                              type="text"
                              name="companyName" 
                              value={inputs.companyName || ""}
                              variant="outlined"
                              required
                              fullWidth
                              onChange={handleChange}
                              label="Company Name"
                              
                            />
                          </Grid>
                          <div className="row pb-2">
                            <div className="col-md-6">
                              <TextField
                                autoComplete="designation"
                                type="text"
                                name="designation" 
                                value={inputs.designation || ""}
                                variant="outlined"
                                required
                                fullWidth
                                onChange={handleChange}
                                label="Designation"
                                
                              />
                            </div>
                            <div className="col-md-6">
                              <TextField
                                autoComplete="country"
                                type="text"
                                name="country" 
                                value={inputs.country || ""}
                                variant="outlined"
                                required
                                fullWidth
                                onChange={handleChange}
                                label="Country"
                                
                              />
                            </div>
                          </div>

                          <div className="row pb-2">
                            <div className="col-md-6">
                              From Date <span color="danger">*</span>
                              <TextField
                                autoComplete="From date"
                                type="date"
                                variant="outlined"
                                required
                                name="fromDate" 
                                value={inputs.fromDate || ""}
                                fullWidth
                                onChange={handleChange}
                                
                              />
                            </div>
                            <div className="col-md-6">
                              End Date *
                              <TextField
                                autoComplete="From date"
                                type="date"
                                variant="outlined"
                                required
                                name="toDate" 
                                value={inputs.toDate || ""}
                                fullWidth
                                onChange={handleChange}
                                
                              />
                            </div>
                          </div>

                          <Grid item xs={12} sm={12} className="pb-2">
                            <InputLabel id="demo-simple-select-outlined-label">
                              Work experience certificate*
                            </InputLabel>
                            <TextField
                              variant="outlined"
                              required
                              fullWidth
                              type="file"
                              id="file"
                              autoComplete="file"
                            />
                          </Grid>
                        </div>
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      variant="contained"
                      onClick={toggleExperienceModel}
                      color="secondary"
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      type="submit"
                      onClick={submitForm}
                      color="primary"
                    >
                      Save
                    </Button>
                  </DialogActions>
                </form>
              </Dialog>
            </div>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>COMPANY</StyledTableCell>
                    <StyledTableCell align="left">
                      {" "}
                      DESIGNATION.{" "}
                    </StyledTableCell>
                    <StyledTableCell align="left">FROM DATE</StyledTableCell>
                    <StyledTableCell align="left">TO DATE</StyledTableCell>
                    <StyledTableCell align="left">COUNTRY</StyledTableCell>
                    <StyledTableCell align="left">CERTIFICATE</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row6.map((row6) => (
                    <StyledTableRow key={row6.company}>
                      <StyledTableCell component="th" scope="row">
                        {row6.company}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row6.designation}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row6.from}
                      </StyledTableCell>
                      <StyledTableCell align="left">{row6.to}</StyledTableCell>
                      <StyledTableCell align="left">
                        {row6.country}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row6.certificate}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <br />

            <div className="Referee">
              <div className="h7  text-left">
                {" "}
                <AddIcon />
                <Link onClick={toggleRefereeModel}>Referee </Link>
              </div>
              <Dialog
                open={refereeModel}
                TransitionComponent={Transition}
                keepMounted
                onClose={toggleRefereeModel}
                aria-labelledby="referee"
                aria-describedby="referee-description"
              >
                <DialogTitle id="referee">{"Referee information"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="referee-description">
                    <div>
                      <div className="form-group">
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={12}>
                            <TextField
                              autoComplete="name"
                              type="text"
                              name="name"
                              variant="outlined"
                              required
                              fullWidth
                              id="name"
                              label="Name"
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <TextField
                              autoComplete="title"
                              type="text"
                              name="title"
                              variant="outlined"
                              required
                              fullWidth
                              id="title"
                              label="Title"
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <TextField
                              autoComplete="position"
                              type="text"
                              name="position"
                              variant="outlined"
                              required
                              fullWidth
                              id="position"
                              label="Position"
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <TextField
                              autoComplete="relation"
                              type="text"
                              name="relation"
                              variant="outlined"
                              required
                              fullWidth
                              id="relation"
                              label="Relation to Applicant"
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <TextField
                              autoComplete="address"
                              type="text"
                              name="address"
                              variant="outlined"
                              required
                              fullWidth
                              id="address"
                              label="Address"
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <TextField
                              autoComplete="mobile"
                              type="number"
                              name="mobile"
                              variant="outlined"
                              required
                              fullWidth
                              id="mobile"
                              label="Mobile No."
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <TextField
                              autoComplete="email"
                              type="email"
                              name="email"
                              variant="outlined"
                              required
                              fullWidth
                              id="email"
                              label="Email"
                              autoFocus
                            />
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    variant="contained"
                    onClick={toggleRefereeModel}
                    color="secondary"
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    onClick={toggleRefereeModel}
                    color="primary"
                  >
                    Save Changes
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>NAME</StyledTableCell>
                    <StyledTableCell align="left">TITLE.</StyledTableCell>
                    <StyledTableCell align="left">POSITION</StyledTableCell>
                    <StyledTableCell align="left">
                      REL.TO APPLICANT
                    </StyledTableCell>
                    <StyledTableCell align="left">ADDRESS</StyledTableCell>
                    <StyledTableCell align="left">MOBILE NO</StyledTableCell>
                    <StyledTableCell align="left">EMAIL</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row7.map((row7) => (
                    <StyledTableRow key={row7.name}>
                      <StyledTableCell component="th" scope="row">
                        {row7.name}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row7.title}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row7.position}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row3.relation}
                      </StyledTableCell>
                      <StyledTableCell align="left">{row7.relation}</StyledTableCell>
                      <StyledTableCell align="left">
                        {row7.address}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row7.mobile}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row7.email}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          <Snackbar open={openSuccess} autoHideDuration={2000} onClose={handleCloseSuccess}
                                      anchorOrigin={{
                                          vertical:'bottom',
                                          horizontal:'right'
                                      }}>
                                <Alert severity="success">{responseMessage}</Alert>
                            </Snackbar>
        </div>
      </div>
    </div>
  );
};

export default Profile;
