import axios from "axios";
import ActionTypes from "../../actionTypes";

const getCustomers = (page) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_CUSTOMER_REQUEST });
  try {
    const { data } = await axios.get(
      `https://reqres.in/api/users?page=${page}`
    );
    dispatch({
      type: ActionTypes.GET_CUSTOMER_SUCCESS,
      payload: { customers: data.data, count: data.total },
    });
  } catch (err) {
    dispatch({ type: ActionTypes.GET_CUSTOMER_FAIL, payload: err.message });
  }
};

export { getCustomers };
