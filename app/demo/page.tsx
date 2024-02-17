import ItemInfo from "@/components/layout/ItemInfo";
import ItemsCategory from "@/components/layout/ItemsCategory";
import Items from "@/components/layout/Items";

const page = () => {
  return (
    <div className="flex">
      <ItemsCategory />
      <Items />
      <ItemInfo />
    </div>
  );
};

export default page;
