import { DELETE_COMMENT, GET_COMMENTS, POST_COMMENT, PUT_COMMENT } from "../action";

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
    case DELETE_COMMENT:
      return {
        ...state,
        content: state.content.filter((comment) => comment.id !== action.payload),
      };
    case PUT_COMMENT:
      return {
        ...state,
        content: state.content.map((comment) => {
          if (comment.id === action.payload.id) {
            comment.comment = action.payload.comment;
          }
          return comment;
        }),
      };
    default:
      return state;
  }
};

export default comments;
