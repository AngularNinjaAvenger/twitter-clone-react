import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import { FaTwitter } from 'react-icons/fa'
import ColorModeSwitchContext from "../context/colorModeSwitch"
import ColorModeContext from "../context/colorMode"

export default class Nav extends Component {
  static contextType = ColorModeSwitchContext
    render() {
        let  changeColor = this.context;
        console.log(this.props.color.color)
      return (
        <nav className='nav'>
        <ul>
          <li>
            <NavLink style={{"color":this.props.color.color}} to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={{"color":this.props.color.color}} to='/new' activeClassName='active'>
              New Tweet
            </NavLink>
          </li>
          <li style={{"color":this.props.color.color}} onClick={changeColor} className="switchColorMode" >
            dark mode
            <FaTwitter color={this.props.color.color}/>   
          </li>
        </ul>
      </nav>
      )
  }
}
