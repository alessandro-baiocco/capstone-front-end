import { DELETE_USER, GET_USERS } from "../action";

const initialState = {
  content: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        content: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        content: state.content.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default users;
