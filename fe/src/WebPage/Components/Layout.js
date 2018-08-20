import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        <header> 
            <div>ETEK WEB PAGE</div>
        </header>
        <section>{Menu ? <Menu /> : null}</section>
        <section>
            <Content/>
        </section>
      </div>
    )
  }
}
