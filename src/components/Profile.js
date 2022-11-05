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

import experienceService from "../services/experience.service";
import { Alert, Snackbar } from "@mui/material";
import moment from "moment";
import referenceService from "../services/reference.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faHome,
  faPhone,
  faEdit,
  faAward,
  faHandsHelping,
  faClock,
  faMale,
  faFemale,
  faBriefcase,
  faBook,
  faIdCard,
  faBirthdayCake,
  faLink,
  faLocation,
  faUnlock,
  faDownload
} from "@fortawesome/free-solid-svg-icons";
import classXService from "../services/classX.service";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Profile = () => {
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
  const [experienceList, setExperienceList] = useState([]);
  const [referenceList, setReferenceList] = useState([]);
  const [classXList, setClassXList] = useState([]);


  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

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

  useEffect(() => {
    getAllExperience();
    getAllExperienceByUserId();
    getAllClassXDetailsByUserId();
  }, []);

  //======for experience ====//
  const submitForm = (event) => {
    event.preventDefault();
    experienceService.save(inputs).then((response) => {
      setResponseMessage(response.data);
      setOpenSuccess(true);
      setExperienceModel(!experienceModel);
      getAllExperience();
    });
  };

  const getAllExperience = () => {
    experienceService.getAll().then((response) => {
      setExperienceList(response.data);
    });
  };

  const populateExperienceDate=(e,item)=>{
    setInputs(item)
    setExperienceModel(!refereeModel);
  }

  // =====================================//

  //======for reference =====
  const saveReference = (event) => {
    event.preventDefault();
    referenceService.save(inputs).then((response) => {
      setResponseMessage(response.data);
      setOpenSuccess(true);
      setRefereeModel(!refereeModel);
      getAllExperienceByUserId();
    });
  };

  const getAllExperienceByUserId = () => {
    referenceService.getAllExperienceByUserId().then((response) => {
      console.log(response.data);
      setReferenceList(response.data);
    });
  };

  const populateReferenceDate=(e,item)=>{
    setInputs(item)
    setRefereeModel(!refereeModel);
  }
  //=======================================//

  //======for Class X =====
  const getAllClassXDetailsByUserId = () => {
    classXService.getAllClassXDetailsByUserId().then((response) => {
      setClassXList(response.data);
    });
  };

  // const populateReferenceDate=(e,item)=>{
  //   setInputs(item)
  //   setRefereeModel(!refereeModel);
  // }
  //=======================================//

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
        <div className="card p-2">
          <div className="card-body p-3">
            <div className="education">
              <div className="h7  text-left">
                {" "}
                <AddIcon />
                <Link to="/classten" onClick={toggleEducationModel}>
                  Class X{" "}
                </Link>
              </div>
            </div>
            <div className="table-responsive ">
              <table className="table table-bordered">
                <thead className="custum-thead">
                  <th>School</th>
                  <th align="left">Year</th>
                  <th align="left">Academic</th>
                  <th align="left">Certificate</th>
                </thead>
                <tbody>
                  {classXList.map((item) => (
                    <tr key={item.classXId}>
                      <td>{item.schoolName}</td>
                      <td align="left">{item.yearOfCompletion}</td>
                      <td align="left"><span className="custom-link"><FontAwesomeIcon icon={faDownload} />Academic</span></td>
                      <td align="left"><span  className="custom-link"><FontAwesomeIcon icon={faDownload} />Mark Sheet</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>Marks</p>
              <table className="table table-bordered">
                <thead>
                  <th>English</th>
                  <th align="left">Dzongkha</th>
                  <th align="left">Maths</th>
                  <th align="left">Physics</th>
                  <th align="left">Chemistry</th>
                  <th align="left">Biology</th>
                  <th align="left">Economics</th>
                  <th align="left">History</th>
                  <th align="left">Geography</th>
                  <th align="left">IT</th>
                </thead>
                <tbody>
                  {classXList.map((item) => (
                    <tr>
                      <td>{item.english}</td>
                      <td>{item.dzongkha}</td>
                      <td>{item.maths}</td>
                      <td>{item.physics}</td>
                      <td>{item.chemistry}</td>
                      <td>{item.biology}</td>
                      <td>{item.economics}</td>
                      <td>{item.history}</td>
                      <td>{item.geography}</td>
                      <td>{item.it}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <br />
            <div className="h7  text-left">
              {" "}
              <AddIcon />
              <Link to="/classxll" onClick={toggleEducationModel}>
                Class XII{" "}
              </Link>
            </div>

            <div className="table-responsive ">
              <table className="table table-bordered">
                <thead className="custum-thead">
                  <th>SCHOOL</th>
                  <th align="left">YEAR</th>
                  <th align="left">ACADEMIC</th>
                  <th align="left">CERTIFICATE</th>
                </thead>
                <tbody>
                  {/* {row2.map((row2) => (
                    <tr key={row2.school}>
                      <td component="th" scope="row">
                        {row2.school}
                      </td>
                      <td align="left">{row2.year}</td>
                      <td align="left">{row2.academic}</td>
                      <td align="left">{row2.certificate}</td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>
            <br />
            <div className="h7  text-left">
              {" "}
              <AddIcon />
              <Link to="/diploma" onClick={toggleEducationModel}>
                Diploma
              </Link>
            </div>
            <div className="table-responsive ">
              <table className="table table-bordered">
                <thead className="custum-thead">
                  <th>College</th>
                  <th align="left">Year</th>
                  <th align="left">Percentage</th>
                  <th align="left">Academic</th>
                  <th align="left">Certificate</th>
                </thead>
                <tbody>
                  {/* {row3.map((row3) => (
                    <tr key={row3.college}>
                      <td component="th" scope="row">
                        {row3.college}
                      </td>
                      <td align="left">{row3.year}</td>
                      <td align="left">{row3.percentage}</td>
                      <td align="left">{row3.academic}</td>
                      <td align="left">{row3.certificate}</td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>
            <br />
            <div className="h7  text-left">
              {" "}
              <AddIcon />
              <Link to="/degree" onClick={toggleEducationModel}>
                Degree
              </Link>
            </div>
            <div className="table-responsive ">
              <table className="table table-bordered">
                <thead className="custum-thead">
                  <th>College</th>
                  <th align="left">Year</th>
                  <th align="left">Percentage</th>
                  <th align="left">Academic</th>
                  <th align="left">Certificate</th>
                </thead>
                <tbody>
                  {/* {row4.map((row4) => (
                    <tr key={row4.college}>
                      <td component="th" scope="row">
                        {row4.college}
                      </td>
                      <td align="left">{row4.year}</td>
                      <td align="left">{row4.percentage}</td>
                      <td align="left">{row4.academic}</td>
                      <td align="left">{row4.certificate}</td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>

            <br />
            <div className="h7  text-left">
              {" "}
              <AddIcon />
              <Link to="/master" onClick={toggleEducationModel}>
                Master
              </Link>
            </div>
            <div className="table-responsive ">
              <table className="table table-bordered">
                <thead className="custum-thead">
                  <th>College</th>
                  <th align="left">Year</th>
                  <th align="left">Percentage</th>
                  <th align="left">Academic</th>
                  <th align="left">Certificate</th>
                </thead>
                <tbody>
                  {/* {row5.map((row5) => (
                    <tr key={row5.college}>
                      <td component="th" scope="row">
                        {row5.college}
                      </td>
                      <td align="left">{row5.year}</td>
                      <td align="left">{row5.percentage}</td>
                      <td align="left">{row5.academic}</td>
                      <td align="left">{row5.certificate}</td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>
            <br />

            {/**Experience Section */}
            <div className="experience">
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

            <div className="table-responsive ">
              <table className="table table-bordered">
                <thead className="custum-thead">
                  <tr>
                    <th>Company</th>
                    <th>Designation</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Country</th>
                    <th>Certificate</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceList.map((item) => (
                    <tr key={item.experienceId}>
                      <td component="th" scope="row">
                        {item.companyName}
                      </td>
                      <td>{item.designation}</td>
                      <td>{moment(item.fromDate).format("MMM DD, YYYY")}</td>
                      <td>{moment(item.toDate).format("MMM DD, YYYY")}</td>
                      <td>{item.country}</td>
                      <td><span  className="custom-link"><FontAwesomeIcon icon={faDownload} />Exp letter</span></td>
                      <td align="left">
                        <span onClick={e =>populateExperienceDate(e,item)} className="custom-link">
                          <FontAwesomeIcon icon={faEdit} />
                          Edit
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                <form>
                  <DialogTitle id="referee">
                    {"Referee information"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="referee-description">
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-6 pb-2">
                            <Grid item xs={12} sm={12}>
                              <TextField
                                autoComplete="name"
                                type="text"
                                name="name"
                                value={inputs.name || ""}
                                variant="outlined"
                                required
                                fullWidth
                                label="Name"
                                onChange={handleChange}
                              />
                            </Grid>
                          </div>
                          <div className="col-md-6  pb-2">
                            <Grid item xs={12} sm={12}>
                              <TextField
                                autoComplete="position"
                                type="text"
                                name="position"
                                variant="outlined"
                                required
                                fullWidth
                                value={inputs.position || ""}
                                label="Position"
                                onChange={handleChange}
                              />
                            </Grid>
                          </div>
                          <div className="col-md-6  pb-2">
                            <Grid item xs={12} sm={12}>
                              <TextField
                                autoComplete="mobileNo"
                                type="number"
                                name="mobileNo"
                                variant="outlined"
                                required
                                fullWidth
                                value={inputs.mobileNo || ""}
                                label="Mobile No."
                                onChange={handleChange}
                              />
                            </Grid>
                          </div>
                          <div className="col-md-6  pb-2">
                            <Grid item xs={12} sm={12}>
                              <TextField
                                autoComplete="email"
                                type="email"
                                name="email"
                                variant="outlined"
                                required
                                fullWidth
                                value={inputs.email || ""}
                                label="Email"
                                onChange={handleChange}
                              />
                            </Grid>
                          </div>
                          <div className="col-md-6  pb-2">
                            <Grid item xs={12} sm={12}>
                              <TextField
                                autoComplete="relation"
                                type="text"
                                name="relationShip"
                                variant="outlined"
                                required
                                fullWidth
                                value={inputs.relationShip || ""}
                                label="Relation to Applicant"
                                onChange={handleChange}
                              />
                            </Grid>
                          </div>
                          <div className="col-md-6 pb-2">
                            <Grid item xs={12} sm={12}>
                              <TextField
                                autoComplete="address"
                                type="text"
                                name="address"
                                variant="outlined"
                                required
                                fullWidth
                                value={inputs.address || ""}
                                label="Address"
                                onChange={handleChange}
                              />
                            </Grid>
                          </div>

                          <div className="col-md-6">
                            <Button
                              variant="contained"
                              onClick={toggleRefereeModel}
                              color="secondary"
                            >
                              Cancel
                            </Button>
                          </div>
                          <div className="col-md-6">
                            <Button
                              variant="contained"
                              onClick={saveReference}
                              color="primary"
                            >
                              Save
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContentText>
                  </DialogContent>
                </form>
              </Dialog>
            </div>
            <div className="table-responsive ">
              <table className="table table-bordered">
                <thead className="custum-thead">
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Relationship</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {referenceList.map((item) => (
                    <tr key={item.referenceId}>
                      <td component="th" scope="row">
                        {item.name}
                      </td>
                      <td align="left">{item.position}</td>
                      <td align="left">{item.relationShip}</td>
                      <td align="left">{item.mobileNo}</td>
                      <td align="left">{item.email}</td>
                      <td align="left">{item.address}</td>
                      <td align="left">
                        <span onClick={e =>populateReferenceDate(e,item)} className="custom-link">
                          <FontAwesomeIcon icon={faEdit} />
                          Edit
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Snackbar
            open={openSuccess}
            autoHideDuration={2000}
            onClose={handleCloseSuccess}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Alert severity="success">{responseMessage}</Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
};

export default Profile;
