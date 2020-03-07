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
        console.log(this.props)
        const query =  new URLSearchParams(this.props.location.search)
            const obj = {}
            for(let i of query.entries()){
                //this i here is [key,value]
                obj[i[0]]=obj[i[1]]
            }
            console.log(obj)
            return
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
