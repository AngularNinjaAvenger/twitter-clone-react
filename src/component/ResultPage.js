import React, { Component } from 'react'
import ResultHeader from './ResultHeader'
import ResultCard from './ResultCard'

export default class ResultPage extends Component {
    render() {
        return (
            <div>
                <ResultHeader />
                <ResultCard />
                <ResultCard />
                <ResultCard />
                <ResultCard />
            </div>
        )
    }
}
