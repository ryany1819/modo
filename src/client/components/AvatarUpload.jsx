import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import axios from 'axios';

const mapStateToProps = store => ({
  signupAvatarUrl: store.userReducer.signupAvatarUrl
});

const mapDispatchToProps = dispatch => ({
  updateSignupAvatarUrl: (avatarUrl) => {
    dispatch(actions.updateSignupAvatarUrl(avatarUrl));
  }
});

class AvatarUpload extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    event.preventDefault();
    const data = new FormData(); 
    data.append('avatar', event.target.files[0]);    // see server side: post('/upload') .single('avatar')
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    axios.post('/upload', data, config).then((response) => {
      this.props.updateSignupAvatarUrl(response.data.url);
    }).catch(error => { console.log(error); });
  }

  render() {
    const { signupAvatarUrl } = this.props;
    return (
      <React.Fragment>
        <input type="file" onChange={this.handleChange} />
        <img id="avatar" src={signupAvatarUrl} />
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AvatarUpload);