import React, { useState, useEffect, useCallback } from "react";
import { Navigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import EventBus from "../common/EventBus";
import { logout } from "../actions/auth";
import { Alert, Snackbar } from "@mui/material";
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
  faDownload,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const VacancyPage = () => {
    const [vacancyList, setVacancyList] = useState([]);
 
  return (
    <div className="col-md-12 row ">
    
      <div className="col-md-12">
        <div className="card p-2">
          <div className="card-body p-3">
              <div className = "mb-2">
                    <button className="btn btn-primary"> Add Vacancy</button>
                 </div>
              {/* <Link to="/master" onClick={toggleEducationModel}>
                Master
              </Link> */}
           
            <div className="table-responsive ">
              <table className="table table-striped table-bordered">
                <thead className="custum-thead">
                  <tr>
                  <th>College</th>
                  <th align="left">Year</th>
                  <th align="left">Percentage</th>
                  <th align="left">Academic</th>
                  <th align="left">Certificate</th>
                  <th align="left">Action</th>
                  </tr>
                </thead>
                  <tbody>
                  {vacancyList.map((item) => (
                    <tr key={item.masterId}>
                      <td component="th" scope="row">
                        {item.collegeName}
                      </td>
                      <td>{item.year}</td>
                      <td>{item.percentage}</td>
                      <td>
                        <span className="custom-link">
                          <FontAwesomeIcon icon={faDownload} />
                          Academic
                        </span>
                      </td>
                      <td>
                        <span className="custom-link">
                          <FontAwesomeIcon icon={faDownload} />
                         Marksheet
                        </span>
                      </td>
                      <td align="center">
                        <span
                          //onClick={(e) => populateMasterDate(e, item)}
                          className="custom-link"
                        >
                         <FontAwesomeIcon icon={faEdit} />
                         Edit
                        </span>
                        &nbsp; &nbsp;&nbsp;
                        <span
                        //   onClick={(e) => populateMasterDate(e, item)}
                          className="custom-link"
                        >
                         <FontAwesomeIcon icon={faTrash} /> 
                          Delete
                        </span>
                      </td>
                    </tr>
                  ))}
                
                </tbody>
              </table>
            </div>
            <br />

          <Snackbar
            //open={openSuccess}
            autoHideDuration={2000}
           // onClose={handleCloseSuccess}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
           {/* <Alert severity="success">{responseMessage}</Alert> */}
          </Snackbar>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default VacancyPage;
