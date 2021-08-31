import React, {useEffect, useState} from 'react';
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
import {adminPath, cartPath, profilePath, signInPath} from "../../routes";
import {Box} from "@material-ui/core";
import {useStyles} from "./TopBarStyle";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useDispatch, useSelector} from "react-redux";
import {setLoginAction} from "../../store/user/userActions";
import {selectUser} from "../../store/user/userSelectors";

export default function TopBar() {

    const classes = useStyles();
    const [anchorEl,setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [scrolled, setScrolled] = useState(0);
    const path = useLocation();
    const [edited, setEdited] = useState(false);
    const [adminStyle, setAdminStyle] = useState(false);
    const dispatch = useDispatch()
    const user = useSelector(selectUser);

    useEffect(() => {
        window.onscroll = () => {
            setScrolled(window.pageYOffset);
        }
        if(path.pathname != "/"){
            setEdited(true);
        }
        if(path.pathname == '/admin'){
            setAdminStyle(true)
        }
    }, []);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

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
            {user.isLoggedIn ?
                <>
                <Link to={profilePath} style={{color: "black"}}>
                    <MenuItem onClick={handleProfileMenuOpen}>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                        <p>Profile</p>
                    </MenuItem></Link>
                    <MenuItem style={{height:"35px"}} onClick={() => dispatch(setLoginAction(false))}>
                        <IconButton>
                            <ExitToAppIcon/>
                            <Box pl={1}>
                            <p>Sign out</p>
                            </Box>
                        </IconButton>
                    </MenuItem>
                </>
                :
                <Link to={signInPath} style={{color: "black"}}><MenuItem onClick={handleProfileMenuOpen}>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <p>Sign in</p>
                </MenuItem></Link>
            }
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
                            <Link to={cartPath}><a href="#" style={{color: scrolled || edited ? "gray" : "white"}}><ShoppingCartIcon /></a></Link>
                        </IconButton>
                        <IconButton>
                            <p><a style={{color: scrolled || edited ? "gray" : "white"}}>Contact</a></p>
                        </IconButton>
                        {user.isLoggedIn ?
                            <Box pt={2.5}>
                                <AccountCircle aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{cursor:"pointer",color: scrolled || edited ? "gray" : "white"}}>
                                    Open Menu
                                </AccountCircle>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <Link to={profilePath} style={{color: "black", textTransform:"capitalize"}}><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
                                    <Link to={adminPath} style={{color:"black",textTransform:"capitalize"}}><MenuItem onClick={handleClose}>My account</MenuItem></Link>
                                    {user.isLoggedIn ?
                                        <MenuItem style={{height:"35px"}} onClick={() => dispatch(setLoginAction(false))}>
                                            <IconButton className={classes.noShadow}>
                                                <a style={{color: "black", textTransform:"capitalize", fontSize:"15px"}}>Sign out</a>
                                            </IconButton>
                                        </MenuItem>
                                        :
                                        null
                                    }
                                </Menu>
                            </Box>
                            :
                            <Link to={signInPath}><IconButton>
                                <p><a style={{color: scrolled || edited ? "gray" : "white"}}>Sign In</a></p>
                            </IconButton></Link>
                        }


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
