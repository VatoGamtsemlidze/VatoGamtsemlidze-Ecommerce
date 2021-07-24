import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { useFormik } from 'formik';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Box} from "@material-ui/core";

export default function AdminModal({rows, onAdd}) {

    const [open, setOpen] = useState(false);
    const [data, setData] = useState({
        category: '',
        title: '',
        price: '',
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const formik = useFormik({
        initialValues: {
            category: '',
            title: '',
            price: '',
        },
        onSubmit: values => {
            console.log(values);
            // setData({
            //     category: values.category,
            //     title: values.title,
            //     price: values.price,
            //     id: 21
            // })
            // onAdd(data)
            fetch("https://fakestoreapi.com/products", {
                method: "POST",
                body: JSON.stringify({
                    category: values.category,
                    description: values.description,
                    title: values.title,
                    price: values.price,
                }),
            })
                .then((res) => res.json())
                .then((json) => {
                    console.log(json);
                })
                .catch((err) => console.log(err))
        },
    });
    return (
        <div>
            <Button variant="contained" style={{background: "#1266F1", color: "white"}} onClick={handleClickOpen}>
                Add Row
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
                <DialogTitle id="form-dialog-title">Add Row</DialogTitle>
                <DialogContent>
                    <form onSubmit={formik.handleSubmit}>
                        <Box>
                            <label htmlFor="category">Category</label>
                            <input
                                id="category"
                                name="category"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.category}
                            />
                        </Box>
                        <Box pt={1}>
                            <label htmlFor="title">Title</label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.title}
                            />
                        </Box>
                        <Box pt={1}>
                            <label htmlFor="price">Price</label>
                            <input
                                id="price"
                                name="price"
                                type="number"
                                onChange={formik.handleChange}
                                value={formik.values.price}
                            />
                        </Box>
                        <Box pt={1}>
                            <Button onClick={handleClose} type="submit" color="primary" variant="contained">
                                Add
                            </Button>
                        </Box>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
