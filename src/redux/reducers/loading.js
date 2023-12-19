import { SUCCESS_TRUE, SUCCESS_FALSE, ERROR_TRUE, ERROR_FALSE, LOADING_TRUE, LOADING_FALSE } from "../action";

const initialState = {
  error: false,
  errorText: "",
  loading: false,
  success: false,
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_TRUE:
      return {
        ...state,
        error: true,
        errorText: action.payload,
      };
    case ERROR_FALSE:
      return {
        ...state,
        error: false,
        errorText: "",
      };
    case SUCCESS_TRUE:
      return {
        ...state,
        success: true,
      };
    case SUCCESS_FALSE:
      return {
        ...state,
        success: false,
      };
    case LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default loading;
