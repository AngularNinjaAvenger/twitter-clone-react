import React from 'react';

function ResultCard({url,title,description,date}) {
    url = url ? url : "http://www.google.com/lattest-news"
    title = title ? title : "lattest news form google for front end engineers"
    description = description ? description : "this is the latttest new from google front end engineers are poeple who build the front end of applications,they design,build, test , they make sure the requirement for the application is met and they deploy"
    date = date ? date : "20 Oct 2019"
    return (
        <div className="card-container">
            <span className="result-link">{url}</span>
            <a className="result-title" href="">{title}</a>
            <div className="description-container">
                <span className="date">{date}</span> :
                <span className="description">{description}</span>
            </div>
        </div>
    )
}

export default ResultCard;
