import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import NewTweet from './NewTweet';
import TweetPage from './TweetPage';
import Nav from './Nav';
import ColorModeContext from "../context/colorMode"

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       lightColor:"#03A9F4",
       lightOpacity:"#03a9f47a",
       lightDark:"white",
       darkColor:"#03A9F4",
       darkOpacity:"#03a9f47a",
       color:{
        color:this.state.lightColor,
        colorOpacity:this.state.darkColor,
        colorMode:this.state.lightDark,
       }
    }
  }
  
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <ColorModeContext.Provider value={this.state.color}>
        <Router>
          <Fragment>
            <LoadingBar />
            <div className='container'>
              <Nav />
              {this.props.loading === true
                ? null
                : <div>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/tweet/:id' component={TweetPage} />
                    <Route path='/new' component={NewTweet} />
                  </div>}
            </div>
          </Fragment>
        </Router>
      </ColorModeContext.Provider>
      )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
