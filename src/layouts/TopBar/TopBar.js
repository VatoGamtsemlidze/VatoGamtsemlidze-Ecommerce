import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Link, useLocation} from "react-router-dom";
import {adminPath, signInPath} from "../../routes";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    customIcon: {
        "&:hover": {
            boxShadow: "none",
        }
    }
}));

export default function TopBar() {
    const classes = useStyles();
    const [setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [scrolled, setScrolled] = useState(0);
    const path = useLocation();
    const [edited, setEdited] = useState(false);
    const [adminStyle, setAdminStyle] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            setScrolled(window.pageYOffset);
        }
        if(path.pathname != "/"){
            console.log('in sign in')
            setEdited(true);
        }
        if(path.pathname == '/admin'){
            setAdminStyle(true)
        }
    }, []);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton  aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position={edited ? "relative" : "fixed"} className={classes.appBar} style={{background: scrolled>0 ? "white" : "transparent", boxShadow: "none", backgroundColor: adminStyle ? "#b8b8b8" : "transparent"}}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"

                    >
                        <MenuIcon style={{color: scrolled || edited ? "gray" : "white"}}/>
                    </IconButton>
                    {edited ? <Link to="/">
                        <Typography className={classes.title} variant="h6" noWrap style={{color: scrolled || edited ? "gray" : "white"}}>
                            Material-UI
                        </Typography>
                    </Link>
                        :
                        <Typography className={classes.title} variant="h6" noWrap style={{color: scrolled || edited ? "gray" : "white"}}>
                        Material-UI
                        </Typography>
                    }
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon style={{color: scrolled || edited ? "gray" : "white"}}/>
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon style={{color: scrolled || edited ? "gray" : "white"}}/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <p><a href="#" style={{color: scrolled || edited ? "gray" : "white"}}>Shop</a></p>
                        </IconButton>
                        <IconButton>
                            <p><a style={{color: scrolled || edited ? "gray" : "white"}}>Contact</a></p>
                        </IconButton>
                        <Link to={signInPath}><IconButton>
                            <p><a style={{color: scrolled || edited ? "gray" : "white"}}>Sign In</a></p>
                        </IconButton></Link>
                        <Link to={adminPath}><IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle style={{color: scrolled || edited ? "gray" : "white", marginTop:"7px"}}/>
                        </IconButton></Link>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon style={{color: scrolled || edited ? "gray" : "white", marginTop:"7px"}}/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}
