import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import classXService from "../services/classX.service";
import { Alert, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

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

const ClassX = () => {
  const classes = useStyles();
  const [yearOfCompletion, setYear] = React.useState("");
  //const [formValues, setFormValues] = useState([{ subject: "", mark: "" }]);
  const [formFields, setFormFields] = useState([{ subject: "", mark: "" }]);
  const [isTextHidden, setTextHidden] = useState(true);
  const [inputs, setInputs] = useState({});
  const [responseMessage, setResponseMessage] = React.useState("");
  const [openSuccess, setOpenSuccess] = useState(false);
  const navigate = useNavigate();

  const changeHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
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

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    classXService.saveData(inputs).then((response) => {
      if (response.data == "saved") {
        navigate("/profile");
      }
    });
  };

  return (
    <div>
       <div className="card degree-card">
        <div className="card-body">
      <div className="mb-4">
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
      <form>
        <div className="form-group">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.formControl}
                autoComplete="nameOfSchool"
                type="text"
                variant="outlined"
                required
                name="schoolName"
                value={inputs.schoolName || ""}
                onChange={changeHandle}
                label="Name of School"
              />
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
                  name="yearOfCompletion"
                  id="yearOfCompletion"
                  value={yearOfCompletion || ""}
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
        <br/> <br/>

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
                      name="chemistry"
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
                      name="biology"
                      value={inputs.biology || ""}
                      onChange={changeHandle}
                      autoComplete="false"
                    />
                  </div>
                </td>
              </tr>
              <tr className="dropdown-">
                <td className="pr-5">Economics</td>
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
                      name="economics"
                      value={inputs.economics || ""}
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
                      name="history"
                      value={inputs.history || ""}
                      onChange={changeHandle}
                      autoComplete="false"
                    />
                  </div>
                </td>
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
                      name="geography"
                      value={inputs.geography || ""}
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
        {/* {formValues.map((element, index) => (
          <div className="form-inline pr-5" key={index}>
            <input
              className="form-control "
              style={{ width: "18%", paddingTop: "1%" }}
              type="text"
              variant="outlined"
              name="subjects"
              value={element.subject || ""}
              onChange={(e) => handleChange(index, e)}
              
            />
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="markrow">
              <input
                className="form-control"
                style={{ width: "105%", paddingTop: "1%" }}
                type="number"
                variant="outlined"
                name="marks"
                value={element.mark || ""}
                onChange={(e) => handleChange(index, e)}
                

              />
            </div>
            &nbsp;&nbsp; &nbsp;
            <button
              type="button"
              className={classes.remove}
              onClick={() => removeFormFields()}
            >
              Remove
            </button>
          </div>
        ))} */}

        {formFields.map((form, index) => {
          return (
            <div  className="form-inline pr-5" key={index}>
              <input
                style={{ width: "26.3%"}}
                className="form-control"
                name="subject"
                type="text"
                onChange={(event) => handleFormChange(event, index)}
                value={form.subject}
              />
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={{ width: "8.6%"}}
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
            value={inputs.percentage || ""}
            // onChange={(e) => handleChange()}
          />
        </div>
        <br />

        <div className=" row col-md-6 p-2">
          <Button variant="contained" color="secondary" className="button">
            Cancel
          </Button>
          <div className="col-md-3">
            <Button
              variant="contained"
              onClick={submitForm}
              color="primary"
              className="button"
            >
              Save
            </Button>
          </div>
        </div>
      </form>

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

export default ClassX;
