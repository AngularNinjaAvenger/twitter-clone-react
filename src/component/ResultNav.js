import React from 'react'
import { MdMenu, MdPersonOutline } from 'react-icons/md'

export default function ResultNav() {
    return (
        <nav className="result-nav">
            <div><MdMenu color={"#1b7fff"} size={"2rem"} /></div>
            <div>
                <img className="result-img" src={process.env.PUBLIC_URL + "/google-home-logo.png"} alt="google-icon" />
            </div>
            <div>
                <div className="pointed-cursor"><MdPersonOutline color={"#1b7fff"} size={"2rem"} /></div>
            </div>
        </nav>
    )
}
