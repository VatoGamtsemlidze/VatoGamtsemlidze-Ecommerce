import React from 'react';
import './SocialAd.css'
import {Container} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const SocialAd = () => {
    return (
        <div className="social-main">
            <Container maxWidth="lg" id="social-cont">
                <p style={{color: "white", fontWeight:"700", fontSize: "15px", textTransform: "capitalize"}}>Get connected with us on social networks!</p>
                <ul className="social-icons">
                    <li><a href="#"><FacebookIcon/></a></li>
                    <li><a href="#"><TwitterIcon /></a></li>
                    <li><a href="#"><LinkedInIcon/></a></li>
                    <li><a href="#"><InstagramIcon/></a></li>
                </ul>
            </Container>
        </div>
    );
};

export default SocialAd;