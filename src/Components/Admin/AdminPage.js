import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";
import {useStyles} from "./AdminPageStyles";
import EditedBar from "../TopBar/EditedBar";
import HomeIcon from '@material-ui/icons/Home';
import {Box, Button} from "@material-ui/core";
import StorefrontIcon from '@material-ui/icons/Storefront';
import {singlePagePath} from "../Routes/Routes";

export default function PermanentDrawerLeft() {

    const classes = useStyles();

    return (
        <div>
        <div className={classes.root}>
            <EditedBar/>
            <CssBaseline />
            <AppBar  className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" noWrap>
                        Admin Panel
                    </Typography>
                    <Box>
                        <Button component={Link} to="/"><HomeIcon className={classes.homebutton}/></Button>
                        <Button component={Link} to={singlePagePath}><StorefrontIcon className={classes.homebutton}/></Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider />
                <List>
                        <ListItem button key="Product" component={Link} to="/admin_product">
                            <ListItemText primary="Product" />
                        </ListItem>
                        <ListItem button key="Users">
                            <ListItemText primary="Users" />
                        </ListItem>
                        <ListItem button key="Categories">
                            <ListItemText primary="Categories" />
                        </ListItem>
                </List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
            </main>
        </div>
        </div>
    );
}