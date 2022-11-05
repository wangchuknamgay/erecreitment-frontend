import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 400,
  },
  table: {
    maxWidth: 590,
  },
}));

const Diploma = () => {
  const classes = useStyles();
  const [school, setCollege] = React.useState("");
  const [year, setYear] = React.useState("");

  const handleCollegeChange = (event) => {
    setCollege(event.target.value);
  };
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <div className="col-md-12 row p-0">
      <div className="">
        <div className="h4"> ACADEMIC </div>
        <div className="h5"> Diploma</div>
      </div>
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <div class="form-group row">
              <div class="col-md-6">
              <label
                for="documentTitle"
                class="col-sm-2 col-form-label"
              >
                Title:
              </label>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} className="mb-3">
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                      required
                    >
                      <InputLabel htmlFor="outlined-school-native-simple">
                        Name of College
                      </InputLabel>
                      <Select
                        native
                        value={school}
                        onChange={handleCollegeChange}
                        label="Name of School"
                      >
                        <option aria-label="None" value="" />
                        <option value={10}>Nima</option>
                        <option value={20}>Mothithang</option>
                        <option value={30}>YHSS</option>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
              <div class="col-md-6">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} className="mb-3">
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                      required
                    >
                      <InputLabel htmlFor="outlined-school-native-simple">
                        Name of College
                      </InputLabel>
                      <Select
                        native
                        value={school}
                        onChange={handleCollegeChange}
                        label="Name of School"
                      >
                        <option aria-label="None" value="" />
                        <option value={10}>Nima</option>
                        <option value={20}>Mothithang</option>
                        <option value={30}>YHSS</option>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
            </div>

            <div class="form-group row">
              <label
                for="documentTitle"
                class="col-sm-2 col-form-label required"
              >
                Title:
              </label>
              <div class="col-sm-4">
                <input
                  type="text"
                  class="form-control field clears"
                  id="documentTitle"
                  name="documentTitle"
                  required
                />
              </div>

              <label class="col-sm-2 col-form-label required">
                Visibility:
              </label>
              <div class="col-md-4">
                <select
                  name="isPublic"
                  id="isPublic"
                  class="form-control field clears required"
                >
                  <option value="">----</option>
                  <option value="Y">Public</option>
                  <option value="N">Private</option>
                </select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} className="mb-3">
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                      required
                    >
                      <InputLabel htmlFor="outlined-school-native-simple">
                        Name of College
                      </InputLabel>
                      <Select
                        native
                        value={school}
                        onChange={handleCollegeChange}
                        label="Name of School"
                      >
                        <option aria-label="None" value="" />
                        <option value={10}>Nima</option>
                        <option value={20}>Mothithang</option>
                        <option value={30}>YHSS</option>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
            </div>

            <div className="form-group">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} className="mb-3">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                  >
                    <InputLabel htmlFor="outlined-school-native-simple">
                      Name of College
                    </InputLabel>
                    <Select
                      native
                      value={school}
                      onChange={handleCollegeChange}
                      label="Name of School"
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>Nima</option>
                      <option value={20}>Mothithang</option>
                      <option value={30}>YHSS</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} className="mb-3">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                  >
                    <InputLabel htmlFor="outlined-school-native-simple">
                      Year of Completion
                    </InputLabel>
                    <Select
                      native
                      type="number"
                      value={year}
                      onChange={handleYearChange}
                      label="year"
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>2022</option>
                      <option value={20}>2021</option>
                      <option value={30}>2019</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <div className="choosefile">
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      type="number"
                      id="percentage"
                      label="Percentage Obtained"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <div className="choosefile">
                    <InputLabel id="demo-simple-select-outlined-label">
                      &nbsp; Academic Certificate *
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
                  <div className="choosefile">
                    <InputLabel id="demo-simple-select-outlined-label">
                      &nbsp; Marksheet Certificate *
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
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <div className="mb-5">
    //     <div className="h4"> ACADEMIC </div>
    //     <div className="h5"> Diploma</div>
    //   </div>

    // </div>
  );
};

export default Diploma;
