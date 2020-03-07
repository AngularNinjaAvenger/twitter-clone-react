import React, { Component } from 'react'
import Nav from './component/nav/Nav'
import "./index.css"
import Search from './component/Search'


export default class SearchPage extends Component {
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
