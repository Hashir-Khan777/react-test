import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Customer } from "../../store/actions";

let page = 1;
const Portal = () => {
  const dispatch = useDispatch();

  const { getCustomer } = useSelector((state) => state.customer);

  console.log(getCustomer, "getCustomer");

  useEffect(() => {
    dispatch(Customer.getCustomers(page));
  }, [dispatch]);

  return <div>Portal</div>;
};

export default Portal;
