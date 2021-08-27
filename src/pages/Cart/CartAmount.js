import React from 'react';
import {useStyles} from "./CartStyle";
import {Box, Button} from "@material-ui/core";

const CartAmount = () => {

    const classes = useStyles();

    return (
        <Box pl={5} >
            <Box borderBottom="1px solid lightgray">
                <Box display="flex" justifyContent="space-between">
                    <h2 className={classes.amounts}>Temporary amount:</h2>
                    <h2 className={classes.amounts}>${}</h2>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <h2 className={classes.amounts}>Shipping:</h2>
                    <h2 className={classes.amounts}>$0</h2>
                </Box>
            </Box>
            <Box>
                <Box display="flex" justifyContent="space-between">
                    <h2 className={classes.totalAmount}>Total Amount:</h2>
                    <h2 className={classes.totalAmount}>${}</h2>
                </Box>
                <Box>
                    <Button variant="contained" style={{backgroundColor:"#2672ef",fontSize:"12px",width:"100%",height:"50px", color:"white"}}>Go to checkout</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default CartAmount;
