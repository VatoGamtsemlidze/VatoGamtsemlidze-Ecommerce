import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles({
    title: {
        color:"#4F4F4F",
        textTransform: "capitalize",
    },
    text: {
        textTransform: "capitalize",
        fontWeight: "100",
        fontSize: "16px"
    }
})

const DescTab = () => {

    const classes = useStyles();

    return (
        <div>
            <Box borderBottom={1} borderColor="#cbcbcb">
                <h3 className={classes.title}>Product Description</h3>
                <p>Shirts</p>
                <a href="#" style={{color:"#1266F1"}}>
                    <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/>
                </a>
                <h5 className={classes.title} >12.99 $</h5>
                <p className={classes.text}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente <illo className=""></illo>
                    Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam.
                    Distinctio, officia quis dolore quos sapiente tempore alias.</p>
            </Box>
        </div>
    );
};

export default DescTab;
