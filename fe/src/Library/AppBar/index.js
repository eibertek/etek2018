import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import KeyIcon from '@material-ui/icons/VpnKey';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden';
import { withRouter } from 'react-router-dom';
import { Menu as menuData } from '../../WebPage/structure.json';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },  
};

function SimpleAppBar(props) {
  const { classes, label, MenuOpts, Login, history, menuIsOpen, menuHandler, loginDrawer, loginStatus } = props;
  const anchor = null;
  const onClickHandler = itemLink => {
    menuHandler('menuIsOpen', false);
    menuHandler('loginDrawer', false);
    history.push(itemLink);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Hidden smUp>           
            <IconButton className={classes.menuButton} ref={anchor} color="inherit" aria-label="Menu">
              <MenuIcon ref={anchor} onClick={()=>menuHandler('menuIsOpen', true)}/>
              <Drawer
                id="simple-menu"
                anchor={'left'}
                open={menuIsOpen}
                onClose={()=>menuHandler('menuIsOpen', false)}
              >
              {menuData.map(item => <MenuItem key={item.name} onClick={e => onClickHandler(item.link)}>{item.label}</MenuItem>)}
              </Drawer>              
            </IconButton>                 
          </Hidden>          
           <div className="iso-logo">{label}</div>
           <Hidden smUp>
             <Dialog 
              onClose={()=>menuHandler('loginDrawer', false)}                 
              open={loginStatus !== "SUCCESS" && loginDrawer}
              aria-labelledby="simple-dialog-title"
              classes={{
                paperWidthSm:'paper-width-sm'
              }}
            >
              <DialogTitle id="simple-dialog-title">Login</DialogTitle>
              <div>{Login}</div>                 
            </Dialog>  
            {!loginStatus && <KeyIcon ref={anchor} onClick={()=>menuHandler('loginDrawer', true)}/>}
           </Hidden>
        </Toolbar>
        <Hidden xsDown>      
          {Login}
        </Hidden>  
      </AppBar>
      <section>
        <Hidden xsDown>           
              {MenuOpts}          
        </Hidden>
      </section>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(SimpleAppBar));