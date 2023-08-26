import axios from "axios";
import ActionTypes from "../../actionTypes";

const getCustomers = (page) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_CUSTOMER_REQUEST });
  try {
    const { data } = await axios.get(
      `https://reqres.in/api/users?page=${page}`
    );
    localStorage.setItem(
      "customers",
      JSON.stringify({ customers: data.data, count: data.total })
    );
    dispatch({
      type: ActionTypes.GET_CUSTOMER_SUCCESS,
      payload: { customers: data.data, count: data.total },
    });
  } catch (err) {
    dispatch({ type: ActionTypes.GET_CUSTOMER_FAIL, payload: err.message });
  }
};

const deleteCustomer = (id) => async (dispatch) => {
  try {
    const data = JSON.parse(localStorage.getItem("customers"));
    const newData = data?.customers?.filter((x) => x.id !== id);
    localStorage.setItem(
      "customers",
      JSON.stringify({ customers: newData, count: data.total })
    );
    dispatch({
      type: ActionTypes.DELETE_CUSTOMER_SUCCESS,
      payload: { customers: newData, count: data.total },
    });
  } catch (err) {
    dispatch({ type: ActionTypes.DELETE_CUSTOMER_FAIL, payload: err.message });
  }
};

export { getCustomers, deleteCustomer };
