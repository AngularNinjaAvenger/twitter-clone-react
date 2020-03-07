import SearchInput from './SearchInput';

import React, { Component } from 'react'

export default class Search extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             value:"testing"
        }
    }
    onChange=(value)=>{
        this.setState({ value });
    }
    render() {
        return (
            <div className="container">
                
            <div className="google-icon-wrapper">
                <img src={process.env.PUBLIC_URL + "/google-home-logo.png"} alt="google-icon" />
            </div>
            
            <SearchInput onChange={this.onChange} value={this.state.value} />
            {
                this.state.value.length ? (
                    <div className="suggestions">
                        suggestion
                    </div>
                ):""
            }

        </div>
        )
    }
}
