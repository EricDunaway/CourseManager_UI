import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: { minWidth: 200 },
    title: {fontSize: '1.4rem'}
})

export default ({ course }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography color="textSecondary" className={classes.title} gutterBottom>
                    {`${course.title}`}
                </Typography>
                <Typography>
                    {`Capacity: ${course.capacity}`}
                </Typography>
            </CardContent>
        </Card>
    )
}