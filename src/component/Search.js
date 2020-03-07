import React from 'react';
import SearchButon from './SearchButon';

function Search() {
    return <div className="container">
                <div className="google-icon-wrapper">
                    <img src={process.env.PUBLIC_URL + "/google-home-logo.png"} alt="google-icon" />
                </div>
                <SearchButon />
            </div>
}

export default Search;

