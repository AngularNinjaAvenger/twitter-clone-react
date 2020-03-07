import React from 'react';
import { MdMic } from 'react-icons/all'


function SearchInput() {
    return <div className="search-container">
                <input type="text" />
                <div className="search-mic">
                    <MdMic 
                        color={"gray"} 
                        size={"2rem"} />
                </div>
                <div className="search-button">S</div>
            </div>;
}

export default SearchInput;

