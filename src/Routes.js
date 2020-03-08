import React, { Component } from 'react'

import SearchPage from './component/SeachPage'
import ResultPage from './component/ResultPage'
import { Switch, Router } from 'react-router-dom'
export default class Routes extends Component {
    render() {
        return (
       <Switch>
            <Router path="/" excalt component={SearchPage} />
	        <Router path='/result' component={ResultPage} />
       </Switch>
        )
    }
}
