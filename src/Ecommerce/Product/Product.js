import React, {useState} from 'react';
import './Product.css'
import {Pagination} from "@material-ui/lab";
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import {Grid} from "@material-ui/core";

const Product = () => {

    const [data, setData] = useState([
        {
            title: 'Blue Jam Jeans',
            image: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
            price: '$45'
        },

    ]);
    const [listOrGrid, setListOrGrid] = useState(false);




    function getProducts(){
        fetch('https://fakestoreapi.com/products')
            .then(resp => resp.json())
            .then(dt => {
                console.log(dt);
                setData(
                    {
                        title: dt.title,
                        image: dt.image,
                        price: dt.price,
                    }
                )
            });
    }

    // getProducts();

    return (
        <div className="product-main">
            <div className="product-control">
                <div className="view-control">
                    <a
                        href="#">
                        <ViewListIcon/>
                    </a>
                    <a
                        href="#">
                        <ViewModuleIcon/>
                    </a>
                </div>
                <p>Label Example</p>
                <div className="pagination">
                    <Pagination count={3}/>
                </div>
            </div>

            {(typeof data != 'undefined') ? (
                <Grid container className="product-cards">
                    {data.map((el, ) => {
                        return (
                            <Grid xs={4} className="card">
                                <Card>
                                    <CardActionArea>
                                        <CardContent>
                                            <img src={`${el.image}`}/>
                                            <p>{el.title}</p>
                                            <p>{el.price}</p>
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
                    <a href="#"><ViewListIcon/></a>
                    <a href="#"><ViewModuleIcon/></a>
                </div>
                <p>Label Example</p>
                <div className="pagination">
                    <Pagination count={3}/>
                </div>
            </div>
        </div>
    );
};

export default Product;