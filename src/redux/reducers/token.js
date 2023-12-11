import { GET_TOKEN, REMOVE_ME } from "../action";

const initialState = {
  content: null,
};

const token = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        content: action.payload,
      };
    case REMOVE_ME:
      return {
        content: null,
      };
    default:
      return state;
  }
};

export default token;
