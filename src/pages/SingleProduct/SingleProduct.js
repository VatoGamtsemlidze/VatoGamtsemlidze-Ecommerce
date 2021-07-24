import React, {useEffect, useState} from 'react';
import Footer from "../../layouts/Footer/Footer";
import Title from "./SingleProductComps/Title";
import { useParams } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";
import ProductImages from "./SingleProductComps/ProductImages";
import ProductDes from "./SingleProductComps/ProductDes";
import Loader from "../../Components/Loader/Loader";
import Tabs from './Tabs/Tabs';
import TopBar from "../../layouts/TopBar/TopBar";

const SingleProduct = () => {

    const {id} = useParams();
    const [data, setData] = useState({
        title: '',
        image: '',
        price: '',
        description: '',
    });
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        getProducts();
    }, []);

    function getProducts(){
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(resp => resp.json())
            .then(dt => {
                console.log(dt);
                setData({
                    title: dt.title,
                    image: dt.image,
                    price: dt.price,
                    description: dt.description,
                });
            })
            .catch(error => {
                console.log("Error: " + error);
            })
            .finally(() => setLoading(false))
    }

    return (
        <Grid>
            <TopBar/>
            <Title/>
            <Loader isLoading={loading}>
                <Container maxWidth="lg" style={{display: "flex", paddingTop:"50px"}}>
                    <Grid xs={6}>
                        <ProductImages imageUrl={data.image}/>
                    </Grid>
                    <Grid xs={6}>
                        <ProductDes title={data.title} description={data.description} price={data.price}/>
                    </Grid>
                </Container>
                <Container maxWidth="lg" style={{display:"flex", paddingTop: "50px"}}>
                    <Grid item xs={12}>
                        <Tabs/>
                    </Grid>
                </Container>
            </Loader>
            <Footer/>
        </Grid>
    );
};

export default SingleProduct;