import React from 'react'
import Paper from '../../library/Paper';
import Typography from '@material-ui/core/Typography';
import Portal from '../../library/Portal';

const renderComponent = componentName => {
  switch(componentName) {
    case COMPONENT_PORTAL:
      return props => <Portal {...props} />;
    default:
      return props => <div></div>;  
  }
};

export default props => {
    const { data, ...otherProps } = props;
    if(data.component) {
      const Component = renderComponent(data.component); 
      return <Component {...otherProps} />;
    }    
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

  export const COMPONENT_PORTAL = 'portal';