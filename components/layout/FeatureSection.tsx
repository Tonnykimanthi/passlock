import Feature from "../ui/Feature";

const FeaturesSection = () => {
  return (
    <section className="mt-5">
      <h2 className="text-center text-2xl font-bold">Features</h2>
      <ul className="flex gap-x-4 px-2 sm:px-5 md:px-8">
        <Feature />
      </ul>
    </section>
  );
};

export default FeaturesSection;
