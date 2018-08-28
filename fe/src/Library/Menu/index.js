import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function TextButtons(props) {
  const { classes, menuData, history } = props;
  return (
    <div>
      {menuData.map( (each, idx) => 
        <Button key={idx} color="primary" className={classes.button} onClick={e => history.push(each.link)} >
          {each.label}
        </Button>)}      
    </div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButtons);