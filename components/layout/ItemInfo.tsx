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
      <div className="divide-y-[1px] divide-dashed bg-white px-4 [&>article>input]:font-bold [&>article>input]:outline-none [&>article]:grid [&>article]:py-2">
        <article>
          <label htmlFor="name">Name</label>
          <input type="text" value={itemsList[selectedItem].name} />
        </article>
        <article>
          <label htmlFor="username">Username/Email</label>
          <input type="text" value={itemsList[selectedItem].userName} />
        </article>
        <article>
          <label htmlFor="password">Password</label>
          <input type="password" value={itemsList[selectedItem].password} />
        </article>
      </div>
    </section>
  );
};

export default ItemInfo;
