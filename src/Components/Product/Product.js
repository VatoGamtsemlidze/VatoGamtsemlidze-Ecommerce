import React, {useEffect, useState} from 'react';
import './Product.css'
import {Pagination} from "@material-ui/lab";
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import {Box, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Loader from "../Loader/Loader";

const useStyles = makeStyles({
    gridClass: {
        display: "flex",
        flexDirection: "column",
    },
    listClass: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    customCard: {
        border: "none",
        boxShadow: "none",
    },
    cardImg: {
        marginTop: "-10px",
        borderRadius: "5px",
        "&:hover": {
            transitionDuration: "2s",
            transform: "scale(1.25)"
        },
    },
    description: {
        fontSize: "13px",
        color: "gray",
    }
})

const Product = ({}) => {

    const singlePagePath = "/product/:id";
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([
        {
            title: '',
            image: '',
            price: '',
        }
    ]);
    const [listOrGrid, setListOrGrid] = useState(true);
    const classes = useStyles();

    function getProducts(){
        setLoading(true);
        fetch('https://fakestoreapi.com/products')
            .then(resp => resp.json())
            .then(dt => {
                console.log(dt);
                setData(dt);
            })
            .catch(error => {
                console.log("Error: "+ error);
            })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="product-main">
            <Loader isLoading={loading}>
                <div className="product-control">
                    <div className="view-control">
                        <a
                            href="#">
                            <ViewListIcon onClick={(e) => {e.preventDefault();  setListOrGrid(false)}}/>
                        </a>
                        <a
                            href="#">
                            <ViewModuleIcon onClick={(e) => {e.preventDefault(); setListOrGrid(true)}}/>
                        </a>
                    </div>
                    <p>Label Example</p>
                    <div className="pagination">
                        <Pagination count={3}/>
                    </div>
                </div>
                {(typeof data != 'undefined') ? (
                    <Grid container className="product-cards">
                        {data.map((el) => {
                            return (
                                <Grid xs={listOrGrid ? 4 : 12} className="card">
                                    <Card className={classes.customCard}>
                                        <CardActionArea>
                                            <CardContent className={listOrGrid ? classes.gridClass : classes.listClass}>
                                                <img className={classes.cardImg} style={{maxWidth: listOrGrid ? "300px" : "200px"}} src={`${el.image}`}/>
                                                <Box pl={3}>
                                                    <Box display={listOrGrid ? "block" : "flex"} justifyContent="space-between">
                                                    <Link to={singlePagePath.replace(':id', el.id)}><h2 style={{maxWidth: "500px", color:"black",fontWeight:"500"}}>{el.title}</h2></Link>
                                                    <p>${el.price}</p>
                                                    </Box>
                                                    <Box pt={3}>
                                                    <a style={{display: listOrGrid ? "none" : "block"}} className={classes.description}>{el.description}</a>
                                                    </Box>
                                                </Box>
                                                </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                ) : (' ')}
                <div className="product-control">
                    <div className="view-control">
                        <a
                            href="#">
                            <ViewListIcon onClick={(e) => {e.preventDefault();  setListOrGrid(false)}}/>
                        </a>
                        <a
                            href="#">
                            <ViewModuleIcon onClick={(e) => {e.preventDefault(); setListOrGrid(true)}}/>
                        </a>
                    </div>
                    <p>Label Example</p>
                    <div className="pagination">
                        <Pagination count={3}/>
                    </div>
                </div>
            </Loader>
        </div>
    );
};
export default Product;