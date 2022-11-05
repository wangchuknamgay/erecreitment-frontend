import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
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

const rows = [
  createData("English", 159),
  createData("Dzongkha", 237),
  createData("Maths", 262),
  createData("Physics", 305),
  createData("Chemistry", 356),
  createData("Biology", 159),
  createData("Economics", 237),
  createData("History", 262),
  createData("Geography", 305),
  createData("IT", 356),
];

const ClassX = () => {
  const classes = useStyles();
  const [school, setSchool] = React.useState("");
  const [year, setYear] = React.useState("");
  // const [markList, setMarkList] = React.useState([{Subjects, Marks}]);
  const [formValues, setFormValues] = useState([{ subject: "", mark: "" }]);

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
        <div className="h5"> Class X </div>
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
        </Grid>
      </div>

      <div className="sciencestream">
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    {" "}
                    <b>Subjects</b>
                  </TableCell>
                  <TableCell align="left">
                    <b>Marks</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell> English</TableCell>
                  <TableCell align="right">
                    <div className="markrow">
                      <input
                        className="form-control"
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
                  <TableCell align="right">
                    <div className="markrow">
                      <input
                        className="form-control"
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
                  <TableCell align="right">
                    <div className="markrow">
                      <input
                        className="form-control"
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
                  <TableCell align="right">
                    <div className="markrow">
                      <input
                        className="form-control"
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
                  <TableCell align="right">
                    <div className="markrow">
                      <input
                        className="form-control"
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
                  <TableCell align="right">
                    <div className="markrow">
                      <input
                        className="form-control"
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
                  <TableCell align="right">
                    <div className="markrow">
                      <input
                        className="form-control"
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
                  <TableCell align="right">
                    <div className="markrow">
                      <input
                        className="form-control"
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
                  <TableCell align="right">
                    <div className="markrow">
                      <input
                        className="form-control"
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
                  <TableCell align="right">
                    <div className="markrow">
                      <input
                        className="form-control"
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
              <input
                className="form-control"
                style={{ width: "13%",  }}
                type="text"
                variant="outlined"
                value={element.subject || ""}
                onChange={(e) => handleChange(index, e)}
              /> &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
              <input
                className="form-control"
                style={{ width: "4%", paddingTop: "1%", paddingRight: "5%" }}
                type="number"
                variant="outlined"
                value={element.mark}
                onChange={(e) => handleChange(index, e)}
              />
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; 
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
            <input
              className="form-control"
              style={{ width: "9%", paddingTop: "0%", paddingLeft: "0%" }}
              type="number"
              variant="outlined"
              // value={}
              onChange={(e) => handleChange()}
            />
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
            &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
            
          </div>
        </div>
   
    </div>
  );
};

export default ClassX;
