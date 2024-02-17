import { BsGrid3X3Gap } from "react-icons/bs";

const ItemsCategory = () => {
  return (
    <aside className="h-screen basis-1/4 bg-secondary/20 px-2 py-2 md:px-5 lg:px-8">
      <button className="flex items-center gap-x-4 text-primaryDark">
        <BsGrid3X3Gap className="h-6 w-6" />
        <span className="text-lg">All Items</span>
      </button>
      <button className="flex items-center gap-x-4 text-primaryDark">
        <BsGrid3X3Gap className="h-6 w-6" />
        <span className="text-lg">All Items</span>
      </button>
    </aside>
  );
};

export default ItemsCategory;
