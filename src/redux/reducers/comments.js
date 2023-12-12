import { GET_COMMENTS, POST_COMMENT } from "../action";

const initialState = {
  content: [],
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        content: action.payload,
      };
    case POST_COMMENT:
      return {
        ...state,
        content: [action.payload, ...state.content],
      };
    default:
      return state;
  }
};

export default comments;
