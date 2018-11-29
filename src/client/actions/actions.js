import * as types from '../constants/actionTypes';

export const updateSignupFirstName = event => ({
  type: types.UPDATE_SIGNUP_FIRST_NAME,
  payload: event,
});

export const updateSignupLastName = event => ({
  type: types.UPDATE_SIGNUP_LAST_NAME,
  payload: event,
});

export const updateSignupFacebookUrl = event => ({
  type: types.UPDATE_SIGNUP_FACEBOOK_URL,
  payload: event,
});

export const updateSignupTwitterUrl = event => ({
  type: types.UPDATE_SIGNUP_TWITTER_URL,
  payload: event,
});

export const updateSignupLinkedInUrl = event => ({
  type: types.UPDATE_SIGNUP_LINKEDIN_URL,
  payload: event,
});

export const updateSignupGithubUrl = event => ({
  type: types.UPDATE_SIGNUP_GITHUB_URL,
  payload: event,
});

export const updateSignupInstagramUrl = event => ({
  type: types.UPDATE_SIGNUP_INSTAGRAM_URL,
  payload: event,
});

export const updateSignupEmail = event => ({
  type: types.UPDATE_SIGNUP_EMAIL,
  payload: event,
});

export const updateSignupPhoneNumber = event => ({
  type: types.UPDATE_SIGNUP_PHONE_NUMBER,
  payload: event,
});

export const updateSignupPassword = event => ({
  type: types.UPDATE_SIGNUP_PASSWORD,
  payload: event,
});

export const successfulSignup = () => ({
  type: types.SUCCESSFUL_SIGNUP,
});

export const failedSignup = message => ({
  type: types.FAILED_SIGNUP,
  payload: message,
});

/* eslint-disable */
export const submitSignup = () => {
  return (dispatch, getState) => {
    // fetch('/signup', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json; charset=utf-8',
    //   },
    //   body: JSON.stringify(signUpInfoObj),
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     if (data.signupSuccess) {
    //       dispatch(successfulSignUp());
    //     } else {
    //       dispatch(failedSignUp(data.msg));
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    console.log(getState().userReducer);
    dispatch(successfulSignup());
  };
};
/* eslint-enable */

export const updateLoginEmail = event => ({
  type: types.UPDATE_SIGNUP_PASSWORD,
  payload: event,
});

export const updateLoginPassword = event => ({
  type: types.UPDATE_SIGNUP_PASSWORD,
  payload: event,
});

export const updateGroups = data => ({
  type: types.UPDATE_GROUPS,
  payload: data,
});

export const updateCards = data => ({
  type: types.UPDATE_CARDS,
  payload: data,
});

/* eslint-disable */
export const getGroups = (email) => {
  return (dispatch, getState) => {
    fetch(`/userGroups/${}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
          dispatch(updateGroups(data));
        
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(successfulSignup());
  };
};
/* eslint-enable */

/* eslint-disable */
export const getCards = (groupId) => {
  return (dispatch, getState) => {
    fetch(`/groupCards/${groupId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
          dispatch(updateGroups(data));
        
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(successfulSignup());
  };
};