import React from 'react';
import EditedBar from '../../layouts/TopBar/EditedBar';
import Footer from "../../layouts/Footer/Footer";
import {Box, Button, Checkbox, FormControlLabel, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import {useStyles} from "./SignInStyle";
import {signUpPath} from "../../Components/Routes/Routes";

const SignIn = () => {

    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: false
        },
        onSubmit: values => {
            fetch('http://159.65.126.180/api/auth/login',{
                method:'POST',
                body:JSON.stringify({
                    email: values.email,
                    password: values.password
                })
            })
                .then(res=>res.json())
                .then(json=>console.log(json))
        },
    })

    return (
        <div>
            <EditedBar/>
            <h2 className={classes.title}>Sign in</h2>
            <Box className={classes.main}>
                <form onSubmit={formik.handleSubmit}>
                    <Box pt={2}>
                        <TextField
                            type="email"
                            name="email"
                            variant="outlined"
                            label="Your email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            fullWidth
                        />
                    </Box>
                    <Box pt={2}>
                        <TextField
                            type="password"
                            name="password"
                            variant="outlined"
                            label="Your password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            fullWidth
                        />
                    </Box>
                    <Box display="flex" justifyContent="space-between" pt={1}>
                        <FormControlLabel
                            control={<Checkbox value={formik.values.remember} style={{color: "#1266F1"}} onChange={formik.handleChange} name="remember"/>}
                            label={<span className={classes.checkbox}>Remember me</span>}
                            className={classes.checkbox}
                        />
                        <a href="#" className={classes.aTag} >Forgot Password?</a>
                    </Box>
                    <Box pt={2} style={{display:"flex", justifyContent: "center"}}>
                        <Button variant="contained" className={classes.submitBtn} type="submit">Sign In</Button>
                    </Box>
                    <Box display="flex" alignItems="center" flexDirection="column">
                        <Box display="flex" justifyContent="center" pt={3}>
                            <a className={classes.customAtag} >Not a member? <Link to={signUpPath}><a className={classes.aTag}>Register</a></Link></a>
                        </Box>
                        <Box pt={2}>
                            <a className={classes.customAtag}>or sign in with:</a>
                        </Box>
                        <Box display="flex" justifyContent="space-around" pt={2}>
                            <FontAwesomeIcon icon={faFacebook} color="#3B5998" className={classes.icons}/>
                            <FontAwesomeIcon icon={faTwitter} color="#55ACEE" className={classes.icons}/>
                            <FontAwesomeIcon icon={faLinkedin} color="#0082CA"className={classes.icons}/>
                            <FontAwesomeIcon icon={faGithub} color="#333333" className={classes.icons}/>

                        </Box>
                    </Box>
                </form>
            </Box>
            <Footer/>
        </div>
    );
};

export default SignIn;
