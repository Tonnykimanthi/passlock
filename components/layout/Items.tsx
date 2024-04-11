"use client";

import { AppContext, Context } from "@/context/Store";
import { useContext, useEffect } from "react";
import ItemInfo from "./ItemInfo";

const ItemsList = () => {
  const { itemsList, setItemsList, handleSelectedItem, selectedItem } =
    useContext(AppContext) as Context;

  useEffect(() => {
    const storedValue = JSON.parse(localStorage.getItem("itemsList") || "[]");

    if (storedValue.length > 0) {
      setItemsList(storedValue);
    }
  }, []);

  return (
    <section className="basis-1/3 cursor-pointer border-t border-secondary bg-white px-2 py-2 max-sm:basis-full">
      {itemsList?.map((item, index) => (
        <article key={index}>
          <label
            htmlFor={`item-${index}`}
            className="peer flex cursor-pointer items-center gap-x-2 border-l-4 border-transparent px-2 py-1 transition-all duration-300 has-[:checked]:border-primary has-[:checked]:bg-accent/10"
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
          <div
            className={`overflow-hidden rounded-b-md border-x border-b border-primaryDark/50 max-sm:hidden peer-has-[:checked]:max-sm:block sm:hidden`}
          >
            <ItemInfo />
          </div>
        </article>
      ))}
    </section>
  );
};

export default ItemsList;
