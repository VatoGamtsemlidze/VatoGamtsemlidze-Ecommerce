import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    gridClass: {
        display: "flex",
        flexDirection: "column",
    },
    listClass: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    customCard: {
        border: "none",
        boxShadow: "none",
    },
    cardImg: {
        marginTop: "-10px",
        borderRadius: "5px",
        "&:hover": {
            transitionDuration: "2s",
            transform: "scale(1.25)"
        },
    },
    description: {
        fontSize: "13px",
        color: "gray",
    }
})