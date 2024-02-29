"use client";

import { useContext } from "react";
import AddItemForm from "../ui/AddItemForm";
import { AppContext, Context } from "@/context/context";

const ItemInfo = () => {
  const { selectedItem, itemsList, handleFormIsOpen } = useContext(
    AppContext,
  ) as Context;

  return (
    <section className="flex basis-1/2 flex-col px-2 sm:px-5 md:px-8">
      <div className="my-2 flex items-center justify-between">
        <h5 className="pl-4 text-2xl font-bold text-accentDark">Item Info</h5>
        <button
          className="rounded bg-primary p-1.5 text-white transition hover:bg-primaryDark md:px-5 lg:px-8"
          onClick={handleFormIsOpen}
        >
          Add Item
        </button>
      </div>
      <AddItemForm />
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
