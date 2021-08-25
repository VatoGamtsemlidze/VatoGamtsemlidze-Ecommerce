import React from 'react';
import {useStyles} from "./CartStyle";
import {Box} from "@material-ui/core";

const CartAmount = () => {

    const classes = useStyles();

    return (
        <Box pl={5}>
            <h2 className={classes.head}>The total amount of</h2>
        </Box>
    );
};

export default CartAmount;
