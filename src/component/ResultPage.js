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
        
        if(this.props.location.query){
            this.setState({
                term:this.props.location.query.term
            })
        }else{
            this.setState({
                redirect:true
            })
        }
    }
    render() {
        console.log(this.state.term,"<--- from result page")
        return (
            <div>
            {this.state.redirect ?  <Redirect to="/" /> : ""}
            <ResultHeader />
                {this.state.result.map((item,idx)=><ResultCard swapterm={this.state.term} key={idx} data={item} />)}
            </div>
        )
    }
}
