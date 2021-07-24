import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    drawerPaper: { width: 'inherit' },
    link: {
        textTransform: "capitalize",
        textDecoration: 'none',
        color: theme.palette.text.primary,
    }
}))