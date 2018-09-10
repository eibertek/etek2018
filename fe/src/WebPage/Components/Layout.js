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

  render() {
      const { Menu, Content, children, location, ...otherProps } = this.props;
    return (
      <div>
        <Appbar {...headerData} MenuOpts={Menu ? <Menu {...otherProps} /> : null}/>
        <Login location={location} />
        <section>
            {children}
        </section>
      </div>
    )
  }
}
