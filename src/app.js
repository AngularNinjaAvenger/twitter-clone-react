import React, { Component } from 'react'
import "./index.css"
import ResultHeader from './component/ResultHeader'
import Card from './component/Card'

export default class app extends Component {
    render() {
        return (
            <div>
                <ResultHeader />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        )
    }
}
