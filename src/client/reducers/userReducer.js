import * as types from '../constants/actionTypes';

const initialState = {
  signupFirstName: '',
  signupLastName: '',
  signupFacebookUrl: 'https://www.facebook.com/',
  signupTwitterUrl: 'https://twitter.com/',
  signupLinkedInUrl: 'https://www.linkedin.com/in/',
  signupGithubUrl: 'https://github.com/',
  signupInstagramUrl: 'https://www.instagram.com/',
  signupEmail: '',
  signupPhoneNumber: '()',
  signupPassword: '',
  signupAvatarUrl: 'https://cdn2.iconfinder.com/data/icons/gaming-and-beyond-part-2-1/80/User_gray-512.png',
  loginEmail: '',
  loginPassword: '',
  isLoggedIn: false,
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

    case types.UPDATE_SIGNUP_AVATAR_URL:
      return {
        ...state,
        signupAvatarUrl: action.payload
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
