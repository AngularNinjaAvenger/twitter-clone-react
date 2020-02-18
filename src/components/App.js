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
import ColorModeSwitchContext from "../context/colorModeSwitch"

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       lightColor:"#03A9F4",
       lightOpacity:"#03a9f47a",
       light:"white",
       darkColor:"white",
       darkOpacity:"#ffffff78",
       dark:"black",
       color:{
         color:"#03A9F4",
         colorOpacity:"#03a9f47a",
         colorMode:"white",
        },
      isDark:false
    }
  }
  
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  changeColorMode=()=>{
    this.setState((state, props) => { return { 
      ...state,
      color:{
        color:state.isDark ? state.darkColor : state.lightColor,
        colorOpacity:state.isDark ? state.darkOpacity : state.lightOpacity,
        colorMode:state.isDark ? state.dark : state.light,
       },
       isDark:!state.isDark
     }})
  }
  render() {
    return (
      
      <ColorModeSwitchContext.Provider value={this.changeColorMode}>
      <ColorModeContext.Provider value={this.state.color}>
        <Router>
          <Fragment>
            <LoadingBar />
            <div className='container' style={{"background":this.state.color.colorMode}}>
              <Nav color={this.state.color}/>
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
      </ColorModeSwitchContext.Provider>
      )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
