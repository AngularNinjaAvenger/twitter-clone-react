import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';
import ColorModeContext from "../context/colorMode"
class Dashboard extends Component {
    static contextType = ColorModeContext
    render() {
        let  color = this.context.color;
        return(
            <div>
                <h3 className='center' style={{"color":color}} > Your Timeline </h3>
                <ul className='dashboard-list'>
                    {this.props.tweetIds.map((id) => (
                        <li key={id}>
                            <Tweet id={id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({ tweets }) {
    return {
      tweetIds: Object.keys(tweets)
        .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
    }
  }

export default connect(mapStateToProps)(Dashboard);