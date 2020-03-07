import ResultNav from './ResultNav';
import Item from './list-item/item';
import SearchInput from './SearchInput';

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

class ResultHeader extends Component {
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
    render() {
        return (
            <header className="result-header">
                <ResultNav />
                {this.state.redirect ? <Redirect to={{ pathname: `/result/?term=${this.state.value}`, query: { term: this.state.value } }} />:""}
                <SearchInput onChange={this.onChange} value={this.state.value} redirect={this.redirect}/>
                <div className="tabs">
                    {
                        ["All","Images","News","Videos","Maps"].map(
                        (item,idx)=> <div>
                                        <Item text={item} index={idx}/>
                                    </div>)
                    }
                </div>
            </header>
        )
    }
}

export default ResultHeader


