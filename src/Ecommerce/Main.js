import React from 'react';
import Product from "./Product";
import Filter from "./Filter";
import {Container, Grid} from "@material-ui/core";

const Main  = () => {
    return (
        <div>
            <Container maxWidth="lg" style={{display: "flex"}}>
                <Grid xs={6}>
                    <Filter />
                </Grid>
                <Grid xs={6}>
                    <Product />
                </Grid>
            </Container>
        </div>
    );
};

export default Main;
