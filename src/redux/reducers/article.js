import { GET_ARTICLE } from "../action";

const initialState = {
  content: null,
};

const article = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLE:
      return {
        content: action.payload,
      };
    default:
      return state;
  }
};

export default article;
