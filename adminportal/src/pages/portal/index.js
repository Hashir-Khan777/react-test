import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Customer } from "../../store/actions";
import { Spinner } from "./../../components";
import { IoAdd } from "react-icons/io5";
import {
  TiArrowUnsorted,
  TiArrowSortedUp,
  TiArrowSortedDown,
} from "react-icons/ti";
import DeleteModal from "../../modals/deletemodal";
import { isEmpty } from "../../helpers";

let page = 1;
const Portal = () => {
  const data = JSON.parse(localStorage.getItem("customers"));

  const [deleteModal, setDeleteModal] = useState({ open: false, id: null });

  const [sortDir, setSetsortDir] = useState({ dir: null, tab: null });

  const dispatch = useDispatch();

  const { getCustomer } = useSelector((state) => state.customer);

  const sort = (dir, tab) => {
    if (dir === "asc") {
      getCustomer?.data?.customers?.sort((a, b) =>
        a[tab].toString().toLowerCase() < b[tab].toString().toLowerCase()
          ? -1
          : 1
      );
    } else {
      getCustomer?.data?.customers?.sort((a, b) =>
        a[tab].toString().toLowerCase() > b[tab].toString().toLowerCase()
          ? -1
          : 1
      );
    }
    setSetsortDir({ dir, tab });
  };

  useEffect(() => {
    if (isEmpty(data)) {
      dispatch(Customer.getCustomers(page));
    }
  }, [dispatch, data]);

  return (
    <div className="h-screen xs:px-5 large:px-17 py-12">
      <button className="text-white flex items-center px-9 py-6 rounded-lg bg-gradient-to-r from-silverTree to-sherphaBlue">
        <IoAdd size={19} />
        <span className="text-xl pl-10">ADD NEW CUSTOMER</span>
      </button>
      {getCustomer?.loading ? (
        <div className="flex items-center justify-center h-full">
          <Spinner />
        </div>
      ) : (
        <div>
          <table className="xs:hidden desktop:table table-auto w-full mt-18 border-separate border-spacing-y-7">
            <thead className="bg-[#c5e3d5]">
              <tr>
                <th className="py-4 rounded-s-xl"></th>
                <th className="py-4">
                  <div
                    className="flex items-center justify-center text-primaryGreen text-22 cursor-pointer"
                    onClick={() =>
                      sort(
                        sortDir.dir === "asc"
                          ? "desc"
                          : sortDir.dir === "desc"
                          ? "asc"
                          : "asc",
                        "id"
                      )
                    }
                  >
                    <p>Customer ID#</p>
                    {sortDir.tab === "id" ? (
                      sortDir.dir === "asc" ? (
                        <TiArrowSortedUp />
                      ) : sortDir.dir === "desc" ? (
                        <TiArrowSortedDown />
                      ) : (
                        <TiArrowUnsorted />
                      )
                    ) : (
                      <TiArrowUnsorted />
                    )}
                  </div>
                </th>
                <th className="py-4">
                  <div
                    className="flex items-center justify-center text-primaryGreen text-22 cursor-pointer"
                    onClick={() =>
                      sort(
                        sortDir.dir === "asc"
                          ? "desc"
                          : sortDir.dir === "desc"
                          ? "asc"
                          : "asc",
                        "first_name"
                      )
                    }
                  >
                    <p>Customer Name</p>
                    {sortDir.tab === "first_name" ? (
                      sortDir.dir === "asc" ? (
                        <TiArrowSortedUp />
                      ) : sortDir.dir === "desc" ? (
                        <TiArrowSortedDown />
                      ) : (
                        <TiArrowUnsorted />
                      )
                    ) : (
                      <TiArrowUnsorted />
                    )}
                  </div>
                </th>
                <th className="py-4">
                  <div
                    className="flex items-center justify-center text-primaryGreen text-22 cursor-pointer"
                    onClick={() =>
                      sort(
                        sortDir.dir === "asc"
                          ? "desc"
                          : sortDir.dir === "desc"
                          ? "asc"
                          : "asc",
                        "email"
                      )
                    }
                  >
                    <p>Email</p>
                    {sortDir.tab === "email" ? (
                      sortDir.dir === "asc" ? (
                        <TiArrowSortedUp />
                      ) : sortDir.dir === "desc" ? (
                        <TiArrowSortedDown />
                      ) : (
                        <TiArrowUnsorted />
                      )
                    ) : (
                      <TiArrowUnsorted />
                    )}
                  </div>
                </th>
                <th className="py-4 rounded-e-xl"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {getCustomer?.data?.customers?.map((customer) => (
                <tr key={customer?.id}>
                  <td className="text-center rounded-s-xl py-3 pl-4">
                    <img
                      src={customer?.avatar}
                      className="w-26 h-25 rounded-xl"
                    />
                  </td>
                  <td className="text-center">{customer?.id}</td>
                  <td className="text-center text-silverTree underline">
                    <span className="cursor-pointer">
                      {customer?.first_name} {customer?.last_name}
                    </span>
                  </td>
                  <td className="text-center">{customer?.email}</td>
                  <td className="text-center rounded-e-xl">
                    <button className="mr-7 text-base text-green-700 bg-green-300 py-2 px-10 rounded">
                      Edit
                    </button>
                    <button
                      className="text-base text-red-700 bg-red-300 py-2 px-10 rounded"
                      onClick={() =>
                        setDeleteModal({ open: true, id: customer?.id })
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {getCustomer?.data?.customers?.map((customer) => (
            <div key={customer?.id} className="my-18 desktop:hidden">
              <div className="flex rounded-ss-lg">
                <div className="flex justify-center h-auto text-white bg-primaryGreen py-3 w-36 rounded-ss-lg">
                  <span className="self-center text-center"></span>
                </div>
                <div className="p-2 border border-gray-300 flex-1">
                  <img
                    src={customer?.avatar}
                    className="w-26 h-25 rounded-xl"
                  />
                </div>
              </div>
              <div className="flex">
                <div className="flex justify-center h-auto text-white bg-primaryGreen py-3 w-36">
                  <span className="self-center text-center">Customer ID#</span>
                </div>
                <div className="p-2 border border-gray-300 flex-1">
                  <span>{customer?.id}</span>
                </div>
              </div>
              <div className="flex">
                <div className="flex justify-center h-auto text-white bg-primaryGreen py-3 w-36">
                  <span className="self-center text-center">Customer Name</span>
                </div>
                <div className="p-2 border border-gray-300 flex-1">
                  <span className="text-silverTree underline cursor-pointer">
                    {customer?.first_name} {customer?.last_name}
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="flex justify-center h-auto text-white bg-primaryGreen py-3 w-36">
                  <span className="self-center text-center">Email</span>
                </div>
                <div className="p-2 border border-gray-300 flex-1">
                  <span>{customer?.email}</span>
                </div>
              </div>
              <div className="flex">
                <div className="flex justify-center h-auto text-white bg-primaryGreen py-4 w-36 rounded-es-lg">
                  <span className="self-center text-center"></span>
                </div>
                <div className="p-2 border border-gray-300 flex-1">
                  <button className="mr-7 text-base text-green-700 bg-green-300 py-2 px-10 rounded">
                    Edit
                  </button>
                  <button
                    className="text-base text-red-700 bg-red-300 py-2 px-10 rounded"
                    onClick={() =>
                      setDeleteModal({ open: true, id: customer?.id })
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <DeleteModal
        isOpen={deleteModal.open}
        customerId={deleteModal.id}
        setIsOpen={setDeleteModal}
      />
    </div>
  );
};

export default Portal;
