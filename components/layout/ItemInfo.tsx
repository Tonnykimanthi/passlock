"use client";

import { useContext } from "react";
import AddItemForm from "../ui/AddItemForm";
import { AppContext, Context } from "@/context/context";

const ItemInfo = () => {
  const { selectedItem, itemsList } = useContext(AppContext) as Context;

  return (
    <section className="flex- flex basis-1/2 flex-col px-2 md:px-5 lg:px-8">
      <button className="self-end bg-blue-500 py-1 text-white md:px-5 lg:px-8">
        Add Item
      </button>
      <AddItemForm />
      <h5 className="text-4xl text-black">{itemsList[selectedItem]?.name}</h5>
    </section>
  );
};

export default ItemInfo;
