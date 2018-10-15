import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
              //  label:'label-css',
             //   formControl: 'formControl-css',
            }}                
            InputProps={{
                disableUnderline:!!disableUnderline,
                className:'', 
            }}
            InputLabelProps={{
                classes:{
                    shrink:"shrink-label",
                    formControl: 'formControl-css',
                }
            }}
            {...otherProps}
          />
          );
    }
  }
  
  export default TextInput;
