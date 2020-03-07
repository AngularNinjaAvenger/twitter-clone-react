import React, { Component } from 'react'
import Nav from './component/nav/Nav'
import "./index.css"
import Search from './component/Search'
import SearchButon from './component/SearchButon'

export default class app extends Component {
    render() {
        return (
            <div>
                <Nav />
                <searchContainer />
                <Search />
            </div>
        )
    }
}
