import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Appbar from '../../Library/AppBar';
import { Header as headerData } from '../structure.json';
import Login from '../../User/Components/Login.component';
import '../styles/Layout.scss';

export default class Layout extends Component {
  static propTypes = {
    Menu: PropTypes.func,
    Content: PropTypes.func,
  }

  state={
    menuIsOpen: false,
    loginDrawer: false,
  }
  MenuHandler = (drawer, status) => {
    this.setState({ [drawer]: status, });    
  }

  render() {
      const { Menu, Content, children, location, loginStatus, ...otherProps } = this.props;
      const { menuIsOpen, loginDrawer } = this.state;
    return (
      <div>
        <Appbar 
          {...headerData} 
          MenuOpts={Menu ? <Menu {...otherProps} /> : null} 
          Login={<Login location={location} />}
          menuIsOpen={menuIsOpen}
          menuHandler={this.MenuHandler}
          loginDrawer={loginDrawer} 
          loginStatus={loginStatus} 
        />
        <section>
            {children}
        </section>
      </div>
    )
  }
}
