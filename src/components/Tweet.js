import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTweet, formatDate } from '../utils/helpers';
import { TiArrowBackOutline } from 'react-icons/ti/index';
import { TiHeartOutline } from 'react-icons/ti/index';
import { TiHeartFullOutline } from 'react-icons/ti/index';
import { handleToggleTweet } from '../actions/tweets';
import { Link, withRouter } from 'react-router-dom';
import ColorModeContext from "../context/colorMode"


class Tweet extends Component {

    handleLike = (e) => {
        e.preventDefault();

        const { dispatch, tweet, authedUser } = this.props;

        dispatch(handleToggleTweet({
            id: tweet.id,
            hasLiked: tweet.hasLiked,
            authedUser,
        }))
    }

    toParent = (e, id) => {
        e.preventDefault();
        this.props.history.push(`tweet/${id}`);
    }
    static contextType = ColorModeContext
    render() {
        let  color = this.context;
        
        const { tweet } = this.props;

        if (tweet === null) {
            return <p> This tweet doesn't exists.</p>
        }

        const {
            name, avatar, timestamp, text, hasLiked, likes, replies, parent, id
        } = tweet;

        return(
            <Link to={`/tweet/${id}`} className='tweet' style={{"background":color.colorMode}}>
                <img 
                    src={avatar}
                    alt={`Avatart of ${name}`}
                    className='avatar'
                />
                <div className='tweet-info'>
                    <div>
                        <span style={{"color":color.color}}>{name}</span>
                        <div style={{"color":color.colorOpacity}}> {formatDate(timestamp)} </div>
                        {parent && (
                            <button 
                                style={{"color":color.colorOpacity}}
                                className='replying-to' onClick={(e) => this.toParent(e, parent.id)}>
                                Replying to @{parent.author}
                            </button>
                        )}
                        <p style={{"color":color.color}}>{text}</p>
                    </div>
                    <div className='tweet-icons'>
                        <TiArrowBackOutline color={color.color} className='tweet-icon' />
                        <span>{replies !== 0 && replies}</span>
                        <button className='heart-button' onClick={this.handleLike}>
                            {hasLiked === true
                                ? <TiHeartFullOutline color={color.color} className='tweet-icon' />
                                : <TiHeartOutline color={color.color} className='tweet-icon' />
                            }
                        </button>
                        <span style={{"color":color.colorOpacity}} > {likes !== 0 && likes} </span>
                    </div>
                </div>
            </Link>
        )
    }
}

const mapStateToProps = ({ authedUser, users, tweets }, {id}) => {
    const tweet = tweets[id];
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

    return {
        authedUser,
        tweet: tweet
            ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
            : null
    }
}

export default withRouter(connect(mapStateToProps)(Tweet));