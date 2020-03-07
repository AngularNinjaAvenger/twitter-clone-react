import React from 'react'
import "./nav.css"
import Item from '../list-item/item'

export default function Nav() {
    return (
        <header>
            <nav className="left-nav">
                H
                <ul>
                    <Item text="all" />
                    <Item text="home" />
                </ul>
            </nav>

            <nav className="right-nav">
                <div>O</div>
                <div>O</div>
                <div>O</div>
            </nav>

        </header>
    )
}
