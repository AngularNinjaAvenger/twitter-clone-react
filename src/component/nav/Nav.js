import React from 'react'
import "./nav.css"
import Item from '../list-item/item'
import {MdMenu,MdGridOn,
    MdPersonOutline,
    } from 'react-icons/all'

export default function Nav() {
    return (
        <header>
            <nav className="left-nav">
                <MdMenu color={"#1b7fff"} size={"2rem"} />
                <ul>
                    <Item text="all" />
                    <Item text="home" />
                </ul>
            </nav>

            <nav className="right-nav">
                <div className="pointed-cursor"><MdGridOn color={"#1b7fff"} size={"2rem"} /></div>
                <div className="pointed-cursor"><MdPersonOutline color={"#1b7fff"} size={"2rem"} /></div>
            </nav>
            
        </header>
    )
}

