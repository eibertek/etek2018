import React, { Component } from 'react'
import MenuComponent from '../../Library/Menu';
import { Menu as menuData } from '../structure.json';

export default class Menu extends Component {
  render() {
    return (
      <MenuComponent menuData={menuData} />
    )
  }
}
