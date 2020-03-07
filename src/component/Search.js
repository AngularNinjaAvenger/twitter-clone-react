import React from 'react';

function Search() {
    return <div className="container">
                <div className="google-icon-wrapper">
                    <img src={process.env.PUBLIC_URL + "/google-home-logo.png"} alt="google-icon" />
                </div>

                <div className="search-container">
                    <input type="text" />
                    <div className="search-mic">M</div>
                    <div className="search-button">S</div>
                </div>
            </div>
}

export default Search;
