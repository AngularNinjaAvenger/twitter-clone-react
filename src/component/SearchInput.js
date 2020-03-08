import React from 'react';
import { MdMic,MdSearch } from 'react-icons/all'
import { Redirect } from 'react-router-dom';
import MockSuggestions from "../MockSuggestionData.json"


// value={props.value}
function SearchInput(props) {


    return <div className="input-sug-wapper">
            <div className="search-container">
                <input type="text"  onChange={(e)=>props.onChange(e.target.value)}/>
                    <div className="search-mic">
                        <MdMic 
                        color={"gray"} 
                            size={"2rem"} />
                    </div>
                    <div 
                        onClick={()=>{props.redirect()}}
                        className="search-button">
                        <MdSearch 
                            color={"white"} 
                            size={"2rem"} />
                    </div>
                </div>
                {
                    props.value.length ? (
                        <div className="suggestions">
                            {
                                MockSuggestions.map((item,idx)=>{
                                    if (item.toLowerCase().indexOf(props.value.toLowerCase()) > -1){
                                        return <li key={idx} className="suggestion" onClick={props.redirect}>{item}</li>
                                    }
                                    
                                })
                            }
                            </div>
                    ):""
                }
            </div>
}

export default SearchInput;


