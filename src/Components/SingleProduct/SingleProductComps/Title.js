import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "none",
        height: "120px",
        margin: "0px",
        color: "#4F4F4F",
        fontSize: "30px",
        fontWeight: "600",
        backgroundColor: "#FBFBFB"
    }
})

const MyComponent = () => {

    const classes = useStyles();

    return (
        <div>
            <h2 className={classes.title}>Product Page</h2>
        </div>
    );
};

export default MyComponent;
