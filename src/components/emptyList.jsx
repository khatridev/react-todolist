import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        color:"gray"
    }
}))


export const EmptyList = () => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <Typography className={classes.container} variant="h6">
               Use the textbox above to start adding todo items
            </Typography>
        </React.Fragment>
    );
}