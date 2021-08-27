import React, {useContext} from 'react';
import Footer from "../../layouts/Footer/Footer";
import {Box, Button, Checkbox, FormControlLabel, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import {useStyles} from "../SignIn/SignStyle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import TopBar from "../../layouts/TopBar/TopBar";

const SignUp = () => {

    const classes = useStyles();

    const validate = values => {
        let errors = {};
        if(!values.firstName){
            errors.firstName = 'Required';
        }
        if(!values.lastName){
            errors.lastName = 'Required';
        }
        if(!values.email){
            errors.email = 'Required';
        }
        if(values.password.length < 6){
            errors.password = 'Password must be at least 6 elements long';
        }
        if(values.password_confirmation != values.password){
            errors.password_confirmation = 'Passwords must match';
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password_confirmation: '',
            subscribe: false
        },
        validate,
        onSubmit: values => {
            console.log(values)
            fetch('http://159.65.126.180/api/register',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                body:JSON.stringify({
                    name: values.firstName+" "+values.lastName,
                    email: values.email,
                    password: values.password,
                    password_confirmation: values.password
                })
            })
                .then(res=>res.json())
                .then(json=> {
                    console.log(json)
                    if(!json.errors){
                        window.location.href = "/";
                    }
                })
        }
    })

    return (
        <div>
            <TopBar/>
            <h2 className={classes.title}>Sign up</h2>
            <Box className={classes.signupMain}>
                <form onSubmit={formik.handleSubmit}>
                    <Box display="flex" justifyContent="space-between">
                        <Box display="flex" flexDirection="column">
                            <TextField
                                type="text"
                                name="firstName"
                                variant="outlined"
                                label="First name"
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                                size="small"
                            />
                            {formik.errors.firstName && formik.touched.firstName ? <div className={classes.error}>{formik.errors.firstName}</div> : null}
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <TextField
                                type="text"
                                name="lastName"
                                variant="outlined"
                                label="Last name"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                                size="small"
                            />
                            {formik.errors.lastName && formik.touched.lastName ? <div className={classes.error}>{formik.errors.lastName}</div> : null}
                        </Box>
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
                            {formik.errors.email && formik.touched.email ? <div className={classes.error}>{formik.errors.email}</div> : null}
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
                            {formik.errors.password && formik.touched.password ? <div className={classes.error}>{formik.errors.password}</div> : <small className={classes.small}>At least 6 characters</small>}
                        </Box>
                        <Box pt={3}>
                            <TextField
                                type="password"
                                name="password_confirmation"
                                variant="outlined"
                                label="Confirm password"
                                onChange={formik.handleChange}
                                value={formik.values.password_confirmation}
                                size="small"
                                fullWidth
                            />
                            {formik.errors.password_confirmation && formik.touched.password_confirmation ? <div className={classes.error}>{formik.errors.password_confirmation}</div> : <small className={classes.small}>Repeat password</small>}
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
