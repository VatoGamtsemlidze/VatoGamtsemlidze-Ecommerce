import React, {useState} from 'react';
import Footer from "../../layouts/Footer/Footer";
import {Box, Button, Checkbox, FormControlLabel, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import {Link, Redirect} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import {useStyles} from "./SignStyle";
import {mainPage, signUpPath} from "../../routes";
import Loader from "../../Components/Loader/Loader";
import TopBar from "../../layouts/TopBar/TopBar";
import {useDispatch, useSelector} from "react-redux";
import {setLoginAction, setTokenAction, setUserAction} from "../../store/actions/userActions";
import {selectUser} from "../../store/selectors/userSelectors";

const SignIn = () => {
    
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(selectUser)

    const validate = values => {
        let errors = {};

        if(!values.email){
            errors.email = 'Please enter your email'
        }
        if(!values.password){
            errors.password = 'Enter Password'
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: false
        },
        validate,
        onSubmit: values => {

            setLoading(true);
            fetch('http://159.65.126.180/api/auth/login',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                body:JSON.stringify({
                    email: values.email,
                    password: values.password
                })
            })
                .then(res=>res.json())
                .then(json => {
                    if(json.errors){
                        alert("error occured")
                    }else{
                        localStorage.setItem('token', json.token.access_token);
                        dispatch(setUserAction(json.user))
                        dispatch(setTokenAction(json.token.access_token))
                        dispatch(setLoginAction(true));
                    }
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => setLoading(false))
        },
    })

    return (
        <>
            {user.isLoggedIn ? <Redirect to={mainPage}/> :
            <div>
            <TopBar/>
            <h2 className={classes.title}>Sign in</h2>
            <Box className={classes.main}>
                <Loader isLoading={loading}>
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
                        {formik.errors.email && formik.touched.email ? <div className={classes.error}>{formik.errors.email}</div> : null}
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
                        {formik.errors.password && formik.touched.email ? <div className={classes.error}>{formik.errors.password}</div> : null}
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
                </Loader>
            </Box>
            <Footer/>
        </div>}
        </>
    );
};

export default SignIn;