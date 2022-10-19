import React, {useState, useEffect} from "react";

import UserService from "../services/user.service";
import {makeStyles,TextField,Button} from '@material-ui/core';
import testService from "../services/test.service"
import Form from "react-validation/build/form";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

const Test = () => {
    const [content, setContent] = useState("");
    const classes = useStyles();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    }, []);

    const submitForm=(e)=>{
        let data ={name,description};
        testService.save(data).then(
            response=>{
                alert(response.data);
            }
        );

    }

    return (
        <div className="container">
            in test
            {/*<Form className={classes.root}>*/}
            {/*    <div>*/}
            {/*        <TextField id="outlined-error"*/}
            {/*                   label="Name"*/}
            {/*                   variant="standard" value={name} onChange={e => setName(e.target.value)}*/}
            {/*        />*/}
            {/*        <TextField*/}
            {/*            id="outlined-error-helper-text"*/}
            {/*            label="Description"*/}
            {/*            variant="standard"  value={description} onChange={e => setDescription(e.target.value)}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <Button variant="contained" color="primary" onClick={submitForm}>*/}
            {/*        submit*/}
            {/*    </Button>*/}
            {/*</Form>*/}
        </div>
    );
};

export default Test;
