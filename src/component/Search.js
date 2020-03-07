import SearchInput from './SearchInput';
import MockSuggestions from "../MockSuggestionData.json"
import React, { Component } from 'react'

export default class Search extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             value:"",
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
                        {
                            MockSuggestions.map((item,idx)=>{
                                if (item.toLowerCase().indexOf(this.state.value.toLowerCase()) > -1){
                                    return <li key={idx} className="suggestion">{item}</li>
                                }
                                
                            })
                        }
                        </div>
                ):""
            }

        </div>
        )
    }
}
