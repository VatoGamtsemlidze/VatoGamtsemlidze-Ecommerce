import React, {useState} from 'react';
import {Box, Button, Checkbox, FormControl, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
    pTag: {
        color: "#554F4F",
        fontSize: "17px",
        textTransform: "capitalize",
        maxWidth: "90%"
    },
    pforlist: {
        color: "#4F4F4F",
        fontWeight: "bold",
        textTransform: "capitalize"
    },
    borderList: {
        border: "1px solid #d7d7d7",
        borderRadius: "4px",
        width: "100px",
        padding: "0",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        "&:hover": {
            transitionDuration: "1s",
            backgroundColor: "#d2d2d2",
        }
    },
    btn: {
        border: "none",
        width: "30px",
        backgroundColor: "transparent",
        cursor: "pointer",
        "&:active": {
            backgroundColor: "transparent",
        }
    },
    buyButton: {
        fontSize: "12px",
        backgroundColor: "#1266F1",
        width:"100px",
        fontWeight: "600",
        height:"40px"
    },
    cartButton:{
        fontSize: "11px",
        width:"150px",
        fontWeight: "600",
        height:"40px",
        color: "#4F4F4F"
    },
})

const ProductDes = ({title, description, price}) => {

    const classes = useStyles();
    const [count, setCount] = useState(1);
    const [value, setValue] = React.useState('female');
    const [data, setData] = useState({
        title: title,
        description: description,
        price: price,
    });

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <Box display="flex" flexDirection="column">
                <h3>{data.title}</h3>
                <p>SHIRTS</p>
                <a href="#" style={{color:"#1266F1"}}>
                    <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/>
                </a>
                <h4>${data.price}</h4>
                <p className={classes.pTag}>{data.description}</p>
                <Box display="flex" borderBottom={1} borderColor="#E5E5E5">
                    <Grid xs={2}>
                        <ul>
                            <li><p className={classes.pforlist} >Model</p></li>
                            <li><p className={classes.pforlist}>Color</p></li>
                            <li><p className={classes.pforlist}>Delivery</p></li>
                        </ul>
                    </Grid>
                    <Grid xs={6}>
                        <ul>
                            <li><p>Shirt 5407X</p></li>
                            <li><p>Blue</p></li>
                            <li><p>USA, Europe</p></li>
                        </ul>
                    </Grid>
                </Box>
                <Box display="flex" pt={2}>
                    <Grid xs={3}>
                        <p>Quantity</p>
                        <ul style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
                            <li className={classes.borderList}><Button className={classes.btn} onClick={() => {count>0 ? setCount(count-1) : alert("Quantity Can not be negative")}}>
                                    -
                                </Button>
                            </li>
                            <li className={classes.borderList}>{count}</li>
                            <li className={classes.borderList}><Button className={classes.btn} onClick={() => {setCount(count+1)}} >+</Button></li>
                        </ul>
                    </Grid>
                    <Box pl={5}>
                    <Grid xs={9}>
                        <p>Select Size</p>
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                <Box display="flex">
                                <FormControlLabel value="small" control={<Radio color="primary" />} label="Small" />
                                <FormControlLabel value="medium" control={<Radio color="primary"/>} label="Medium" />
                                <FormControlLabel value="large" control={<Radio color="primary"/>} label="Large" />
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    </Box>
                </Box>
                <Box display="flex">
                    <Grid xs={2}>
                        <Button className={classes.buyButton} variant="contained" color="primary">Buy Now</Button>
                    </Grid>
                    <Grid xs={10} style={{marginLeft:"10px"}}>
                        <Button className={classes.cartButton} variant="contained"><ShoppingCartIcon style={{fontSize:"15px",paddingRight:"5px",paddingBottom:"2px"}}/>Add To Cart</Button>
                    </Grid>
                </Box>
            </Box>
        </div>
    );
};

export default ProductDes;
