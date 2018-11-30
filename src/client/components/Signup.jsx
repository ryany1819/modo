import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import AvatarUpload from './AvatarUpload.jsx';

const mapStateToProps = store => ({
  signupFirstName: store.userReducer.signupFirstName,
  signupLastName: store.userReducer.signupLastName,
  signupFacebookUrl: store.userReducer.signupFacebookUrl,
  signupTwitterUrl: store.userReducer.signupTwitterUrl,
  signupLinkedInUrl: store.userReducer.signupLinkedInUrl,
  signupGithubUrl: store.userReducer.signupGithubUrl,
  signupInstagramUrl: store.userReducer.signupInstagramUrl,
  signupEmail: store.userReducer.signupEmail,
  signupPhoneNumber: store.userReducer.signupPhoneNumber,
  signupPassword: store.userReducer.signupPassword,
  signupAvatarUrl: store.userReducer.signupAvatarUrl,
});

const mapDispatchToProps = dispatch => ({
  updateSignupUsername: (event) => {
    dispatch(actions.updateSignupFirstName(event.target.value));
  },
  updateSignupLastName: (event) => {
    dispatch(actions.updateSignupLastName(event.target.value));
  },
  updateSignupFacebookUrl: (event) => {
    dispatch(actions.updateSignupFacebookUrl(event.target.value));
  },
  updateSignupTwitterUrl: (event) => {
    dispatch(actions.updateSignupTwitterUrl(event.target.value));
  },
  updateSignupLinkedInUrl: (event) => {
    dispatch(actions.updateSignupLinkedInUrl(event.target.value));
  },
  updateSignupGithubUrl: (event) => {
    dispatch(actions.updateSignupGithubUrl(event.target.value));
  },
  updateSignupInstagramUrl: (event) => {
    dispatch(actions.updateSignupInstagramUrl(event.target.value));
  },
  updateSignupEmail: (event) => {
    dispatch(actions.updateSignupEmail(event.target.value));
  },
  updateSignupPhoneNumber: (event) => {
    dispatch(actions.updateSignupPhoneNumber(event.target.value));
  },
  updateSignupPassword: (event) => {
    dispatch(actions.updateSignupPassword(event.target.value));
  },
  submitSignup: (redirectToMain) => {
    dispatch(actions.submitSignup(redirectToMain));
  },
});

/* eslint-disable */
class Signup extends Component {
  constructor(props) {
    super(props);

    this.redirectToMain = this.redirectToMain.bind(this);
  }
  
  redirectToMain() {
    this.props.history.push('/main');
  }

  render() {
    const {
      updateSignupUsername,
      updateSignupLastName,
      updateSignupFacebookUrl,
      updateSignupTwitterUrl,
      updateSignupLinkedInUrl,
      updateSignupGithubUrl,
      updateSignupInstagramUrl,
      updateSignupEmail,
      updateSignupPhoneNumber,
      updateSignupPassword,
      signupFirstName,
      signupLastName,
      signupFacebookUrl,
      signupTwitterUrl,
      signupLinkedInUrl,
      signupGithubUrl,
      signupInstagramUrl,
      signupEmail,
      signupPhoneNumber,
      signupPassword,
      submitSignup,
      history,
    } = this.props;

    const { redirectToMain } = this;

    return (
      <div id="signupcontent">
        <div id="logintitle">MoJoe</div>
        <form
          id="signupform"
          onSubmit={(event) => {
            event.preventDefault();
            submitSignup(redirectToMain);
          }}
        >
          <div>
            <h1>Sign up for free</h1>
            <label>Email:</label>
            <input id="signupemail" type="text" placeholder="(required)" value={signupEmail} onChange={updateSignupEmail} />
            <label>Password:</label>
            <input id="signuppassword" type="password" placeholder="(required)" value={signupPassword} onChange={updateSignupPassword} />
            <label>First Name:</label>
            <input id="signupfname" type="text" value={signupFirstName} onChange={updateSignupUsername} />
            <label>Last Name:</label>
            <input id="signuplname" type="text" value={signupLastName} onChange={updateSignupLastName} />
            <label>Phone Number:</label>
            <input id="signupephone" type="text" value={signupPhoneNumber} onChange={updateSignupPhoneNumber} />
            <label>Linkedin URL:</label>
            <input type="text" value={signupLinkedInUrl} onChange={updateSignupLinkedInUrl} />
            <label>Github URL:</label>
            <input type="text" value={signupGithubUrl} onChange={updateSignupGithubUrl} />
            <label>Facebook URL:</label>
            <input type="text" value={signupFacebookUrl} onChange={updateSignupFacebookUrl} />
            <label>Twitter URL:</label>
            <input type="text" value={signupTwitterUrl} onChange={updateSignupTwitterUrl} />
            <label>Instagram URL:</label>
            <input type="text" value={signupInstagramUrl} onChange={updateSignupInstagramUrl} />
            <label>Upload Avatar:</label><AvatarUpload />
            <button id="signupbtn">Sign-up with MoJoe</button>
            <button className="registerbtn" onClick={() => { event.preventDefault(); history.push('/'); }}>Back to Log In</button>
          </div>
        </form>
      </div>
    );
  }
}
/* eslint-enable */
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
