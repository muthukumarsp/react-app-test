import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import AccountBox from '@material-ui/icons/AccountBox';
import DotsVertical from '../Icons/DotsVertical';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  listItem: {
    padding: '25px'
  }
});

function UserList(props) {
  const { classes } = props;
  const { userList } = props;
  return (
    <List className={classes.root}>
      {userList.map((item, index, array) => (
        <div key={index}>
          <ListItem className={classes.listItem}>
            <Avatar>
              <AccountBox />
            </Avatar>
            <ListItemText
              primary={item.firstName + ' ' + item.lastName}
              secondary={item.email}
            />
            <ListItemText secondary={item.lastLogin} />
            <ListItemText secondary={item.accountOpeningDate} />
            <ListItemSecondaryAction>
              <IconButton aria-label="dots-vertical">
                <DotsVertical />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          {index + 1 !== userList.length && (
            <li>
              <Divider variant="inset" />
            </li>
          )}
        </div>
      ))}
    </List>
  );
}

UserList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserList);
