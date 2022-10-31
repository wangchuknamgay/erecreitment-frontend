import React from 'react';
import {useFormikContext} from 'formik';
import { Button } from "@material-ui/core";

const ButtonWrapper = ({
                           name,
                           buttonName,
                           ...otherProps
                       }) => {

    const {submitForm} = useFormikContext();

    const handleSubmit = () => {
        submitForm()
    }

    const configButton = {
        variant: 'contained',
        color: 'primary',
        //type:'submit',
        //fullWidth: true,
        size:"small",
        onClick: handleSubmit
    }

    return (
        <Button {...configButton} text={buttonName}>
        </Button>
    );
};

export default ButtonWrapper;