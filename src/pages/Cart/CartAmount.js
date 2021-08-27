import React, {useEffect, useState} from 'react';
import {useStyles} from "./CartStyle";
import {Box, Button} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectProduct} from "../../store/selectors/productSelectors";

const CartAmount = () => {

    const classes = useStyles();
    const data = useSelector(selectProduct);
    const products = data.products;
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        let total = 0;
        for(let i = 0; i < data.products.length;i++){
            total += data.products[i].price
        }
        console.log(total);
        setTotalAmount(total)
    }, [data.products.length]);


    return (
        <Box pl={5} >
            <Box borderBottom="1px solid lightgray">
                <Box display="flex" justifyContent="space-between">
                    <h2 className={classes.amounts}>Temporary amount: </h2>
                    <h2 className={classes.amounts}>${totalAmount}</h2>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <h2 className={classes.amounts}>Shipping:</h2>
                    <h2 className={classes.amounts}>$0</h2>
                </Box>
            </Box>
            <Box>
                <Box display="flex" justifyContent="space-between">
                    <h2 className={classes.totalAmount}>Total Amount:</h2>
                    <h2 className={classes.totalAmount}>${totalAmount}</h2>
                </Box>
                <Box>
                    <Button variant="contained" style={{backgroundColor:"#2672ef",fontSize:"12px",width:"100%",height:"50px", color:"white"}}>Go to checkout</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default CartAmount;
