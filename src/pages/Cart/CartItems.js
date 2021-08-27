import React from 'react';
import {useStyles} from "./CartStyle";
import {Box, Button, Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import DeleteIcon from '@material-ui/icons/Delete';

const CartItems = () => {

    const classes = useStyles();


    return (
        <Box boxShadow="1px 1px 5px #d5d5d5" borderRadius="2px">
            <Box>
                <h2 className={classes.head}>Cart (1 items)</h2>
                <Box pt={6}>
                    <ul>
                                <li style={{paddingTop:"7px"}}>
                                    <Grid xs={12}>
                                        <Card className={classes.customCard}>
                                            <CardActionArea>
                                                <CardContent className={classes.listClass}>
                                                    <Box pl={3}>
                                                        <Box display="flex" flexDirection="column">
                                                            <h2 style={{maxWidth: "500px", color:"black",fontWeight:"500"}}>title</h2>
                                                        </Box>
                                                        <Box pt={10}>
                                                            <p className={classes.price}>price</p>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <Button style={{color:"#2c5ec1"}}><DeleteIcon/></Button>
                                                    </Box>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                </li>
                    </ul>
                </Box>
            </Box>
        </Box>
    );
};

export default CartItems;