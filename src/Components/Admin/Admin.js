import React from 'react';
import { makeStyles } from "@material-ui/core/styles"

import {
    BrowserRouter as Router,
    Switch, Route, Link
} from "react-router-dom";

import {
    Drawer, List, ListItem,
    ListItemIcon, ListItemText,
    Container, Typography,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import AdminProduct from "./AdminProduct";
import AdminUsers from "./AdminUsers";
import AdminCategories from "./AdminCategories";
import {useStyles} from "./AdminStyles";

function Admin() {
    const classes = useStyles();
    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <Drawer
                    style={{ width: '220px' }}
                    variant="persistent"
                    anchor="left"
                    open={true}
                    classes={{ paper: classes.drawerPaper }}
                >
                    <List>
                        <Link to="/admin_product" className={classes.link}>
                            <ListItem button>
                                <ListItemText primary={"Product"}/>
                            </ListItem>
                        </Link>
                        <Link to="/users" className={classes.link}>
                            <ListItem button>
                                <ListItemText primary={"Users"} />
                            </ListItem>
                        </Link>
                        <Link to="/categories" className={classes.link}>
                            <ListItem button>
                                <ListItemText primary={"Categories"} />
                            </ListItem>
                        </Link>
                    </List>
                </Drawer>
                <Switch>
                    <Route exact path="/admin_product">
                        <AdminProduct/>
                    </Route>
                    <Route  path="/users">
                        <AdminUsers/>
                    </Route>
                    <Route exact path="/categories">
                        <AdminCategories/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Admin;