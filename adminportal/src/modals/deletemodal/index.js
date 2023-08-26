import React from "react";
import Modal from "react-modal";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Customer } from "../../store/actions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    width: "528px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};

const DeleteModal = ({ isOpen, setIsOpen, customerId }) => {
  const dispatch = useDispatch();

  const deleteCustomer = () => {
    dispatch(Customer.deleteCustomer(customerId));
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <div className="flex flex-col justify-center items-center my-7 mx-5">
        <AiOutlineClose
          size={20}
          className="self-end cursor-pointer mb-11"
          onClick={() => setIsOpen(false)}
        />
        <RiDeleteBin6Line size={85} className="text-red-700" />
        <p className="text-center text-3xl font-bold my-6">Are you sure?</p>
        <p className="text-center text-22">
          Do you really want to delete this customer? This process can not be
          undone.
        </p>
        <div className="mt-16 flex justify-evenly w-full">
          <button
            className="text-base text-white bg-[#A5A5AF] py-2 px-10 rounded"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button
            className="text-base text-white bg-red-700 py-2 px-10 rounded"
            onClick={deleteCustomer}
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
