import React from 'react';
import SearchInput from './SearchInput';

function Search() {
    return <div className="container">
                <div className="google-icon-wrapper">
                    <img src={process.env.PUBLIC_URL + "/google-home-logo.png"} alt="google-icon" />
                </div>
                <SearchInput />
            </div>
}

export default Search;

