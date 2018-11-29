import * as types from '../constants/actionTypes';

const initialState = {
  signupFirstName: '',
  signupLastName: '',
  signupFacebookUrl: '',
  signupTwitterUrl: '',
  signupLinkedInUrl: '',
  signupGithubUrl: '',
  signupInstagramUrl: '',
  signupEmail: '',
  signupPhoneNumber: '',
  signupPassword: '',
  loginEmail: '',
  loginPassword: '',
  isLoggedIn: true,
  loggedInUser: '',
  showloginFailedMessage: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_SIGNUP_FIRST_NAME:
      return {
        ...state,
        signupFirstName: action.payload,
      };

    case types.UPDATE_SIGNUP_LAST_NAME:
      return {
        ...state,
        signupLastName: action.payload,
      };

    case types.UPDATE_SIGNUP_FACEBOOK_URL:
      return {
        ...state,
        signupFacebookUrl: action.payload,
      };

    case types.UPDATE_SIGNUP_TWITTER_URL:
      return {
        ...state,
        signupTwitterUrl: action.payload,
      };

    case types.UPDATE_SIGNUP_LINKEDIN_URL:
      return {
        ...state,
        signupLinkedInUrl: action.payload,
      };

    case types.UPDATE_SIGNUP_GITHUB_URL:
      return {
        ...state,
        signupGithubUrl: action.payload,
      };

    case types.UPDATE_SIGNUP_INSTAGRAM_URL:
      return {
        ...state,
        signupInstagramUrl: action.payload,
      };

    case types.UPDATE_SIGNUP_EMAIL:
      return {
        ...state,
        signupEmail: action.payload,
      };

    case types.UPDATE_SIGNUP_PHONE_NUMBER:
      return {
        ...state,
        signupPhoneNumber: action.payload,
      };

    case types.UPDATE_SIGNUP_PASSWORD:
      return {
        ...state,
        signupPassword: action.payload,
      };

    case types.UPDATE_LOGIN_EMAIL:
      return {
        ...state,
        loginEmail: action.payload,
      };

    case types.UPDATE_LOGIN_PASSWORD:
      return {
        ...state,
        loginPassword: action.payload,
      };

    case types.SUCCESSFUL_SIGNUP:
      return {
        ...state,
        isLoggedIn: true,
        loggedInUser: action.payload,
      };

    case types.SUCCESSFUL_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        loggedInUser: action.payload,
      };

    case types.FAILED_LOGIN:
      return {
        ...state,
        showloginFailedMessage: true,
      };

    default:
      return state;
  }
}
