import SearchInput from './SearchInput';

import React, { Component } from 'react'

export default class Search extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             value:""
        }
    }
    onChange=(e)=>{
        this.setState({
            value:e.targe.value
        })
    }
    render() {
        return (
            <div className="container">
                
            <div className="google-icon-wrapper">
                <img src={process.env.PUBLIC_URL + "/google-home-logo.png"} alt="google-icon" />
            </div>
            
            <SearchInput onChange={this.onChange} value={this.state.value} />

            <div className="suggestions">
                suggestion
            </div>

        </div>
        )
    }
}
