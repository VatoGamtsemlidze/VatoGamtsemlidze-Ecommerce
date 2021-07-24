import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableRow} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    iTag: {
        color: "#4F4F55",
        textTransform: "lowercase",
        borderLeft: "1px solid #d0d0d0",
        paddingLeft: "15px",
    },
    aTag: {
        color: "#4F4F4F",
        fontWeight: "bold",
        textTransform: "capitalize",
    },
    title: {
        color:"#4F4F4F",
        textTransform: "capitalize",
    },
})

const InfoTab = () => {

    const classes = useStyles();

    return (
        <div>
            <TableContainer>
                <h3 className={classes.title}>Additional Information</h3>

                <Table>
                    <TableBody style={{borderTop:"1px solid #eeeeee"}}>
                        <TableRow scope="row">
                            <TableCell width="100px"><a className={classes.aTag}>Weight</a></TableCell>
                            <TableCell><i className={classes.iTag}>0.3 Kg</i></TableCell>
                        </TableRow>
                        <TableRow scope="row" style={{backgroundColor:"#F2F2F2"}}>
                            <TableCell width="80px"><a className={classes.aTag}>Dimensions</a></TableCell>
                            <TableCell><i className={classes.iTag}>50 x 60 Kg</i></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default InfoTab;
