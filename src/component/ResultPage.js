import React, { Component } from 'react'
import ResultHeader from './ResultHeader'
import ResultCard from './ResultCard'
import result from "../MockData.json"
export default class ResultPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             result:[]
        }
    }
    componentDidMount() {
        console.log(result);
        this.setState({ result });
    }
    render() {
        return (
            <div>
                <ResultHeader />
                {this.state.result.map((item,idx)=><ResultCard key={idx } data={result} />)}
            </div>
        )
    }
}
