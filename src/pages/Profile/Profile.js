import React from 'react';
import TopBar from "../../layouts/TopBar/TopBar";
import Footer from "../../layouts/Footer/Footer";
import {Box, Button, Grid} from "@material-ui/core";
import {useStyles} from "./ProfileStyle";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import {selectUser} from "../../store/selectors/userSelectors";
import {useSelector} from "react-redux";


const Profile = () => {

    const classes = useStyles();
    const user = useSelector(selectUser);
    let name = user.user.name;
    let email = user.user.email;

    return (
        <>
                <div>
                    <TopBar/>
                    <Box  display="flex" justifyContent="center" pt={5}>
                        <Box className={classes.picture}>
                            <img className={classes.pic} src="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg?w=250"/>
                        </Box>
                        <Box display="flex" flexDirection="column" pl={15}>
                            <h4 className={classes.name}>{name}</h4>
                            <p><a style={{color:"#1266F1"}}>Product Designer</a></p>
                            <Box>
                                <p><a>Rankings</a></p>
                                <a href="#" style={{color:"#1266F1"}}>
                                    <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/>
                                </a>
                            </Box>
                            <p style={{width:"250px", color:"black",textTransform:"capitalize", fontSize:"16px"}}>Really cool facebook bio with all of a future structures and some text</p>
                            <Box display="flex">
                                <p style={{fontSize:"16px", textTransform:"Capitalize", color:"black"}}>Email: <i style={{textTransform:"lowercase"}}>{email}</i></p>
                                <Box pl={2} display="flex" alignItems="center">
                                    <Button onClick={()=>{console.log("soon")}} style={{height:"30px", fontSize:"12px", backgroundColor:"#1266F1"}} variant="contained" color="secondary" >Edit</Button>
                                </Box>
                            </Box>
                            <Box>
                                <Button onClick={()=>{console.log("soon")}} variant="contained" style={{backgroundColor:"#1266F1"}} color="primary">Change info</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Footer/>
                </div>
        </>
    );
};

export default Profile;
