import { GET_CARDS, REMOVE_CARDS } from "../action";

const initialState = {
  content: [],
};

const cards = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        content: action.payload,
      };
    case REMOVE_CARDS:
      return {
        content: null,
      };
    default:
      return state;
  }
};

export default cards;
