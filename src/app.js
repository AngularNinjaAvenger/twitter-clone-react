import React, { Component } from 'react'
import { FaHamburger } from 'react-icons/fa'

import SearchPage from './component/SeachPage'
import { BrowserRouter, Route } from 'react-router-dom'
import ResultPage from './component/ResultPage'
export default class app extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path='/' exact component={SearchPage} />
                <Route path='/result' component={ResultPage} />
            </BrowserRouter>
        )
    }
}
