import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Appbar from '../../Library/AppBar';
import { Header as headerData } from '../structure.json';
import '../styles/Layout.scss';

export default class Layout extends Component {
  static propTypes = {
    Menu: PropTypes.node,
    Content: PropTypes.node,
  }

  render() {
      const { Menu, Content } = this.props;
    return (
      <div>
        <Appbar {...headerData}/>
        <section>{Menu ? <Menu /> : null}</section>
        <section>
            <Content/>
        </section>
      </div>
    )
  }
}
