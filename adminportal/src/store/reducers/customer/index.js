import ActionTypes from "../../actionTypes";

const INITIAL_STATE = {
  getCustomer: {
    loading: true,
    data: [],
    error: null,
  },
};

const CustomerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_CUSTOMER_REQUEST:
      return {
        ...state,
        getCustomer: {
          loading: true,
        },
      };

    case ActionTypes.GET_CUSTOMER_SUCCESS:
      return {
        ...state,
        getCustomer: {
          loading: false,
          data: action.payload,
        },
      };

    case ActionTypes.GET_CUSTOMER_FAIL:
      return {
        ...state,
        getCustomer: {
          loading: false,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};

export default CustomerReducer;
