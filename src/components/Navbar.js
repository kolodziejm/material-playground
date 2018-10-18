import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import { ListItem, Button } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { Link } from 'react-router-dom';

const drawerWidth = 200;

// console.log(theme!!!)

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 64,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        zIndex: theme.zIndex.drawer + 1,
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        marginRight: 20,
        marginLeft: -10
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#651fff',
        color: '#fff',
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    list: {
        fontFamily: 'Roboto'
    },
    logout: {
        [theme.breakpoints.down('sm')]: {
            marginLeft: 'auto'
        }
    },
    drawer: {
        backgroundColor: 'secondary',
        color: 'inherit'
    },
    tabs: {
        marginLeft: 'auto',
    },
    tab: {
        height: 64,
        textAlign: 'center'
    },
    mobileTitle: {
        marginTop: -40,
        marginBottom: 20
    }
});

class ResponsiveDrawer extends React.Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes, theme } = this.props;

        const drawer = (
            <div className={classes.drawer}>
                <div className={classes.toolbar} />
                <List className={classes.list}>
                    <Typography variant="h6" color="inherit" align="center" gutterBottom className={classes.mobileTitle}>Habit Creator</Typography>
                    <ListItem button selected={this.props.navValue === 0} component={Link} to="/">Home</ListItem>
                    <Divider />
                    <ListItem button selected={this.props.navValue === 1} component={Link} to="/stats">Stats</ListItem>
                    <Divider />
                    <ListItem button selected={this.props.navValue === 2} component={Link} to="/about">About</ListItem>
                    <Divider />
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.navIconHide}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Habit Creator
                        </Typography>
                        <Hidden smDown>
                            <Tabs value={this.props.navValue} className={classes.tabs}>
                                <Tab label="Home" className={classes.tab} component={Link} to="/" />
                                <Tab label="Stats" className={classes.tab} component={Link} to="/stats" />
                                <Tab label="About" className={classes.tab} component={Link} to="/about" />
                            </Tabs>
                        </Hidden>
                        <Button color="inherit" className={classes.logout}>Logout</Button>
                    </Toolbar>
                </AppBar>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </div>
        );
    }
}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);