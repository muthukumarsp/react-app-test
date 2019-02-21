import React, { Component } from 'react';
import AllUserData from '../data/AllUserData';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import SearchInputBox from '../components/SearchInputBox/SearchInputBox';
import UserList from '../components/UserList/UserList';
import Divider from '@material-ui/core/Divider';
import Fuse from 'fuse.js';

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  searchContainer: {
    width: '90vw',
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto',
    marginTop: '50px',
    boxShadow:
      '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
  }
};

class AllUsersPage extends Component {
  state = {
    searchResultUser: AllUserData
  };

  options = {
    keys: ['firstName', 'lastName']
  };
  fuse = new Fuse(AllUserData, this.options);

  handleUserInput(e) {
    console.debug(this.fuse.search(e.target.value));
    if (e.target.value.trim()) {
      let searchedList = this.fuse.search(e.target.value.trim());
      this.setState({
        searchResultUser: searchedList
      });
    } else {
      this.setState({
        searchResultUser: AllUserData
      });
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Product Name
              </Typography>
              <Button color="inherit">icon</Button>
            </Toolbar>
          </AppBar>
          <div className={classes.searchContainer}>
            <SearchInputBox data-testid="search-input"
              onChange={e => {
                this.handleUserInput(e);
              }}
            />
            <Divider />
            <UserList userList={this.state.searchResultUser} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

AllUsersPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AllUsersPage);
