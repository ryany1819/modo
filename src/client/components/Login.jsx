import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapStateToProps = store => ({
  loginEmail: store.userReducer.loginEmail,
  loginPassword: store.userReducer.loginPassword,
  isLoggedIn: store.userReducer.isLoggedIn,
  showLoginFailedMessage: store.userReducer.showLoginFailedMessage,
});

const mapDispatchToProps = dispatch => ({
  updateLoginEmail: (event) => {
    dispatch(actions.updateLoginEmail(event.target.value));
  },
  updateLoginPassword: (event) => {
    dispatch(actions.updateLoginPassword(event.target.value));
  },
  submitLogin: (redirectToMain) => {
    dispatch(actions.submitLogin(redirectToMain));
  },
});

class Login extends Component {
  constructor(props) {
    super(props);

    this.redirectToMain = this.redirectToMain.bind(this);
    this.highlightText = this.highlightText.bind(this);
  }

  componentWillMount() {
    if (this.props.isLoggedIn) {
      this.props.history.push('/main');
    }
  }

  redirectToMain() {
    this.props.history.push('/main');
  }

  highlightText(event) {
    event.target.select();
  }

  render() {
    const {
      loginEmail,
      loginPassword,
      updateLoginEmail,
      updateLoginPassword,
      history,
      showLoginFailedMessage,
      submitLogin,
    } = this.props;

    const { redirectToMain, highlightText } = this;
    console.log(1, showLoginFailedMessage);
    return (
      <div>
        <div id="logincontent">
          <div id="logintitle">MoDo</div>
          <form
            id="login"
            onSubmit={(event) => {
              event.preventDefault();
              submitLogin(redirectToMain);
            }}
          >
            <div className="content">
              <h1>User Login</h1>
              <input type="text" placeholder="Email Address" value={loginEmail} onChange={updateLoginEmail} onFocus={highlightText} />
              <input type="password" placeholder="Password" value={loginPassword} onChange={updateLoginPassword} onFocus={highlightText} />
              <button className="loginbtn" type="submit" value="Submit">Login</button>
              <button className="registerbtn" onClick={() => { event.preventDefault(); history.push('/signup'); }}>Register</button>
              {showLoginFailedMessage ? <p>Incorrect Email Address or Password</p> : null}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
