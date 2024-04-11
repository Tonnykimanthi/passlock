import ItemInfo from "@/components/layout/ItemInfo";
import Items from "@/components/layout/Items";

const page = () => {
  return (
    <div className="flex">
      <Items />
      <section className="flex basis-2/3 flex-col max-sm:hidden sm:px-5 md:px-8">
        <ItemInfo />
      </section>
    </div>
  );
};

export default page;
