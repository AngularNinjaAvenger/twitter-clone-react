import React from 'react';

function ResultCard(props) {
    const {url,title,description,date} = props.data;
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
