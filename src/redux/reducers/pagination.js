import { GET_PAGINATION, ACTIVE_PAGE } from "../action";

const initialState = {
  numberPages: 0,
  pageActive: 0,
};

const pagination = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAGINATION:
      return {
        numberPages: action.payload,
      };
    case ACTIVE_PAGE:
      return {
        pageActive: action.payload,
      };
    default:
      return state;
  }
};

export default pagination;
