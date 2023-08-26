import ActionTypes from "../../actionTypes";

const INITIAL_STATE = {
  getCustomer: {
    loading: false,
    data: JSON.parse(localStorage.getItem("customers")),
    error: null,
  },
};

const CustomerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_CUSTOMER_REQUEST:
      return {
        ...state,
        getCustomer: {
          ...state.getCustomer,
          loading: true,
        },
      };

    case ActionTypes.GET_CUSTOMER_SUCCESS:
      return {
        ...state,
        getCustomer: {
          ...state.getCustomer,
          loading: false,
          data: action.payload,
        },
      };

    case ActionTypes.GET_CUSTOMER_FAIL:
      return {
        ...state,
        getCustomer: {
          ...state.getCustomer,
          loading: false,
          error: action.payload,
        },
      };

    case ActionTypes.DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        getCustomer: {
          ...state.getCustomer,
          data: action.payload,
        },
      };

    case ActionTypes.DELETE_CUSTOMER_FAIL:
      return {
        ...state,
        getCustomer: {
          ...state.getCustomer,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};

export default CustomerReducer;
