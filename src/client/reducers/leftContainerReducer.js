import * as types from '../constants/actionTypes';

const initialState = {
  groups: [],
  cards: [],
  currentGroup: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_GROUPS:
      console.log('payload', action.payload);
      return {
        ...state,
        groups: action.payload,
      };

    case types.UPDATE_CARDS:
      return {
        ...state,
        cards: action.payload,
      };

    case types.UPDATE_GROUP:
      return {
        ...state,
        currentGroup: action.payload,
      };

    default:
      return state;
  }
}
