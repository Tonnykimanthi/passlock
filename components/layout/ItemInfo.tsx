"use client";

import { useContext } from "react";
import AddItemForm from "../ui/AddItemForm";
import { AppContext, Context } from "@/context/context";

const ItemInfo = () => {
  const { selectedItem, itemsList, handleFormIsOpen } = useContext(
    AppContext,
  ) as Context;

  return (
    <section className="flex basis-1/2 flex-col px-2 md:px-5 lg:px-8">
      <button
        className="self-end bg-primary hover:bg-primaryDark transition py-1.5 rounded text-white md:px-5 lg:px-8"
        onClick={handleFormIsOpen}
      >
        Add Item
      </button>
      <AddItemForm />
      <h5 className="px-4 text-2xl font-bold text-accentDark">Item Info</h5>
      <div className="divide-y-[1px] divide-dashed bg-white px-4 [&>article>p]:font-bold [&>article]:py-2">
        <article>
          <span>Name</span>
          <p>{itemsList[selectedItem].name}</p>
        </article>
        <article>
          <span>Username/Email</span>
          <p>{itemsList[selectedItem].userName}</p>
        </article>
        <article>
          <span>Password</span>
          <p>{itemsList[selectedItem].password}</p>
        </article>
      </div>
    </section>
  );
};

export default ItemInfo;
