import React, {useEffect, useState} from 'react';
import './Product.css'
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import {Box, Button, Grid} from "@material-ui/core";
import {Link} from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import {singlePagePath} from "../../routes";
import PaginationComp from "../../Components/pagination";
import {useStyles} from "./ProductStyles";

const Product = ({}) => {

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(6);

    const [data, setData] = useState([
        {
            title: '',
            image: '',
            price: '',
        }
    ]);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);


    const [listOrGrid, setListOrGrid] = useState(true);
    const classes = useStyles();

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    function getProducts(){
        setLoading(true);
        fetch('https://fakestoreapi.com/products')
            .then(resp => resp.json())
            .then(dt => {
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
                        <PaginationComp page={currentPage} cardsPerPage={cardsPerPage} totalCards={data.length} paginate={paginate}/>
                    </div>
                </div>
                {(typeof data != 'undefined') ? (
                    <Grid container className="product-cards">
                        {currentCards.map((el) => {
                            return (
                                <Grid xs={listOrGrid ? 4 : 12} className="card">
                                    <Link to={singlePagePath.replace(':id', el.id)}><Card className={classes.customCard}>
                                        <CardActionArea>
                                            <CardContent className={listOrGrid ? classes.gridClass : classes.listClass}>
                                                <img className={classes.cardImg} style={{maxWidth: listOrGrid ? "300px" : "200px"}} src={`${el.image}`}/>
                                                <Box pl={3}>
                                                    <Box display={listOrGrid ? "block" : "flex"} justifyContent="space-between">
                                                        <h2 style={{maxWidth: "500px", color:"black",fontWeight:"500"}}>{el.title}</h2>
                                                        <p>${el.price}</p>
                                                    </Box>
                                                    <Box pt={3}>
                                                        <a style={{display: listOrGrid ? "none" : "block"}} className={classes.description}>{el.description}</a>
                                                    </Box>

                                                </Box>
                                                </CardContent>
                                        </CardActionArea>
                                    </Card>
                                    </Link>
                                    <Box display="flex" justifyContent="center">
                                        <Button variant="contained" style={{backgroundColor:"#2672ef", color:"white",fontSize:"12px"}}>Add to cart</Button>
                                    </Box>
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
                        <PaginationComp page={currentPage} cardsPerPage={cardsPerPage} totalCards={data.length} paginate={paginate}/>
                    </div>
                </div>
            </Loader>
        </div>
    );
};
export default Product;