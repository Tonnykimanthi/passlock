import Image from "next/image";
import { featureList } from "@/data/featureList";

const Feature = () => {
  return (
    <>
      {featureList.map((item, index) => (
        <li key={index} className="mt-4 rounded-lg border border-accent p-4">
          <Image src={item.icon} width={64} height={64} alt="Shield icon" />
          <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
          <p className="mt-1">{item.description}</p>
        </li>
      ))}
    </>
  );
};

export default Feature;
