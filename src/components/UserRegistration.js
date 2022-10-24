
import React, {useState, useEffect} from "react";

import RegisterService from "../services/register.service";
import {makeStyles,TextField,Button} from '@material-ui/core';
import Form from "react-validation/build/form";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

const UserRegistration = () => {
    const [content, setContent] = useState("");
    const classes = useStyles();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="container">
             <form>
                <label> Name: <input type="text" name="name" /> </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UserRegistration;
