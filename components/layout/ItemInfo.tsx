"use client";

import { useContext, useState } from "react";
import AddItemForm from "../ui/AddItemForm";
import { AppContext, Context } from "@/context/Store";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const ItemInfo = () => {
  const { selectedItem, itemsList, handleFormIsOpen } = useContext(
    AppContext,
  ) as Context;
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  return (
    <section className="flex basis-3/4 flex-col px-2 sm:px-5 md:px-8">
      <div className="my-2">
        <h5 className="pl-4 text-2xl font-bold text-accentDark">Item Info</h5>
      </div>
      <AddItemForm />
      <div className="divide-y-[1px] divide-dashed bg-white px-4 [&>article>div>input]:font-bold [&>article>div>input]:outline-none [&>article]:grid [&>article]:py-2">
        <article>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={itemsList[selectedItem].name}
            className="font-bold outline-none"
          />
        </article>
        <article>
          <label htmlFor="username">Username/Email</label>
          <div>
            <input type="text" value={itemsList[selectedItem].userName} />
          </div>
        </article>
        <article>
          <label htmlFor="password">Password</label>
          <div className="flex justify-between">
            <input
              type={`${passwordIsVisible ? "text" : "password"}`}
              value={itemsList[selectedItem].password}
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
      </div>
    </section>
  );
};

export default ItemInfo;
