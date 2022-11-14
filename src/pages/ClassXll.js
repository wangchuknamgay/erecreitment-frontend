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
  //const [formValues, setFormValues] = useState([{ subject: "", mark: "" }]);
  const [formFields, setFormFields] = useState([{ subject: "", mark: "" }]);
  const [stream, setStream] = useState("A");
  const [value, setValue] = useState("arts");
  const [inputs, setInputs] = useState({});





  const changeHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const toggleStream = (value) => {
    setStream(value);
  };

  const handleStreamChange = (event) => {
    setValue(event.target.value);
  };

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };
  const addFields = () => {
    let object = {
      subject: "",
      mark: "",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  const handleSchoolChange = (event) => {
    setSchool(event.target.value);
  };
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <div>
      <div className="card degree-card">
        <div className="card-body">
      <div className="mb-4">
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
                value={value}
                onChange={handleStreamChange}
                row
              >
                <FormControlLabel
                  value="arts"
                  name="stream"
                  onClick={(e) => toggleStream("A")}
                  control={<Radio />}
                  label="Arts"
                />
                <FormControlLabel
                  value="C"
                  name="stream"
                  onClick={(e) => toggleStream("C")}
                  control={<Radio />}
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
        <div className="table-responsive pl-2">
          <table className={classes.table}>
            <thead>
              <tr>
                <th className="pr-5">Subjects</th>
                <th className="pr-5"></th>
                <th className="pr-5"></th>
                <th className="pr-5"></th>
                <th className="pl-5">Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr className="dropdown-">
                <td className="pr-5">English</td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pl-5">
                  <div className="markrow">
                    <input
                      className="form-control"
                      required
                      variant="outlined"
                      type="number"
                      name="english"
                      value={inputs.english || ""}
                      onChange={changeHandle}
                      autoComplete="false"
                    />
                  </div>
                </td>
              </tr>
              <tr className="dropdown-">
                <td className="pr-5">Dzongkha</td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pl-5">
                  <div className="markrow">
                    <input
                      className="form-control"
                      required
                      variant="outlined"
                      type="number"
                      name="dzongkha"
                      value={inputs.dzongkha || ""}
                      onChange={changeHandle}
                      autoComplete="false"
                    />
                  </div>
                </td>
              </tr>
              <tr className="dropdown-">
                <td className="pr-5">Maths</td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pl-5">
                  <div className="markrow">
                    <input
                      className="form-control"
                      required
                      variant="outlined"
                      type="number"
                      name="maths"
                      value={inputs.maths || ""}
                      onChange={changeHandle}
                      autoComplete="false"
                    />
                  </div>
                </td>
                {/* <td className="pr-5"></td> */}
              </tr>
              <tr className="dropdown-">
                <td className="pr-5">Geography</td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pl-5">
                  <div className="markrow">
                    <input
                      className="form-control"
                      required
                      variant="outlined"
                      type="number"
                      name="physics"
                      value={inputs.geography || ""}
                      onChange={changeHandle}
                      autoComplete="false"
                    />
                  </div>
                </td>
              </tr>
              <tr className="dropdown-">
                <td className="pr-5">History</td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>

                <td className="pl-5">
                  <div className="markrow">
                    <input
                      className="form-control"
                      required
                      variant="outlined"
                      type="number"
                      name="it"
                      value={inputs.history || ""}
                      onChange={changeHandle}
                      autoComplete="false"
                    />
                  </div>
                </td>
                <td className="pl-3">
                  <button
                    className={classes.addmore}
                    variant="contained"
                    onClick={() => addFields()}
                  >
                    Add More
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />

        {/* {!isTextHidden && ( */}
        {formFields.map((form, index) => {
          return (
            <div  className="form-inline pr-5" key={index}>
              <input
                style={{ width: "26%"}}
                className="form-control"
                name="subject"
                type="number"
                onChange={(event) => handleFormChange(event, index)}
                value={form.subject}
              />
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={{ width: "8.5%"}}
                className="form-control"
                name="mark" 
                type="number"          
                onChange={(event) => handleFormChange(event, index)}
                value={form.mark}
              /> &nbsp;&nbsp; &nbsp;
              <button 
               className={classes.remove}
               onClick={() => removeFields(index)}>Remove</button>
            </div>
          );
        })}

        

        <br />
        <div>
          <InputLabel id="demo-simple-select-outlined-label">
            <b>Percentages</b>
          </InputLabel>
          <input
            className="form-control"
            style={{ width: "25%", paddingTop: "0%", paddingLeft: "0%" }}
            type="number"
            variant="outlined"
            disabled
            name="percentage"
            value={inputs.percentage}
            onChange={(e) => handleFormChange()}
          />
        </div>
        <br />
        <div className=" row col-md-6 p-3">
          <Button variant="contained" color="secondary" className="button">
            Cancel
          </Button>
          <div className="col-md-3">
            <Button
              variant="contained"
              // onClick={submitForm}
              color="primary"
              className="button"
            >
              Save
            </Button>
          </div>
        </div>


  
        </div>
      </div>
{/* ===================COMMERECE================== */}
      <div hidden={stream !== "C"}>
        <div className="commercestream">
        <div className="table-responsive pl-2">
          <table className={classes.table}>
            <thead>
              <tr>
                <th className="pr-5">Subjects</th>
                <th className="pr-5"></th>
                <th className="pr-5"></th>
                <th className="pr-5"></th>
                <th className="pl-5">Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr className="dropdown-">
                <td className="pr-5">English</td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pl-5">
                  <div className="markrow">
                    <input
                      className="form-control"
                      required
                      variant="outlined"
                      type="number"
                      name="english"
                      value={inputs.english || ""}
                      onChange={changeHandle}
                      autoComplete="false"
                    />
                  </div>
                </td>
              </tr>
              <tr className="dropdown-">
                <td className="pr-5">Dzongkha</td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pl-5">
                  <div className="markrow">
                    <input
                      className="form-control"
                      required
                      variant="outlined"
                      type="number"
                      name="dzongkha"
                      value={inputs.dzongkha || ""}
                      onChange={changeHandle}
                      autoComplete="false"
                    />
                  </div>
                </td>
              </tr>
              <tr className="dropdown-">
                <td className="pr-5">Maths</td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pl-5">
                  <div className="markrow">
                    <input
                      className="form-control"
                      required
                      variant="outlined"
                      type="number"
                      name="maths"
                      value={inputs.maths || ""}
                      onChange={changeHandle}
                      autoComplete="false"
                    />
                  </div>
                </td>
                {/* <td className="pr-5"></td> */}
              </tr>
              <tr className="dropdown-">
                <td className="pr-5">Commerece</td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pl-5">
                  <div className="markrow">
                    <input
                      className="form-control"
                      required
                      variant="outlined"
                      type="number"
                      name="physics"
                      value={inputs.commerce || ""}
                      onChange={changeHandle}
                      autoComplete="false"
                    />
                  </div>
                </td>
              </tr>
              <tr className="dropdown-">
                <td className="pr-5">Economic</td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pl-5">
                  <div className="markrow">
                    <input
                      className="form-control"
                      required
                      variant="outlined"
                      type="number"
                      name="physics"
                      value={inputs.economic || ""}
                      onChange={changeHandle}
                      autoComplete="false"
                    />
                  </div>
                </td>
              </tr>
              <tr className="dropdown-">
                <td className="pr-5">Accountancy</td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pl-5">
                  <div className="markrow">
                    <input
                      className="form-control"
                      required
                      variant="outlined"
                      type="number"
                      name="it"
                      value={inputs.account || ""}
                      onChange={changeHandle}
                      autoComplete="false"
                    />
                  </div>
                </td>
                <td className="pl-3">
                  <button
                    className={classes.addmore}
                    variant="contained"
                    onClick={() => addFields()}
                  >
                    Add More
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />

        {/* {!isTextHidden && ( */}
        {formFields.map((form, index) => {
          return (
            <div  className="form-inline pr-5" key={index}>
              <input
                style={{ width: "27.3%"}}
                className="form-control"
                name="subject"
                type="text"
                onChange={(event) => handleFormChange(event, index)}
                value={form.subject}
              />
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={{ width: "8.5%"}}
                className="form-control"
                name="mark" 
                type="number"          
                onChange={(event) => handleFormChange(event, index)}
                value={form.mark}
              /> &nbsp;&nbsp; &nbsp;
              <button 
               className={classes.remove}
               onClick={() => removeFields(index)}>Remove</button>
            </div>
          );
        })}

        

        <br />
        <div>
          <InputLabel id="demo-simple-select-outlined-label">
            <b>Percentages</b>
          </InputLabel>
          <input
            className="form-control"
            style={{ width: "25%", paddingTop: "0%", paddingLeft: "0%" }}
            type="number"
            variant="outlined"
            disabled
            name="percentage"
            value={inputs.percentage }
            onChange={(e) => handleFormChange()}
          />
        </div>
        <br />
        <div className=" row col-md-6 p-3">
          <Button variant="contained" color="secondary" className="button">
            Cancel
          </Button>
          <div className="col-md-3">
            <Button
              variant="contained"
              // onClick={submitForm}
              color="primary"
              className="button"
            >
              Save
            </Button>
          </div>
        </div>


  
        </div>
      </div>
{/* ===================SCIENCE================== */}
      <div hidden={stream !== "S"}>
        <div className="sciencestream">
        <div className="table-responsive pl-2">
          <table className={classes.table}>
            <thead>
              <tr>
                <th className="pr-5">Subjects</th>
                <th className="pr-5"></th>
                <th className="pr-5"></th>
                <th className="pr-5"></th>
                <th className="pl-5">Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr className="dropdown-">
                <td className="pr-5">English</td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pl-5">
                  <div className="markrow">
                    <input
                      className="form-control"
                      required
                      variant="outlined"
                      type="number"
                      name="english"
                      value={inputs.english || ""}
                      onChange={changeHandle}
                      autoComplete="false"
                    />
                  </div>
                </td>
              </tr>
              <tr className="dropdown-">
                <td className="pr-5">Dzongkha</td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pl-5">
                  <div className="markrow">
                    <input
                      className="form-control"
                      required
                      variant="outlined"
                      type="number"
                      name="dzongkha"
                      value={inputs.dzongkha || ""}
                      onChange={changeHandle}
                      autoComplete="false"
                    />
                  </div>
                </td>
              </tr>
              <tr className="dropdown-">
                <td className="pr-5">Maths</td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pl-5">
                  <div className="markrow">
                    <input
                      className="form-control"
                      required
                      variant="outlined"
                      type="number"
                      name="maths"
                      value={inputs.maths || ""}
                      onChange={changeHandle}
                      autoComplete="false"
                    />
                  </div>
                </td>
                {/* <td className="pr-5"></td> */}
              </tr>
              <tr className="dropdown-">
                <td className="pr-5">Physics</td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pl-5">
                  <div className="markrow">
                    <input
                      className="form-control"
                      required
                      variant="outlined"
                      type="number"
                      name="physics"
                      value={inputs.physics || ""}
                      onChange={changeHandle}
                      autoComplete="false"
                    />
                  </div>
                </td>
              </tr>
              <tr className="dropdown-">
                <td className="pr-5">Chemistry</td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pl-5">
                  <div className="markrow">
                    <input
                      className="form-control"
                      required
                      variant="outlined"
                      type="number"
                      name="physics"
                      value={inputs.chemistry || ""}
                      onChange={changeHandle}
                      autoComplete="false"
                    />
                  </div>
                </td>
              </tr>
              <tr className="dropdown-">
                <td className="pr-5">Biology</td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pl-5">
                  <div className="markrow">
                    <input
                      className="form-control"
                      required
                      variant="outlined"
                      type="number"
                      name="physics"
                      value={inputs.biology || ""}
                      onChange={changeHandle}
                      autoComplete="false"
                    />
                  </div>
                </td>
              </tr>
              <tr className="dropdown-">
                <td className="pr-5">IT</td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>
                <td className="pr-5"></td>

                <td className="pl-5">
                  <div className="markrow">
                    <input
                      className="form-control"
                      required
                      variant="outlined"
                      type="number"
                      name="it"
                      value={inputs.it || ""}
                      onChange={changeHandle}
                      autoComplete="false"
                    />
                  </div>
                </td>
                <td className="pl-3">
                  <button
                    className={classes.addmore}
                    variant="contained"
                    onClick={() => addFields()}
                  >
                    Add More
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />

        {/* {!isTextHidden && ( */}
        {formFields.map((form, index) => {
          return (
            <div  className="form-inline pr-5" key={index}>
              <input
                style={{ width: "25.5%"}}
                className="form-control"
                name="subject"
                type="text"
                onChange={(event) => handleFormChange(event, index)}
                value={form.subject}
              />
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={{ width: "8.5%"}}
                className="form-control"
                name="mark" 
                type="number"          
                onChange={(event) => handleFormChange(event, index)}
                value={form.mark}
              /> &nbsp;&nbsp; &nbsp;
              <button 
               className={classes.remove}
               onClick={() => removeFields(index)}>Remove</button>
            </div>
          );
        })}


        <br />
        <div>
          <InputLabel id="demo-simple-select-outlined-label">
            <b>Percentages</b>
          </InputLabel>
          <input
            className="form-control"
            style={{ width: "24%" }}
            type="number"
            variant="outlined"
            name="percentage"
            value={inputs.percentage}
            onChange={(e) => handleFormChange()}
          />
        </div>
        <br />
        <div className=" row col-md-6 p-3">
          <Button variant="contained" color="secondary" className="button">
            Cancel
          </Button>
          <div className="col-md-3">
            <Button
              variant="contained"
              // onClick={submitForm}
              color="primary"
              className="button"
            >
              Save
            </Button>
          </div>
        </div>


  
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default ClassXll;
