import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Box} from "@material-ui/core";
import Loader from "../components/Loader/Loader";
import AdminModal from './AdminModal';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        paddingLeft: "50px"
    },
    tableColumnName: {
        fontWeight: "bold",
        fontSize:"15px",
    },
    tableCont: {
        paddingLeft: "80px"
    },
});

export default function AdminProduct(){

    const [loading, setLoading] = useState(false);
    const [rows, setRows] = useState([
        {
            id: '',
            category: '',
            title: '',
            price: '',
        }
    ]);
    const classes = useStyles();

    function getProducts(){
        setLoading(true);
        fetch('https://fakestoreapi.com/products')
            .then(resp => resp.json())
            .then(dt => {
                console.log(dt);
                setRows(dt);
            })
            .catch(error => {
                console.log("Error: "+ error);
            })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        getProducts()
    }, []);


    return (
        <Box pt={5}>
            <Loader isLoading={loading}>
                <TableContainer component={Paper} className={classes.tableCont}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableColumnName}>ID</TableCell>
                                <TableCell align="right" className={classes.tableColumnName}>Category</TableCell>
                                <TableCell align="right" className={classes.tableColumnName}>Title</TableCell>
                                <TableCell align="right" className={classes.tableColumnName}>Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="right">{row.category}</TableCell>
                                    <TableCell align="right">{row.title}</TableCell>
                                    <TableCell align="right">{row.price}$</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <AdminModal/>
            </Loader>
        </Box>
    );
}
