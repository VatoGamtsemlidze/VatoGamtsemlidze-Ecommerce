import React from 'react';
import {Box, Button, Grid, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles({
    title: {
        color:"#4F4F4F",
        textTransform: "capitalize",
    },
    username: {
        color: "#4F4F4F",
    },
    input: {
        height: "200px",
    },
    submitBtn: {
        backgroundColor: "#186AF1",
        fontSize: "12px",
        color: "white",
        "&:hover": {
            transitionDuration: "1s",
            backgroundColor: "#377cee"
        }
    }
})

const ReviewTab = () => {

    const classes = useStyles();

    return (
        <div>
            <Box>
                <h3 className={classes.title}>1 review for Fantasy T-shirt</h3>
                <Box display="flex" justifyContent="space-between" borderBottom={1} pb={3} borderColor="#cbcbcb">
                    <Box display="flex">
                        <img style={{margin:"0"}} src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg"/>
                        <Box pl={3}>
                            <p style={{margin:"0", fontSize:"15px", textTransform:"capitalize"}}><strong className={classes.username}>Marthasteward</strong> – January 28, 2020</p>
                            <p style={{textTransform:"capitalize", fontSize:"15px", marginTop:"10px"}}>Nice one, love it!</p>
                        </Box>
                    </Box>
                    <Grid>
                        <a href="#" style={{color:"#1266F1"}}>
                            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/>
                        </a>
                    </Grid>
                </Box>
                <Box>
                    <h3 className={classes.title}>Add a Review</h3>
                    <p style={{textTransform:"capitalize", fontSize: "14px"}}>Your email address will not be published.</p>
                    <a href="#" style={{color:"#1266F1"}}>
                        <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/>
                    </a>
                    <Box pt={2}>
                        <TextField id="standard-basic" fullWidth style={{textTransform:"capitalize"}} label="Your Review" variant="outlined" multiline rows={4}/>
                    </Box>
                    <Box pt={2}>
                        <TextField id="standard-basic" fullWidth style={{textTransform:"capitalize"}} label="Name" size="small" variant="outlined"/>
                    </Box>
                    <Box pt={2}>
                        <TextField id="standard-basic" fullWidth style={{textTransform:"capitalize"}} label="Email" size="small" variant="outlined"/>
                    </Box>
                    <Box display="flex" pt={2}>
                        <Grid xs={12}> </Grid>
                        <Grid xs={2}><Button type="submit" variant="contained" className={classes.submitBtn}>Add A Review</Button></Grid>
                    </Box>
                    </Box>
            </Box>
        </div>
    );
};

export default ReviewTab;
