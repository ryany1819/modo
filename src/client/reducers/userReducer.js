const initialState = {
  isLoggedIn: false,
  loggedInUser: '',
  signUpInputUsername: '',
  signUpInputPassword: '',
  signUpInputEmail: '',
  loginInputEmail: '',
  loginInputPassword: '',
  signUpError: false,
  signUpErrorMsg: '',
  loginError: false,
  loginErrorMsg: '',
  passwordErrorMsg: '',
  usernameErrorMsg: '',
  emailErrorMsg: '',
  forgotInputEmail: '',
  emailStatusMsg: '',
  emailSuccess: false,
};

export default function (previousState = initialState, action) {
  let stateCopy;
  switch (action.type) {
    case types.UPDATE_SIGNUP_USERNAME: {
      stateCopy = Object.assign({}, previousState);
      stateCopy.signUpInputUsername = action.payload.target.value;
      return stateCopy;
    }
    default:
      return previousState;
  }
}
