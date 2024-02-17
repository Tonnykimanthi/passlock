import { itemList } from "@/data/itemList";

const ItemsList = () => {
  return (
    <section className="basis-1/4 border-t border-secondary bg-white py-2">
      {itemList.map((item) => (
        <article className="flex items-center gap-x-2 border-l-4 border-primary px-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent">
          A
        </span>
        <div>
          <h5 className="text-lg font-medium">{item.name}</h5>
          <p className="text-sm text-slate-500">{item.userName}</p>
        </div>
      </article>
      ))}
    </section>
  );
};

export default ItemsList;
