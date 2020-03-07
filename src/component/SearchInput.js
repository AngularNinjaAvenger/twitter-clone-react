import React from 'react';
import { MdMic,MdSearch } from 'react-icons/all'


function SearchInput(props) {
    return <div className="search-container">
                <input type="text" value={props.value} onChange={props.onChange}/>
                <div className="search-mic">
                    <MdMic 
                        color={"gray"} 
                        size={"2rem"} />
                </div>
                <div className="search-button">
                    <MdSearch 
                        color={"white"} 
                        size={"2rem"} />
                </div>
            </div>;
}

export default SearchInput;


