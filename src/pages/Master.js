import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import masterService from "../services/master.service";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 400,
  },
  table: {
    maxWidth: 590,
  },
}));

const Master = () => {
  const classes = useStyles();
  const [year, setYear] = React.useState("");
  const [inputs, setInputs] = useState({});
  const [masterModel, setMasterModel] = React.useState(false);
  const [masterList, setMasterList] = useState([]);

  const changeHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const submitmasterForm = (event) => {
    event.preventDefault();
    masterService.save(inputs).then((response) => {
      // setResponseMessage(response.data);
      // setOpenSuccess(true);
      // setMasterModel(!masterModel);
      // getAllExperience();
    });
  };

  return (
    <div>
      <div className="card master-card">
        <div className="card-body">
          <div className="mb-4">
            <div className="h4"> ACADEMIC </div>
            <div className="h5 text-muted"> Master</div>
          </div>
          <div className="form-group">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputLabel id="demo-simple-select-outlined-label">
                  &nbsp;Name of College *
                </InputLabel>
                <TextField
                  className={classes.formControl}
                  autoComplete="nameOfCollege"
                  type="text"
                  variant="outlined"
                  required
                  name="collegeName"
                  value={inputs.collegeName || ""}
                  onChange={changeHandle}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="choosefile">
                  <InputLabel id="demo-simple-select-outlined-label">
                    &nbsp;Academic Certificate *
                  </InputLabel>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="file"
                    id="file"
                    autoComplete="file"
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel id="demo-simple-select-outlined-label">
                  &nbsp;Year of Completion *
                </InputLabel>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  required
                >
                  <Select
                    native
                    type="number"
                    name="yearOfCompletion"
                    id="yearOfCompletion"
                    value={year || ""}
                    onChange={handleYearChange}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>2022</option>
                    <option value={20}>2021</option>
                    <option value={30}>2019</option>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <div className="choosefile">
                  <InputLabel id="demo-simple-select-outlined-label">
                    &nbsp;Marksheet Certificate *
                  </InputLabel>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="file"
                    id="file"
                    autoComplete="file"
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="mb-5">
                  <InputLabel id="demo-simple-select-outlined-label">
                    &nbsp;Percentage Obtained *
                  </InputLabel>
                  <TextField
                    className={classes.formControl}
                    type="number"
                    variant="outlined"
                    required
                    name="percentage"
                  />
                </div>
              </Grid>
            </Grid>

            <Button variant="contained" color="secondary" className="master-button">
              Cancel
            </Button>
            &ensp; &ensp; &ensp; 
            <Button
              variant="contained"
              onClick={submitmasterForm}
              color="primary"
              className="master-button"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Master;
