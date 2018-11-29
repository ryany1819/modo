import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapStateToProps = store => ({
  loginEmail: store.userReducer.loginEmail,
  loginPassword: store.userReducer.loginPassword,
  isLoggedIn: store.userReducer.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  updateLoginEmail: (event) => {
    dispatch(actions.updateLoginEmail(event.target.value));
  },
  updateLoginPassword: (event) => {
    dispatch(actions.updateLoginPassword(event.target.value));
  },
  updateSubmitLogin: (event) => {
    dispatch(actions.updateLoginPassword(event.target.value));
  },
});

class Login extends Component {
  constructor(props) {
    super(props);

    this.redirectToMain = this.redirectToMain.bind(this);
  }

  redirectToMain() {
    this.props.history.push('/main');
  }

  componentWillMount() {
    if (this.props.isLoggedIn) {
      this.props.history.push('/main');
    }
  }

  render() {
    const {
      loginEmail,
      loginPassword,
      updateLoginEmail,
      updateLoginPassword,
      history,
    } = this.props;

    return (
      <div>
        <div id="logincontent">
          <div id="logintitle">MoDo</div>
          <form id="login" onSubmit={this.handleSubmit}>
            <div className="content">
              <h1>User Login</h1>
              <input type="text" placeholder="Email Address" value={loginEmail} onChange={updateLoginEmail} />
              <input type="password" placeholder="Password" value={loginPassword} onChange={updateLoginPassword} />
              <button className="loginbtn" type="submit" value="Submit">Login</button>
              <button className="registerbtn" onClick={() => { event.preventDefault(); history.push('/signup'); }}>Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
