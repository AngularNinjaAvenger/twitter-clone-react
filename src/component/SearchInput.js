import React from 'react';
import { MdMic,MdSearch } from 'react-icons/all'
import { Redirect } from 'react-router-dom';


// value={props.value}
function SearchInput(props) {
    return <div className="search-container">
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
            </div>;
}

export default SearchInput;


