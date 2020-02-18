import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import ColorModeContext from "../context/colorMode"

export default class Nav extends Component {
  static contextType = ColorModeContext
    render() {
      let  color = this.context.colorMode;
      let style = {"color":color.color}; 
      return (
        <nav className='nav'>
        <ul>
          <li>
            <NavLink style={style} to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={style} to='/new' activeClassName='active'>
              New Tweet
            </NavLink>
          </li>
        </ul>
      </nav>
      )
  }
}
