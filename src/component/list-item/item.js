import React from 'react'
import "./item.css"

export default function Item(props) {
    return (
        <li className="nav-item"><a href="">{props.text}</a></li>
    )
}
