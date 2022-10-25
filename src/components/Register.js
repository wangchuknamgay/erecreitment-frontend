import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import repic from "../images/repic.png";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
//import { makeStyles } from '@material-ui/core/styles';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { register } from "../actions/auth";
import registerService from "../services/register.service"

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vfullname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The fullname must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  // const [username, setFullname] = useState("");
   const [fullname, setFullname] = useState("");
  const [gender, setGender] = React.useState("");

  const [cid, setCid] = useState("");
  const [dzongkhag, setDzongkhag] = useState("");
  const [gewog, setGewog] = useState("");
  const [village, setVillage] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const onChangeFullname = (e) => {
    const fullname = e.target.value;
    setFullname(fullname);
  };
  const onChangeCid = (e) => {
    const cid = e.target.value;
    setCid(cid);
  };
  const onChangeDzongkhag= (e) => {
    const dzongkhag = e.target.value;
    setDzongkhag(dzongkhag);
  };
  const onChangeGewog= (e) => {
    const gewog = e.target.value;
    setGewog(gewog);
  };
  const onChangeVillage= (e) => {
    const village = e.target.value;
    setVillage(village);
  };
  const onChangeAddress= (e) => {
    const address = e.target.value;
    setAddress(address);
  };

  const onChangeDob= (e) => {
    const dob = e.target.value;
    setDob(dob);
  };
  const onChangeMobileNo= (e) => {
    const mobileNo = e.target.value;
    setMobileNo(mobileNo);
  };
  

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const onChangeConfirmPassword = (e) => {
    const confirmpassword = e.target.value;
    setConfirmpassword(confirmpassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      const data = {  
                      fullname,
                      cid,
                      gender,
                      dzongkhag,
                      gewog,
                      village,
                      address,
                      dob,
                      mobileNo,
                      email,
                      password,
                      confirmpassword
       };
       
      dispatch(
        register(data))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };
  // const classes = useStyles();
  return (
    <div className="col-md-12">
      <div className="regcard regcard-container">
        <img src={repic} alt="profile-img" className="profile-img-card" />
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      autoComplete="fname"
                      type="text"
                      name="fName"
                     
                      value={fullname}
                      variant="outlined"
                      required
                      fullWidth
                      id="fName"
                      onChange={onChangeFullname}
                      validations={[required, vfullname]}
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
                      onChange={onChangeCid}
                      value={cid}
                      label="CID"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl
                      variant="outlined"
                      className="formControl"
                      required
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Gender
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        name="gender"
                        value={gender}
                        onChange={handleChange}
                        label="Gender"
                      >
                        <MenuItem value={10}>Female</MenuItem>
                        <MenuItem value={20}>Male</MenuItem>
                        <MenuItem value={1}>Female</MenuItem>
                        <MenuItem value={2}>Male</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="dzongkhag"
                      type="text"
                      name="dzongkhag"
                      value={dzongkhag}
                      onChange={onChangeDzongkhag}
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
                      value={gewog}
                      onChange={onChangeGewog}
                      name="gewog"
                      autoComplete="gewog"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="village"
                      type="text"
                      name="village"
                      value={village}
                      onChange={onChangeVillage}
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
                      name="address"
                      value={address}
                      onChange={onChangeAddress}
                      autoComplete="current address"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="dob"
                      type="date"
                      name="dob"
                      value={dob}
                      onChange={onChangeDob}
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
                      name="mobileNo"
                      value={mobileNo}
                      onChange={onChangeMobileNo}
                      autoComplete="Mno"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      className="width"
                      autoComplete="email"
                      name="email"
                      value={email}
                      onChange={onChangeEmail}
                      validations={[required, validEmail]}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      label="Password"
                      type="password"
                      id="password"
                      value={password}
                      autoComplete="current-password"
                      onChange={onChangePassword}
                      validations={[required, vpassword]}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      label="Confirm Password"
                      type="password"
                      id="Cpassword"
                      autoComplete="Confirm-password"
                      onChange={onChangePassword}
                      value={confirmpassword}
                      autoComplete="Confirm-password"
                      onChange={onChangeConfirmPassword}
                      validations={[required, vpassword]}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel id="demo-simple-select-outlined-label">
                      Passport Photo *
                    </InputLabel>
                    <TextField
                      variant="outlined"
                      required
                      Passport Photo 
                
                   
                      variant="outlined"
                      
                      fullWidth
                      type="file"
                      id="file"
                      autoComplete="file"
                    />
                  </Grid>
                </Grid>
              </div>

              <div className="form-group">
                <button className="regbtn">Sign Up</button>
              </div>
              <p className="reglink">
                <a href="#">Already have account</a>{" "}
                <Link className="sign-text" to="/login">
                  Sign in
                </Link>
              </p>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Register;
