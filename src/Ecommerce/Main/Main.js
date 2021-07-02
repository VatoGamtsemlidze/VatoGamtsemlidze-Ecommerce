import React from 'react';
import Product from "../Product/Product";
import Filter from "../Filter/Filter";
import {Container, Grid} from "@material-ui/core";

const Main  = () => {
    return (
        <div>
            <Container maxWidth="lg" style={{display: "flex"}}>
                <Grid xs={4}>
                    <Filter />
                </Grid>
                <Grid xs={8}>
                    <Product />
                </Grid>
            </Container>
        </div>
    );
};

export default Main;
