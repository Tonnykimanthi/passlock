import { BsGrid3X3Gap } from "react-icons/bs";

const ItemsCategory = () => {
  return (
    <aside className="h-screen flex-1 bg-slate-200 px-2 py-2 md:px-5 lg:px-8">
      <button className="text-primaryDark flex items-center gap-x-4">
        <BsGrid3X3Gap className="h-6 w-6" />
        <span className="text-lg">All Items</span>
      </button>
      <button className="text-primaryDark flex items-center gap-x-4">
        <BsGrid3X3Gap className="h-6 w-6" />
        <span className="text-lg">All Items</span>
      </button>
    </aside>
  );
};

export default ItemsCategory;
