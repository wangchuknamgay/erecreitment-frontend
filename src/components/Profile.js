import React, { useState, useEffect, useCallback } from "react"; 
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
import { useNavigate } from "react-router-dom";
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

function createData1(institute, quali, course, agg, sdate, edate, certificate) {
  return { institute, quali, course, agg, sdate, edate, certificate };
}

const row1 = [
  createData1(
    "CST",
    "degree",
    "IT",
    77,
    13 / 2 / 2018,
    14 / 56 / 2022,
    "attached"
  ),
];
function createData2(company, designation, from, to, country, certificate) {
  return { company, designation, from, to, country, certificate };
}

const row2 = [
  createData2(
    "Ditt",
    "developer",
    "13/ 2 / 2022",
    14 / 56 / 2022,
    "Bhutan",
    "attached"
  ),
];
function createData3(name, title, position, relation, address, mobile, email) {
  return { name, title, position, relation, address, mobile, email };
}

const row3 = [
  createData3(
    "Thinley",
    "association",
    "developer",
    "employee",
    "Town",
    17839405,
    "thinleydema@gmail.com"
  ),
];

const useStyles = makeStyles({
  table: {
    maxWidth: 700,
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Profile = () => {
  const classes = useStyles();

  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [gender, setGender] = React.useState("");
  const [employe, setEmploye] = React.useState("");
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const [value, setValue] = React.useState("female");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [basicInfoModel, setBasicInfoModel] = React.useState(false);
  const [educationModel, setEducationModel] = React.useState(false);
  const [experienceModel, setExperienceModel] = React.useState(false);
  const [refereeModel, setRefereeModel] = React.useState(false);
  

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

  const handleChange = (event) => {
    setValue(event.target.value);
    setGender(event.target.value);
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
                <Link to= "/classten" onClick={toggleEducationModel}>Education </Link>
              </div>
              <Dialog
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
              </Dialog>
            </div>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>NAME OF INSTITUTE</StyledTableCell>
                    <StyledTableCell align="left">QUALI.</StyledTableCell>
                    <StyledTableCell align="left">COURSE</StyledTableCell>
                    <StyledTableCell align="left">AGG.</StyledTableCell>
                    <StyledTableCell align="left">START DATE</StyledTableCell>
                    <StyledTableCell align="left">END DATE</StyledTableCell>
                    <StyledTableCell align="left">CERTIFICATE</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row1.map((row1) => (
                    <StyledTableRow key={row1.institute}>
                      <StyledTableCell component="th" scope="row">
                        {row1.institute}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row1.quali}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row1.course}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row1.agg}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row1.sdate}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row1.edate}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row1.certificate}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <br />

            {/**Experience Section */}
            <div className="experience">
              <div className="h7  text-left">
                {" "}
                <AddIcon />
                <Link onClick={toggleExperienceModel}>Experience </Link>
              </div>
              <Dialog
                open={experienceModel}
                TransitionComponent={Transition}
                keepMounted
                onClose={toggleExperienceModel}
                aria-labelledby="experience"
                aria-describedby="experience-description"
              >
                <DialogTitle id="experience">{"Experience"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="experience-description">
                    <div>
                      <div className="form-group">
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={12}>
                            <TextField
                              autoComplete="Cname"
                              type="text"
                              name="Cname"
                              variant="outlined"
                              required
                              fullWidth
                              id="Cname"
                              label="Company Name"
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <TextField
                              autoComplete="designation"
                              type="text"
                              name="designation"
                              variant="outlined"
                              required
                              fullWidth
                              id="designation"
                              label="Designation"
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            From Date *
                            <TextField
                              autoComplete="From date"
                              type="date"
                              variant="outlined"
                              required
                              fullWidth
                              id="From date"
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                          End Date *
                            <TextField
                              autoComplete="End date"
                              type="date"
                              name="End date"
                              variant="outlined"
                              required
                              fullWidth
                              id="End date"
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <TextField
                              autoComplete="country"
                              type="text"
                              name="country"
                              variant="outlined"
                              required
                              fullWidth
                              id="conutry"
                              label="Country"
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={6}>
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
                    onClick={toggleExperienceModel}
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
                    <StyledTableCell>COMPANY</StyledTableCell>
                    <StyledTableCell align="left"> DESIGNATION. </StyledTableCell>
                    <StyledTableCell align="left">FROM DATE</StyledTableCell>
                    <StyledTableCell align="left">TO DATE</StyledTableCell>
                    <StyledTableCell align="left">COUNTRY</StyledTableCell>
                    <StyledTableCell align="left">CERTIFICATE</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row2.map((row2) => (
                    <StyledTableRow key={row2.company}>
                      <StyledTableCell component="th" scope="row">
                        {row2.company}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row2.designation}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row2.from}
                      </StyledTableCell>
                      <StyledTableCell align="left">{row2.to}</StyledTableCell>
                      <StyledTableCell align="left">
                        {row2.country}
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
                    <StyledTableCell align="left">REL.TO APPLICANT</StyledTableCell>
                    <StyledTableCell align="left">ADDRESS</StyledTableCell>
                    <StyledTableCell align="left">MOBILE NO</StyledTableCell>
                    <StyledTableCell align="left">EMAIL</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row3.map((row3) => (
                    <StyledTableRow key={row3.name}>
                      <StyledTableCell component="th" scope="row">
                        {row3.name}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row3.title}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row3.position}
                      </StyledTableCell>
                      <StyledTableCell align="left">{row3.relation}</StyledTableCell>
                      <StyledTableCell align="left">
                        {row3.address}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row3.mobile}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row3.email}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;