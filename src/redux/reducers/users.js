import { GET_USERS } from "../action";

const initialState = {
  content: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        content: action.payload,
      };
    default:
      return state;
  }
};

export default users;
