import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link  } from 'react-router-dom';
import repic from "../images/repic.png";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
//import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { register } from "../actions/auth";


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

  const [username, setFullname] = useState("");
  const [gender, setGender] = React.useState('');


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const onChangeFullname = (e) => {
    const fullname = e.target.value;
    setFullname(fullname);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(username, email, password))
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
        <img
          src={repic}
          alt="profile-img"
          className="profile-img-card"
        /> 
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
                label="CID"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
               <FormControl variant="outlined" className="formControl" required>
               <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
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
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                className="width"
                autoComplete="email"
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
                validations={[required, vpassword]}
              />
            </Grid>
            <Grid item xs={6} >
            <InputLabel id="demo-simple-select-outlined-label">Passport Photo *</InputLabel>
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
                {/* <label htmlFor="username">Username</label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                /> */}
              </div>

              {/* <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div> */}

              {/* <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div> */}

              <div className="form-group">
                <button className="btn">Sign Up</button>
              </div>
              <p className="reglink">
              <a href="#">Already have account</a> <Link className="sign-text" to="/login">Sign in</Link>
             </p>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
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
