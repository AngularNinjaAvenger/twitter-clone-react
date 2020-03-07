import React, { Component } from 'react'
import ResultHeader from './ResultHeader'
import ResultCard from './ResultCard'
import result from "../MockData.json"
import { Redirect } from 'react-router-dom'
export default class ResultPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             result:[]
        }
    }
    componentDidMount() {

        console.log();
        this.setState({ result });
    }
    render() {
        try{
            const term = this.props.location.query.term;
        }catch(e){
            return <Redirect to="/" />;
        }
        return (
            <div>
                <ResultHeader />
                {this.state.result.map((item,idx)=><ResultCard swapterm={term} key={idx} data={result} />)}
            </div>
        )
    }
}
