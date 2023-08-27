import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Customer } from "../../store/actions";
import { isEmpty, isFormValid } from "./../../helpers";

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

const AddModal = ({ isOpen, setIsOpen, data }) => {
  const [form, setForm] = useState({
    data: {
      name: "",
      email: "",
      image: "",
    },
  });
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const addCustomer = () => {
    if (!isFormValid(form.data, setForm).includes(false)) {
      const data = JSON.parse(localStorage.getItem("customers"));
      dispatch(
        Customer.addCustomer({
          id: data?.count + 1,
          first_name: form?.data?.name.split(" ")[0],
          last_name: form?.data?.name.split(" ")[1],
          email: form?.data?.email,
          avatar: form.data.image,
          image_name: image,
        })
      );
      setForm({
        ...form,
        data: { name: "", email: "", image: "" },
        errors: {},
      });
      setImage("");
      setIsOpen(false);
    }
  };

  const editCustomer = () => {
    if (!isFormValid(form.data, setForm).includes(false)) {
      dispatch(
        Customer.editCustomer({
          id: data?.id,
          first_name: form?.data?.name.split(" ")[0],
          last_name: form?.data?.name.split(" ")[1],
          email: form?.data?.email,
          avatar: form?.data?.image,
          image_name: image,
        })
      );
      setForm({
        ...form,
        data: { name: "", email: "", image: "" },
        errors: {},
      });
      setImage("");
      setIsOpen(false);
    }
  };

  const chooseFile = (e) => {
    setImage(e.target.files[0]?.name);
    var reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, data: { ...form.data, image: reader.result } });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const changeValue = (key, value) => {
    setForm({ ...form, data: { ...form.data, [key]: value } });
  };

  useEffect(() => {
    if (!isEmpty(data)) {
      setForm({
        data: {
          name: `${data.first_name} ${data.last_name}`,
          email: data.email,
          image: data.avatar,
        },
      });
      setImage(data.image_name ? data.image_name : data.avatar);
    }
    return () => {
      setForm({ data: {} });
      setImage();
    };
  }, [data]);

  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <div className="bg-[#F3F3F3] h-full">
        <div className="flex flex-col justify-center items-center py-7 px-5 modal-bg text-white">
          <AiOutlineClose
            size={20}
            className="self-end cursor-pointer mb-11"
            onClick={() => setIsOpen(false)}
          />
          <span className="text-40 font-semibold">
            {!isEmpty(data) ? "Edit Customer" : "Add New Customer"}
          </span>
        </div>
        <div className="flex flex-col py-7 px-5">
          <div className="mb-7">
            <input
              type="text"
              className={`text-base w-full p-4 rounded-lg border ${
                form?.errors?.name ? "border-red-600" : "border-gray-300"
              }`}
              placeholder="Customer Name"
              value={form.data.name}
              onChange={(e) => changeValue("name", e.target.value)}
            />
            <p className="mt-2 text-red-600">{form?.errors?.name}</p>
          </div>
          <div>
            <input
              type="email"
              className={`text-base p-4 w-full rounded-lg border ${
                form?.errors?.email ? "border-red-600" : "border-gray-300"
              }`}
              placeholder="Email"
              value={form.data.email}
              onChange={(e) => changeValue("email", e.target.value)}
            />
            <p className="mt-2 text-red-600">{form?.errors?.email}</p>
          </div>
          <div className="mt-7">
            <div className="relative flex items-center cursor-pointer">
              <p className="underline text-silverTree">Upload Photo</p>
              <p className="ml-2">{image}</p>
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="w-full absolute h-full opacity-0 cursor-pointer"
                onChange={chooseFile}
              />
            </div>
            <p className="mt-2 text-red-600">{form?.errors?.image}</p>
          </div>
          {isEmpty(data) ? (
            <button
              className="text-white py-5 rounded-lg bg-gradient-to-r from-silverTree to-sherphaBlue mt-16 text-lg text-center"
              onClick={addCustomer}
            >
              ADD CUSTOMER
            </button>
          ) : (
            <button
              className="text-white py-5 rounded-lg bg-gradient-to-r from-silverTree to-sherphaBlue mt-16 text-lg text-center"
              onClick={editCustomer}
            >
              Edit CUSTOMER
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default AddModal;
