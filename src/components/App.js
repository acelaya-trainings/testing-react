import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeAuth } from '../actions'

class App extends React.Component {
  renderLoginButton() {
    if (this.props.auth) {
      return <button onClick={() => this.props.changeAuth(false)}>Log out</button>;
    }

    return <button onClick={() => this.props.changeAuth(true)}>Log in</button>;
  }

  renderHeader() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="post">Posts</Link></li>
        <li>{this.renderLoginButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route component={CommentBox} path="/post" />
        <Route component={CommentList} path="/" exact />
      </div>
    )
  }
}

export default connect(state => ({ auth: state.auth }), { changeAuth })(App)
