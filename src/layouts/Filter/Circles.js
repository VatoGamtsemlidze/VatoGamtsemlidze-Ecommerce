import React from 'react';
import { Box } from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    box: {
        cursor: "pointer",
        "&:hover": {
            transitionDuration: "2s",
            backgroundColor: "white",
        },
        "&:active": {
            transitionDuration: "0.1s",
            backgroundColor: "gray"
        }
    }
})

const Circle = ({bgcolor}) => {

    const classes = useStyles();

    return (
        <Box className={classes.box} width='30px' height='30px' borderRadius='50%' bgcolor={bgcolor} border='1px solid #D0D0D0' ml='15px' mt='15px'> </Box>
    );
};
export default Circle;