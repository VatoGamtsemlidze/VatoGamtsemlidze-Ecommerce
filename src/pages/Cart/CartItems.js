import React, {useContext} from 'react';
import {useStyles} from "./CartStyle";
import {Box, Button, Grid} from "@material-ui/core";
import {UserContext} from "../../Contexts/UserContextProvider";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import DeleteIcon from '@material-ui/icons/Delete';

const CartItems = () => {

    const userData = useContext(UserContext);
    const classes = useStyles();

    let deleteCartItem = (id) => {
        let cart = userData.data.cartProduct;
        for(let i = 0; i<cart.length;i++){
            if(id === cart[i].id){
                cart.splice(id, 1);
            }
        }
        userData.setData({
            ...userData.data,
            cartProduct: [
                ...userData.data.cartProduct,
                cart
            ]
        })
    }

    return (
        <Box boxShadow="1px 1px 5px #d5d5d5" borderRadius="2px">
            <Box>
                <h2 className={classes.head}>Cart ({userData.data.cartProduct.length} items)</h2>
                <Box pt={6}>
                    <ul>
                        {userData.data.cartProduct.map((el) => {
                            return(
                                <li style={{paddingTop:"7px"}}>
                                    <Grid xs={12}>
                                        <Card className={classes.customCard}>
                                            <CardActionArea>
                                                <CardContent className={classes.listClass}>
                                                    <img className={classes.cardImg} style={{maxWidth:"200px"}} src={`${el.img}`}/>
                                                    <Box pl={3}>
                                                        <Box display="flex" flexDirection="column">
                                                            <h2 style={{maxWidth: "500px", color:"black",fontWeight:"500"}}>{el.title}</h2>
                                                        </Box>
                                                        <Box pt={10}>
                                                            <p className={classes.price}>${el.price}</p>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <Button onClick={() => deleteCartItem(el.id)} style={{color:"#2c5ec1"}}><DeleteIcon/></Button>
                                                    </Box>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                </li>
                            )
                        })}
                    </ul>
                </Box>
            </Box>
        </Box>
    );
};

export default CartItems;
