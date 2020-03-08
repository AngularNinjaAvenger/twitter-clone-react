import SearchInput from './SearchInput';
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Search extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             value:"",
             redirect:false

            }
    }
    onChange=(value)=>{
        this.setState({ value });
    }
    
    redirect=()=>{
        this.setState({ redirect:true })
    }
    
    change(value){
        this.setState({
            value
        },()=>{
            this.redirect()
        })
    }

    render() {
        return (
            <div className="container">
                
            <div className="google-icon-wrapper">
                <img src={process.env.PUBLIC_URL + "/google-home-logo.png"} alt="google-icon" />
            </div>
            
            <SearchInput onChange={this.onChange} value={this.state.value} redirect={this.redirect}/>
            
            {this.state.redirect ? <Redirect to={{ pathname: '/result', query: { term: this.state.value } }} />:""}
        </div>
        )
    }
}
