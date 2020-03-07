import React, { Component } from 'react'
import Nav from './component/nav/Nav'
import "index.css"
export default class app extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="google-icon-wrapper">
                    <img src={process.env.PUBLIC_URL + "/google-home-logo.png"} alt="google-icon" />
                </div>
                <div>
                    <input type="text" />
                    <div>M</div>
                    <div>S</div>
                </div>
            </div>
        )
    }
}
