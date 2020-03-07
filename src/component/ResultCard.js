import React from 'react';

function ResultCard({url,title,description,date,swapterm}) {
    url = url ? url : "http://www.google.com/lattest-news"
    title = title ? title : "lattest news form google for front end engineers"
    description = description ? description : "this is the latttest new from google front end engineers are poeple who build the front end of applications,they design,build, test , they make sure the requirement for the application is met and they deploy"
    date = date ? date : "20 Oct 2019"
    swapterm = swapterm ? swapterm:"swapterm"
    return (
        <div className="card-container">
            <span className="result-link">{url.replace("searchwod",swapterm)}</span>
            <a className="result-title" href="">{title.replace("searchwod",swapterm)}</a>
            <div className="description-container">
                <span className="date">{date.replace("searchwod",swapterm)}</span> :
                <span className="description">{description.replace("searchwod",swapterm)}</span>
            </div>
        </div>
    )
}

export default ResultCard;
