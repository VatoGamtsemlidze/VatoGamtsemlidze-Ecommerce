import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";

const useStyles = makeStyles({
    mainImg: {
        margin:"0",
        maxWidth: "70%",
        cursor: "pointer",
        "&:hover": {
            transitionDuration: "2s",
            transform: "scale(1.1)",
        }
    },
    img: {
        margin:"0",
        cursor: "pointer",
        "&:hover": {
            transitionDuration: "2s",
            transform: "scale(1.15)",
        }
    },
    pad: {
        paddingLeft: "7px"
    }
})

const ProductImages = () => {

    const classes = useStyles();
    const [data, setData] = useState(
        {
            title: 'Blue Jam Jeans',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg',
            price: '$45'
        },
    );

    return (
        <div>
            <Grid xs={12}>
                <img className={classes.mainImg} src={data.image}/>
            </Grid>
            <Box display="flex" >
                <Grid xs={2}>
                    <img  className={classes.img} src={data.image}/>
                </Grid>
                <Grid className={classes.pad} xs={2}>
                    <img  className={classes.img} src={data.image}/>
                </Grid>
                <Grid className={classes.pad} xs={2}>
                    <img  className={classes.img} src={data.image}/>
                </Grid>
                <Grid className={classes.pad} xs={2}>
                    <img  className={classes.img} src={data.image}/>
                </Grid>
            </Box>
        </div>
    );
};

export default ProductImages;
