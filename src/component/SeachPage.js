import React, { Component } from 'react'
import Nav from './nav/Nav'
import Search from './Search'


export default class SearchPage extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Search />
            </div>
        )
    }
}
