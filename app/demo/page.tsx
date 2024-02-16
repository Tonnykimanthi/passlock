import ItemInfo from "@/components/layout/ItemInfo";
import ItemsCategory from "@/components/layout/ItemsCategory";
import ItemsList from "@/components/layout/ItemsList";

const page = () => {
  return (
    <div className="flex">
      <ItemsCategory />
      <ItemsList />
      <ItemInfo />
    </div>
  );
};

export default page;
