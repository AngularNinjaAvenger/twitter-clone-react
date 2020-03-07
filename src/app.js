import React, { Component } from 'react'
import Nav from './component/nav/Nav'
import "./index.css"
export default class app extends Component {
    render() {
        return (
            <div>
                <Nav />

                <div className="container">
                    <div className="google-icon-wrapper">
                        <img src={process.env.PUBLIC_URL + "/google-home-logo.png"} alt="google-icon" />
                    </div>

                    <div className="search-container">
                        <input type="text" />
                        <div className="search-mic">M</div>
                        <div className="search-button">S</div>
                    </div>
                </div>
            </div>
        )
    }
}
