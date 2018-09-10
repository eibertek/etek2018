import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


export default props => {
    const { children, ...otherProps} = props;
    return <Button
        classes={{
            root:'root-css',
            label:'label-css',
            outlined: 'outlined-css'
        }}
        {...otherProps}
        >{children}</Button>;
};