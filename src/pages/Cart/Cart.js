import React from 'react';
import TopBar from "../../layouts/TopBar/TopBar";
import Footer from "../../layouts/Footer/Footer";
import {useStyles} from "./CartStyle";
import {Box, Container, Grid} from "@material-ui/core";
import CartAmount from "./CartAmount";
import CartItems from "./CartItems";

const Cart = () => {

    const classes = useStyles();

    return (
        <div>
            <TopBar/>
            <h2 className={classes.title}>Shopping cart</h2>
            <Container style={{display:"flex", paddingTop: "30px"}}>
                <Grid xs={8}>
                    <CartItems/>
                </Grid>
                <Grid xs={4}>
                    <CartAmount/>
                </Grid>
            </Container>
            <Footer/>
        </div>
    );
};

export default Cart;
