import { GET_ME, REMOVE_ME } from "../action";

const initialState = {
  content: null,
};

const myProfile = (state = initialState, action) => {
  switch (action.type) {
    case GET_ME:
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

export default myProfile;
