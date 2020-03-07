import React from 'react';

function ResultCard(props) {
    const {url,title,description,date} = props.data;
    return (
        <div className="card-container">
            <span className="result-link">{url.replace("searchwod",props.swapterm)}</span>
            <a className="result-title" href="">{title.replace("searchwod",props.swapterm)}</a>
            <div className="description-container">
                <span className="date">{date.replace("searchwod",props.swapterm)}</span> :
                <span className="description">{description.replace("searchwod",props.swapterm)}</span>
            </div>
        </div>
    )
}

export default ResultCard;
