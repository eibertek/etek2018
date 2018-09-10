import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
  
class TextInput extends Component {

    state = {
        value: '',
    }

    handleChange = ({ target: { value} }) => {
        this.setState({ value });
    }

    render() {
        const { id, label, className, value, onChange, disableUnderline, margin, ...otherProps } = this.props;
          return (
            <TextField
            id={id}
            label={label}
            className={className}
            value={value}
            onChange={onChange || this.handleChange}
            margin={margin}
            classes={{
                root:'root-css',
            }}                
            InputProps={{
                disableUnderline:!!disableUnderline,
                className:'', 
            }}
            InputLabelProps={{
                classes:{
                    shrink:"shrink-label"
                }
            }}
            {...otherProps}
          />
          );
    }
  }
  
  export default TextInput;
