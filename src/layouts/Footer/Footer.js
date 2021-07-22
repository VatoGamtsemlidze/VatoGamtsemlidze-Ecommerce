import React from 'react';
import {Container, Grid} from "@material-ui/core";
import MapIcon from '@material-ui/icons/Map';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import './Footer.css'
import SocialAd from "../../Components/SocialAd/SocialAd";

const Footer = () => {
    return (
        <div className="footer-main">
            <SocialAd/>
            <Container maxWidth="lg" style={{display: "flex"}}>
                <Grid xs={3}>
                    <h5>About Me</h5>
                    <hr style={{width: "50%",borderStyle:"inset", textAlign: "left", marginLeft: "0", backgroundColor: "#1264EB",marginTop: "-15px"}} />
                    <p style={{maxWidth: "180px"}}>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </Grid>
                <Grid xs={3}>
                    <h5>Products</h5>
                    <hr style={{width: "50%",borderStyle:"inset", textAlign: "left", marginLeft: "0", backgroundColor: "#1264EB",marginTop: "-15px"}} />
                    <ul>
                        <li><a href="#">MDBootstrap</a></li>
                        <li><a href="#">MDWordPress</a></li>
                        <li><a href="#">BrandFlow</a></li>
                        <li><a href="#">Bootstrap Angular</a></li>
                    </ul>
                </Grid>
                <Grid xs={3}>
                    <h5>Useful links</h5>
                    <hr style={{width: "50%",borderStyle:"inset", textAlign: "left", marginLeft: "0", backgroundColor: "#1264EB",marginTop: "-15px"}} />
                    <ul>
                        <li><a href="#">Your Account</a></li>
                        <li><a href="#">Become an Affiliate</a></li>
                        <li><a href="#">Shipping Rates</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </Grid>
                <Grid xs={3}>
                    <h5>Contacts</h5>
                    <hr style={{width: "50%",borderStyle:"inset", textAlign: "left", marginLeft: "0", backgroundColor: "#1264EB",marginTop: "-15px"}} />
                    <ul>
                        <li><a href="#"><MapIcon/><p> New York, Avenue Street 10</p></a></li>
                        <li><a href="#"><PhoneIcon/><p> 042 876 836 908</p></a></li>
                        <li><a href="#"><MailOutlineIcon/><p> company@example.com</p></a></li>
                        <li><a href="#"><QueryBuilderIcon/><p> Monday - Friday: 10-17</p></a></li>
                    </ul>
                </Grid>
            </Container>
        </div>
    );
};

export default Footer;