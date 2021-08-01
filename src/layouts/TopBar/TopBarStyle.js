import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
    },
    profilePicture: {
        height:"50px",
        width:"50px",
        marginTop: "30px"
    },
    signOut: {
        color: "red"
    },
    signIn: {
        color: "gray",
        paddingLeft:"10px",
    },
    noShadow:{
        "&:hover":{
            background:"transparent",
        }
    }
}));