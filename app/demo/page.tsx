import ItemInfo from "@/components/layout/ItemInfo";
import Items from "@/components/layout/Items";

const page = () => {
  return (
    <div className="flex">
      <Items />
      <ItemInfo />
    </div>
  );
};

export default page;
