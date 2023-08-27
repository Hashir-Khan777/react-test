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
      JSON.stringify({ customers: newData, count: data.count })
    );
    dispatch({
      type: ActionTypes.DELETE_CUSTOMER_SUCCESS,
      payload: { customers: newData, count: data.count },
    });
  } catch (err) {
    dispatch({ type: ActionTypes.DELETE_CUSTOMER_FAIL, payload: err.message });
  }
};

const addCustomer = (customer) => async (dispatch) => {
  try {
    const data = JSON.parse(localStorage.getItem("customers"));
    data?.customers?.push(customer);
    localStorage.setItem(
      "customers",
      JSON.stringify({ ...data, count: data.count + 1 })
    );
    dispatch({
      type: ActionTypes.ADD_CUSTOMER_SUCCESS,
      payload: { ...data, count: data.count + 1 },
    });
  } catch (err) {
    dispatch({ type: ActionTypes.ADD_CUSTOMER_FAIL, payload: err.message });
  }
};

const editCustomer = (updatedCustomer) => async (dispatch) => {
  try {
    const data = JSON.parse(localStorage.getItem("customers"));
    const index = data?.customers?.findIndex(
      (x) => x.id === updatedCustomer.id
    );
    data.customers[index] = updatedCustomer;
    localStorage.setItem("customers", JSON.stringify(data));
    dispatch({
      type: ActionTypes.EDIT_CUSTOMER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: ActionTypes.EDIT_CUSTOMER_FAIL, payload: err.message });
  }
};

export { getCustomers, deleteCustomer, addCustomer, editCustomer };
