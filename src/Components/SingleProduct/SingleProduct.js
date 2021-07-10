import React from 'react';
import EditedBar from "../TopBar/EditedBar";
import Footer from "../Footer/Footer";
import Title from "./Title";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";
import ProductImages from "./ProductImages";
import ProductDes from "./ProductDes";
import Tabs from './Tabs';

const SingleProduct = () => {
    return (
        <Grid>
            <EditedBar/>
            <Title/>
            <Container maxWidth="lg" style={{display: "flex", paddingTop:"50px"}}>
                <Grid xs={6}>
                    <ProductImages/>
                </Grid>
                <Grid xs={6}>
                    <ProductDes/>
                </Grid>
            </Container>
            <Container maxWidth="lg" style={{display:"flex", paddingTop: "50px"}}>
                <Grid item xs={12}>
                    <Tabs/>
                </Grid>
            </Container>
            <Footer/>
        </Grid>
    );
};

export default SingleProduct;
