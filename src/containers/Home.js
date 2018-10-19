import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import { Typography, withStyles, Grid, Paper, TextField, List, ListItem, Card, CardHeader, CardContent, Button } from '@material-ui/core';

const styles = theme => ({
    mainContainer: {
        marginTop: 8,
        paddingTop: 24,
        paddingLeft: 12,
        paddingRight: 12,
        marginLeft: 8,
        marginRight: 8
    },
    cardContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    card: {
        'card:not(:last-child)': {
            marginBottom: 8
        },
        marginBottom: 8
    },
});

class Home extends Component {

    render() {

        const { classes, theme } = this.props;

        return (
            <div>
                <Navbar navValue={0} />
                <Paper className={classes.mainContainer}>
                    <Typography variant="h5" align="center">Current streak: 1 day</Typography>
                    <Grid container spacing={8}>
                        <Grid item md={6} xs={12}>
                            <Typography variant="h6" align="center">Example text one</Typography>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="body1">This is an example text of a card</Typography>
                                    <Button variant="contained" color="primary">Finish</Button>
                                </CardContent>
                            </Card>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="body1">This is an example text of a card</Typography>
                                    <Button variant="contained" color="primary">Finish</Button>
                                </CardContent>
                            </Card>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="body1">This is an example text of a card</Typography>
                                    <Button variant="contained" color="primary">Finish</Button>
                                </CardContent>
                            </Card>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="body1">This is an example text of a card</Typography>
                                    <Button variant="contained" color="primary">Finish</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Typography variant="h6" align="center">Example text two</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Home);