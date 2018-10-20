import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import { Typography, withStyles, Grid, Paper, TextField, List, ListItem, Card, CardHeader, CardContent, Button } from '@material-ui/core';

const styles = {

};

class About extends Component {
    render() {
        return (
            <div>
                <Navbar navValue={2} />
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
            </div>
        )
    }
}
export default withStyles(styles)(About);
