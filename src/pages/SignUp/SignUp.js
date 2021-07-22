import React from 'react';
import Footer from "../../layouts/Footer/Footer";
import EditedBar from "../../layouts/TopBar/EditedBar"
import {Box, Button, Checkbox, FormControlLabel, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import {useStyles} from "./SignUpStyle";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

const SignUp = () => {

    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phoneNumber: '',
            subscribe: false
        },
        onSubmit: values => {
            console.log(values)
            fetch('http://159.65.126.180/api/register',{
                method:'POST',
                body:JSON.stringify({
                    name: values.name,
                    email: values.email,
                    password: values.password,
                    password_confirmation: values.password
                })
            })
                .then(res=>res.json())
                .then(json=>console.log(json))
        }
    })

    return (
        <div>
            <EditedBar/>
            <h2 className={classes.title}>Sign up</h2>
            <Box className={classes.main}>
                <form onSubmit={formik.handleSubmit}>
                    <Box display="flex" justifyContent="space-between">
                        <TextField
                            type="text"
                            name="firstName"
                            variant="outlined"
                            label="First name"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            size="small"
                        />
                        <TextField
                            type="text"
                            name="lastName"
                            variant="outlined"
                            label="Last name"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                            size="small"
                        />
                    </Box>
                    <Box pt={3}>
                        <Box>
                            <TextField
                                type="email"
                                name="email"
                                variant="outlined"
                                label="Your email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                size="small"
                                fullWidth
                            />
                        </Box>
                        <Box pt={3}>
                            <TextField
                                type="password"
                                name="password"
                                variant="outlined"
                                label="Your password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                size="small"
                                fullWidth
                            />
                            <small className={classes.small}>At least 8 characters and 1 digit</small>
                        </Box>
                        <Box pt={3}>
                            <TextField
                                type="number"
                                name="phoneNumber"
                                variant="outlined"
                                label="Phone number"
                                onChange={formik.handleChange}
                                value={formik.values.phoneNumber}
                                size="small"
                                fullWidth
                            />
                            <small className={classes.small}>Optional - for two step authentication</small>
                        </Box>
                    </Box>
                    <Box pt={3} display="flex" justifyContent="center">
                        <FormControlLabel
                            control={<Checkbox value={formik.values.subscribe} style={{color: "#1266F1"}} onChange={formik.handleChange} name="subscribe"/>}
                            label={<span className={classes.checkbox}>Subscribe to our newsletter</span>}
                            className={classes.checkbox}
                        />
                    </Box>
                    <Box pt={2} style={{display:"flex", justifyContent: "center"}}>
                        <Button variant="contained" className={classes.submitBtn} type="submit">Sign up</Button>
                    </Box>
                    <Box display="flex" alignItems="center" flexDirection="column" pb={3} borderBottom="1px solid #E5E5E5">
                        <Box pt={2}>
                            <a className={classes.customAtag}>or sign up with:</a>
                        </Box>
                        <Box display="flex" justifyContent="space-around" pt={2}>
                            <FontAwesomeIcon icon={faFacebook} color="#3B5998" className={classes.icons}/>
                            <FontAwesomeIcon icon={faTwitter} color="#55ACEE" className={classes.icons}/>
                            <FontAwesomeIcon icon={faLinkedin} color="#0082CA"className={classes.icons}/>
                            <FontAwesomeIcon icon={faGithub} color="#333333" className={classes.icons}/>
                        </Box>
                    </Box>
                    <Box pt={2} display="flex" justifyContent="center">
                        <a className={classes.customAtag}>By clicking <i>Sign up</i> you agree to our <a href="#" className={classes.aTag}>terms of service</a></a>
                    </Box>
                </form>
            </Box>
            <Footer/>
        </div>
    );
};

export default SignUp;
