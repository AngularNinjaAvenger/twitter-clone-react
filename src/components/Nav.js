import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
      return (
        <nav className='nav'>
        <ul>
          <li>
            <NavLink style={{"color":"white"}} to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={{"color":"white"}} to='/new' activeClassName='active'>
              New Tweet
            </NavLink>
          </li>
          <li>CHANGE COLOR MODE</li>
        </ul>
      </nav>
      )
  }
}
