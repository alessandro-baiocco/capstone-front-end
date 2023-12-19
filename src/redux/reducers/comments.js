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
        content: state.content.map((singleComment) => {
          if (singleComment.id === action.payload.comment.id) {
            singleComment.comment = action.payload.comment;
          }
          console.log(singleComment.id, action.payload.comment.id);
          return singleComment;
        }),
      };
    default:
      return state;
  }
};

export default comments;
