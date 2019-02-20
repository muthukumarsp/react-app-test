import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
};

function SearchInputBox(props) {
  const { classes, ...otherProps } = props;

  return (
    <div className={classes.root} {...otherProps} elevation={1}>
      <IconButton className={classes.iconButton} aria-label="Menu">
        <SearchIcon />
      </IconButton>
      <InputBase className={classes.input} placeholder="search" />
    </div>
  );
}

SearchInputBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchInputBox);
