import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    title: {
        backgroundColor: "#FBFBFB",
        fontWeight: "500",
        color: "#4F4F4F",
        padding: "60px",
        margin: "0",
        fontSize: "27px",
        textAlign: "center"
    },
    head: {
        fontWeight: "400",
    },
    image: {
        maxWidth:"200px"
    },
    customCard: {
        border: "none",
        boxShadow: "none",
    },
    listClass: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cardImg: {
        marginTop: "-10px",
        borderRadius: "5px",
        "&:hover": {
            transitionDuration: "2s",
            transform: "scale(1.25)"
        },
    },
    price: {
        fontSize:"20px",
        color:"black",
        fontWeight:"600"
    }
})
