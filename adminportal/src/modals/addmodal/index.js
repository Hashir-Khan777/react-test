import React from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Customer } from "../../store/actions";
import { IoAdd } from "react-icons/io5";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    padding: "0px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};

const AddModal = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  const addCustomer = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <div className="bg-[#F3F3F3] h-full">
        <div className="flex flex-col justify-center items-center py-7 px-5 modal-bg text-white">
          <AiOutlineClose
            size={20}
            className="self-end cursor-pointer mb-11"
            onClick={() => setIsOpen(false)}
          />
          <span className="text-40 font-semibold">Add New Customer</span>
        </div>
        <div className="flex flex-col py-7 px-5">
          <input
            type="text"
            className="text-base p-4 mb-7 rounded-lg border border-gray-300"
            placeholder="Customer Name"
          />
          <input
            type="text"
            className="text-base p-4 rounded-lg border border-gray-300"
            placeholder="Email"
          />
          <input type="file" className="mt-7" placeholder="Email" />
          <button className="text-white py-5 rounded-lg bg-gradient-to-r from-silverTree to-sherphaBlue mt-16 text-lg text-center">
            ADD CUSTOMER
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddModal;
