import React, { Component } from 'react'
import Paper from '../../library/Paper';
import { Text, setLanguage } from 'react-internationalization';
import Typography from '@material-ui/core/Typography';

export default props => {
    const { children, data } = props;
    setLanguage('es');
    return (
      <Paper>
       <Typography variant="headline" component="h2">
       <Text
          id="common.welcome"
          values={{ name:'Mariano', count: 20 }}
        />       
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
