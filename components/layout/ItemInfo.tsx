"use client";

import { useContext, useState } from "react";
import AddItemForm from "../ui/AddItemForm";
import { AppContext, Context } from "@/context/Store";
// Icons
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const ItemInfo = () => {
  const {
    selectedItem,
    itemsList,
    handleFormIsOpen,
    handleDeleteItem,
    setFormType,
    setNameField,
    setUserNameField,
    setPasswordField,
  } = useContext(AppContext) as Context;
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const handleEditButton = () => {
    handleFormIsOpen();
    setFormType("Edit");
    setNameField(itemsList[selectedItem].name);
    setUserNameField(itemsList[selectedItem].userName);
    setPasswordField(itemsList[selectedItem].password);
  };

  return (
    <>
      <div className="my-2 flex items-center justify-between">
        <h5 className="pl-4 text-2xl font-bold text-accentDark">Item Info</h5>
        <button
          className="rounded-sm border border-sky-200 px-2"
          onClick={handleEditButton}
        >
          <CiEdit className="h-7 w-7 text-sky-600 transition hover:scale-110" />
        </button>
        <button onClick={handleDeleteItem}>
          <MdOutlineDeleteSweep className="h-7 w-7 text-orange-600 transition hover:scale-110" />
        </button>
      </div>
      <AddItemForm />
      <div className="divide-y-[1px] divide-dashed bg-white px-4 [&>article>div>input]:w-full [&>article>div>input]:font-bold [&>article>div>input]:outline-none [&>article>input]:w-full [&>article]:grid [&>article]:py-2">
        {itemsList[selectedItem] && (
          <>
            <article>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={itemsList[selectedItem].name}
                readOnly
                className="font-bold outline-none"
              />
            </article>
            <article>
              <label htmlFor="username">Username/Email</label>
              <div>
                <input
                  type="text"
                  value={itemsList[selectedItem].userName}
                  readOnly
                />
              </div>
            </article>
            <article>
              <label htmlFor="password">Password</label>
              <div className="flex justify-between">
                <input
                  type={`${passwordIsVisible ? "text" : "password"}`}
                  value={itemsList[selectedItem].password}
                  readOnly
                />
                <IoEyeOffOutline
                  className={`h-6 w-6 cursor-pointer ${passwordIsVisible ? "hidden" : ""}`}
                  onClick={() => setPasswordIsVisible(true)}
                />
                <IoEyeOutline
                  className={`${passwordIsVisible ? "" : "hidden"} h-6 w-6 cursor-pointer`}
                  onClick={() => setPasswordIsVisible(false)}
                />
              </div>
            </article>
          </>
        )}
      </div>
    </>
  );
};

export default ItemInfo;
