import SearchInput from './SearchInput';
import MockSuggestions from "../MockSuggestionData.json"
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
    
    redirect=(item)=>{

        this.setState({ 
            redirect:true,
            value:item ? item : this.state.value
        })
    }

    render() {
        return (
            <div className="container">
                
            <div className="google-icon-wrapper">
                <img src={process.env.PUBLIC_URL + "/google-home-logo.png"} alt="google-icon" />
            </div>
            
            <SearchInput onChange={this.onChange} value={this.state.value} redirect={this.redirect}/>
            {
                this.state.value.length ? (
                    <div className="suggestions">
                        {
                            MockSuggestions.map((item,idx)=>{
                                if (item.toLowerCase().indexOf(this.state.value.toLowerCase()) > -1){
                                    return <li key={idx} className="suggestion" onClick={this.redirect(item)}>{item}</li>
                                }
                                
                            })
                        }
                        </div>
                ):""
            }
            {this.state.redirect ? <Redirect to={{ pathname: '/result', query: { term: this.state.value } }} />:""}
        </div>
        )
    }
}
