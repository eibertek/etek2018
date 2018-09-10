import React, { Component } from 'react'
import Paper from '../../library/Paper';
import Typography from '@material-ui/core/Typography';

export default props => {
    const { children, data } = props;
    return (
      <Paper>
       <Typography variant="headline" component="h2">
          {data && data.title}
        </Typography>
        <Typography variant="subheading" component="h3">
          {data && data.subtitle}
        </Typography>        
        <Typography component="div">
          {data && data.body}
        </Typography>       
      </Paper>
    )
  };
