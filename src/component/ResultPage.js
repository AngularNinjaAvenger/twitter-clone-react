import React, { Component } from 'react'
import ResultHeader from './ResultHeader'
import ResultCard from './ResultCard'
import result from "../MockData.json"
import { Redirect } from 'react-router-dom'
export default class ResultPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             result:[],
             redirect:false
        }
    }
    componentDidMount() {
        this.setState({ result });
    }
    render() {
        console.log(this.state.term,"<--- from result page")
        return (
            <div>
            <ResultHeader />
                {this.state.result.map((item,idx)=><ResultCard  key={idx} data={item} />)}
            </div>
        )
    }
}
