import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";
import addVacancyService from "../services/addVacancyService";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const AddVacancy = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [inputs, setInputs] = useState({});
  

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  inputs.publish=true;
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);

  const handleAddVacancy = (e) => {
    e.preventDefault();

    setSuccessful(false);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      // example code
      addVacancyService.save(inputs).then((response) => {
        console.log(response.data);
      });
    }
  };
  return (
    <div className="col-md-12">
      <div className=" container">
        <Form onSubmit={handleAddVacancy} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      autoComplete="title"
                      type="text"
                      name="title" 
                      value={inputs.title}
                      variant="outlined"
                      required
                      fullWidth
                      id="fName"
                      onChange={handleChange}
                      validations={[required]}
                      label="Title"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      autoComplete="remark"
                      type="text"
                      name="remark" 
                      value={inputs.remark}
                      variant="outlined"
                      required
                      fullWidth
                      id="remark"
                      onChange={handleChange}
                      validations={[required]}
                      label="Remark"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="deadline"
                      type="date"
                      name="dateline" 
                      value={inputs.deadline}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="time"
                      type="time"
                      name="time" 
                      value={inputs.time}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  </Grid>
                <label>
                    <input type="checkbox" value={inputs.publish} onChange={handleChange} />
                        <span> Publish</span>
                </label>
                </Grid>
              </div>
              <div className="form-group">
                <button className="col-md-2 btn btn-primary">Save</button>
              </div>
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

export default AddVacancy;
