"use client";

import { AppContext, Context } from "@/context/Store";
import { useContext } from "react";

const ItemsList = () => {
  const { itemsList, handleSelectedItem, selectedItem } = useContext(
    AppContext,
  ) as Context;

  return (
    <section className="basis-1/3 cursor-pointer space-y-2 border-t border-secondary bg-white px-2 py-2">
      {itemsList?.map((item, index) => (
        <label
          htmlFor={`item-${index}`}
          key={index}
          className="flex cursor-pointer items-center gap-x-2 border-l-4 border-transparent px-2 transition-all duration-300 has-[:checked]:border-primary has-[:checked]:bg-accent/10"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent text-lg font-medium">
            {item.name.slice(0, 1).toUpperCase()}
          </span>
          <div>
            <h5 className="text-lg font-medium">{item.name}</h5>
            <p className="text-sm text-slate-500">{item.userName}</p>
          </div>
          <input
            type="radio"
            name="item"
            id={`item-${index}`}
            className="appearance-none"
            onChange={() => handleSelectedItem(index)}
            checked={selectedItem === index}
          />
        </label>
      ))}
    </section>
  );
};

export default ItemsList;
