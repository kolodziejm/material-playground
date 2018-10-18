import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import { Typography, withStyles, Grid, Paper, TextField, List, ListItem } from '@material-ui/core';

const styles = theme => ({
    mainContainer: {
        marginTop: 8,
        paddingTop: 24,
        paddingLeft: 12,
        paddingRight: 12,
        marginLeft: 8,
        marginRight: 8
    },
    item: {
        boxShadow: '0 4px 8px rgba(0,0,0,.15)'
    }
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
                            <List>
                                <ListItem className={classes.item}><Typography variant="body1">Do some work</Typography></ListItem>
                            </List>
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