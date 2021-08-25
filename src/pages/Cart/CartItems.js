import React, {useContext} from 'react';
import {useStyles} from "./CartStyle";
import {Box, Grid} from "@material-ui/core";
import {UserContext} from "../../Contexts/UserContextProvider";
import {Link} from "react-router-dom";
import {singlePagePath} from "../../routes";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

const CartItems = () => {

    const userData = useContext(UserContext);

    const classes = useStyles();
    console.log(userData);

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
                                        <Link to={singlePagePath.replace(':id', el.id)}><Card className={classes.customCard}>
                                            <CardActionArea>
                                                <CardContent className={classes.listClass}>
                                                    <img className={classes.cardImg} style={{maxWidth:"200px"}} src={`${el.img}`}/>
                                                    <Box pl={3}>
                                                        <Box display="flex" flexDirection="column">
                                                            <h2 style={{maxWidth: "500px", color:"black",fontWeight:"500"}}>{el.title}</h2>
                                                            <p style={{textTransform:"lowercase"}}>{el.desc}</p>
                                                        </Box>
                                                        <Box pt={10}>
                                                            <p className={classes.price}>${el.price}</p>
                                                        </Box>
                                                        <Box pt={3}>
                                                            <a style={{display:"block"}} className={classes.description}>{el.description}</a>
                                                        </Box>
                                                    </Box>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                        </Link>
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
