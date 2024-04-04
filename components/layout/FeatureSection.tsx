import Feature from "../ui/Feature";

const FeaturesSection = () => {
  return (
    <section className="py-5">
      <h2 className="text-center text-2xl font-bold">Features</h2>
      <ul className="flex max-md:flex-col gap-x-4 px-2 sm:px-5 md:px-8">
        <Feature />
      </ul>
    </section>
  );
};

export default FeaturesSection;
