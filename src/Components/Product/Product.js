import React, {useState} from 'react';
import './Product.css'
import {Pagination} from "@material-ui/lab";
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

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
    }
})

const Product = () => {

    const [data, setData] = useState([
        {
            title: 'Blue Jam Jeans',
            image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5a%2F71%2F5a7120e0ad22d596053262050a1c16514fdb3d9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5a%2F71%2F5a7120e0ad22d596053262050a1c16514fdb3d9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5a%2F71%2F5a7120e0ad22d596053262050a1c16514fdb3d9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5a%2F71%2F5a7120e0ad22d596053262050a1c16514fdb3d9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5a%2F71%2F5a7120e0ad22d596053262050a1c16514fdb3d9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5a%2F71%2F5a7120e0ad22d596053262050a1c16514fdb3d9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5a%2F71%2F5a7120e0ad22d596053262050a1c16514fdb3d9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5a%2F71%2F5a7120e0ad22d596053262050a1c16514fdb3d9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5a%2F71%2F5a7120e0ad22d596053262050a1c16514fdb3d9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5a%2F71%2F5a7120e0ad22d596053262050a1c16514fdb3d9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5a%2F71%2F5a7120e0ad22d596053262050a1c16514fdb3d9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
            price: '$45'
        },
        {
            title: 'Blue Jam Jeans',
            image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5a%2F71%2F5a7120e0ad22d596053262050a1c16514fdb3d9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
            price: '$45'
        },


    ]);
    const [listOrGrid, setListOrGrid] = useState(true);
    const classes = useStyles();

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
                        <ViewListIcon onClick={() => setListOrGrid(false)}/>
                    </a>
                    <a
                        href="#">
                        <ViewModuleIcon onClick={() => setListOrGrid(true)}/>
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
                            <Grid xs={listOrGrid ? 4 : 12} className="card">
                                <Card className={classes.customCard}>
                                    <CardActionArea>
                                        <CardContent className={listOrGrid ? classes.gridClass : classes.listClass}>
                                            <img className={classes.cardImg} style={{maxWidth: listOrGrid ? "300px" : "200px"}} src={`${el.image}`}/>
                                            <h2>{el.title}</h2>
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
                    <a
                        href="#">
                        <ViewListIcon onClick={() => setListOrGrid(false)}/>
                    </a>
                    <a
                        href="#">
                        <ViewModuleIcon onClick={() => setListOrGrid(true)}/>
                    </a>
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