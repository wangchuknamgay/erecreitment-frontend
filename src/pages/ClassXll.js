import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 400,
  },
  table: {
    maxWidth: 590,
  },
  addmore: {
    maxWidth: 100,
    fontSize: 15,
  },
  remove: {
    maxWidth: 100,
    fontSize: 15,
  },
  markform: {
    maxWidth: 80,
  },
}));

function createData(subjects, marks) {
  return { subjects, marks };
}

const ClassXll = () => {
  const classes = useStyles();
  const [school, setSchool] = React.useState("");
  const [year, setYear] = React.useState("");
  const [formValues, setFormValues] = useState([{ subject: "", mark: "" }]);
  const [stream, setStream] = useState("A");

  const toggleStream = (value) => {
    setStream(value);
  };

  const handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.subject] = e.target.value;
    setFormValues(newFormValues);
  };

  const addFormFields = () => {
    setFormValues([...formValues, { subject: "", mark: "" }]);
  };

  const removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const handleSchoolChange = (event) => {
    setSchool(event.target.value);
  };
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  // const handleAddModel = () => {
  //  console.log("in add more")
  // };

  return (
    <div>
      <div className="mb-3">
        <div className="h4"> ACADEMIC </div>
        <div className="h5"> Class XII </div>
        <div className="h7">
          {" "}
          <ArrowRightIcon />
          Percentage is calculated based on English + best 4 subject. <br />
          <ArrowRightIcon /> Please input the subject mark as 0 if you have not
          taken the subject.
        </div>
      </div>
      <div className="form-group">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl
              variant="outlined"
              className={classes.formControl}
              required
            >
              <InputLabel htmlFor="outlined-school-native-simple">
                Name of School
              </InputLabel>
              <Select
                native
                value={school}
                onChange={handleSchoolChange}
                label="Name of School"
              >
                <option aria-label="None" value="" />
                <option value={10}>Nima</option>
                <option value={20}>Mothithang</option>
                <option value={30}>YHSS</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
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

          <Grid item xs={12} sm={6}>
            <br />
            <div className="h5">
              {" "}
              Stream *
              <RadioGroup
                aria-label="stream"
                // value={value}
                // onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="A"
                  name="stream"
                  onClick={(e) => toggleStream("A")}
                  control={<Radio  />}
                  label="Arts"
                  
                />
                <FormControlLabel
                  value="C"
                  name="stream"
                  onClick={(e) => toggleStream("C")}
                  control={<Radio  />}
                  label="Commerece"
                />
                <FormControlLabel
                  value="S"
                  name="stream"
                  onClick={(e) => toggleStream("S")}
                  control={<Radio />}
                  label="Science"
                />
              </RadioGroup>
            </div>
          </Grid>
        </Grid>
      </div>

      <div hidden={stream !== "A"}>
      
        <div className="artstream">
        <TableContainer>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>
                  {" "}
                  <b>Subjects</b>
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="left">
                  <b>Marks</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell> English</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="right">
                  <div className="markrow">
                    <TextField
                      required
                      variant="outlined"
                      type="number"
                      id="mark"
                      autoComplete="false"
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell> Dzongkha</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="right">
                  <div className="markrow">
                    <TextField
                      required
                      variant="outlined"
                      type="number"
                      id="mark"
                      autoComplete="false"
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell> Maths</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="right">
                  <div className="markrow">
                    <TextField
                      required
                      variant="outlined"
                      type="number"
                      id="mark"
                      autoComplete="false"
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell> Geography</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="right">
                  <div className="markrow">
                    <TextField
                      required
                      variant="outlined"
                      type="number"
                      id="mark"
                      autoComplete="false"
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell> History</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>

                <TableCell align="right">
                  <div className="markrow">
                    <TextField
                      required
                      variant="outlined"
                      type="number"
                      id="mark"
                      autoComplete="false"
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <button
                    className={classes.addmore}
                    variant="contained"
                    onClick={() => addFormFields()}
                  >
                    Add More
                  </button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <br />

        {formValues.map((element, index) => (
          <div className="form-inline" key={index}>
            <TextField
              style={{ width: "16%", paddingTop: "1%" }}
              type="text"
              variant="outlined"
              value={element.subject || ""}
              onChange={(e) => handleChange(index, e)}
            />
            <TextField
              style={{ width: "13%", paddingTop: "1%", paddingLeft: "7%" }}
              type="number"
              variant="outlined"
              value={element.mark}
              onChange={(e) => handleChange(index, e)}
            />
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
            <button
              type="button"
              className={classes.remove}
              onClick={() => removeFormFields()}
            >
              Remove
            </button>
          </div>
        ))}
        <br />
        <div>
          <InputLabel id="demo-simple-select-outlined-label">
            <b>Percentages</b>
          </InputLabel>
          <TextField
            style={{ width: "9%", paddingTop: "0%", paddingLeft: "0%" }}
            type="number"
            variant="outlined"
            // value={}
            onChange={(e) => handleChange()}
          />
          &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp; &nbsp; &nbsp;
        </div>
      </div> 
      </div>

      <div hidden={stream !== "C"}>
        <div className="commercestream">
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    {" "}
                    <b>Subjects</b>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell align="left">
                    <b>Marks</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell> English</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">
                    <div className="markrow">
                      <TextField
                        required
                        variant="outlined"
                        type="number"
                        id="mark"
                        autoComplete="false"
                      />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> Dzongkha</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">
                    <div className="markrow">
                      <TextField
                        required
                        variant="outlined"
                        type="number"
                        id="mark"
                        autoComplete="false"
                      />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> Maths</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">
                    <div className="markrow">
                      <TextField
                        required
                        variant="outlined"
                        type="number"
                        id="mark"
                        autoComplete="false"
                      />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> Commerce</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">
                    <div className="markrow">
                      <TextField
                        required
                        variant="outlined"
                        type="number"
                        id="mark"
                        autoComplete="false"
                      />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> Economic</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">
                    <div className="markrow">
                      <TextField
                        required
                        variant="outlined"
                        type="number"
                        id="mark"
                        autoComplete="false"
                      />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> Accountancy</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>

                  <TableCell align="right">
                    <div className="markrow">
                      <TextField
                        required
                        variant="outlined"
                        type="number"
                        id="mark"
                        autoComplete="false"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <button
                      className={classes.addmore}
                      variant="contained"
                      onClick={() => addFormFields()}
                    >
                      Add More
                    </button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <br />

          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <TextField
                style={{ width: "16%", paddingTop: "1%" }}
                type="text"
                variant="outlined"
                value={element.subject || ""}
                onChange={(e) => handleChange(index, e)}
              />
              <TextField
                style={{ width: "13%", paddingTop: "1%", paddingLeft: "7%" }}
                type="number"
                variant="outlined"
                value={element.mark}
                onChange={(e) => handleChange(index, e)}
              />
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
              <button
                type="button"
                className={classes.remove}
                onClick={() => removeFormFields()}
              >
                Remove
              </button>
            </div>
          ))}
          <br />
          <div>
            <InputLabel id="demo-simple-select-outlined-label">
              <b>Percentages</b>
            </InputLabel>
            <TextField
              style={{ width: "9%", paddingTop: "0%", paddingLeft: "0%" }}
              type="number"
              variant="outlined"
              // value={}
              onChange={(e) => handleChange()}
            />
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
            &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp; &nbsp; &nbsp;
          </div>
        </div>
      </div>

      <div hidden={stream !== "S"}>
        <div className="sciencestream">
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    {" "}
                    <b>Subjects</b>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell align="left">
                    <b>Marks</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell> English</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">
                    <div className="markrow">
                      <TextField
                        required
                        variant="outlined"
                        type="number"
                        id="mark"
                        autoComplete="false"
                      />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> Dzongkha</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">
                    <div className="markrow">
                      <TextField
                        required
                        variant="outlined"
                        type="number"
                        id="mark"
                        autoComplete="false"
                      />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> Maths</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">
                    <div className="markrow">
                      <TextField
                        required
                        variant="outlined"
                        type="number"
                        id="mark"
                        autoComplete="false"
                      />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> Physics</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">
                    <div className="markrow">
                      <TextField
                        required
                        variant="outlined"
                        type="number"
                        id="mark"
                        autoComplete="false"
                      />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> Chemistry</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">
                    <div className="markrow">
                      <TextField
                        required
                        variant="outlined"
                        type="number"
                        id="mark"
                        autoComplete="false"
                      />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> Biology</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">
                    <div className="markrow">
                      <TextField
                        required
                        variant="outlined"
                        type="number"
                        id="mark"
                        autoComplete="false"
                      />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> IT</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>

                  <TableCell align="right">
                    <div className="markrow">
                      <TextField
                        required
                        variant="outlined"
                        type="number"
                        id="mark"
                        autoComplete="false"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <button
                      className={classes.addmore}
                      variant="contained"
                      onClick={() => addFormFields()}
                    >
                      Add More
                    </button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <br />

          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <TextField
                style={{ width: "16%", paddingTop: "1%" }}
                type="text"
                variant="outlined"
                value={element.subject || ""}
                onChange={(e) => handleChange(index, e)}
              />
              <TextField
                style={{ width: "13%", paddingTop: "1%", paddingLeft: "7%" }}
                type="number"
                variant="outlined"
                value={element.mark}
                onChange={(e) => handleChange(index, e)}
              />
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
              <button
                type="button"
                className={classes.remove}
                onClick={() => removeFormFields()}
              >
                Remove
              </button>
            </div>
          ))}
          <br />
          <div>
            <InputLabel id="demo-simple-select-outlined-label">
              <b>Percentages</b>
            </InputLabel>
            <TextField
              style={{ width: "9%", paddingTop: "0%", paddingLeft: "0%" }}
              type="number"
              variant="outlined"
              // value={}
              onChange={(e) => handleChange()}
            />
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
            &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp; &nbsp; &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassXll;
