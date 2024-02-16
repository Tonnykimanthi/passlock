import Image from "next/image";
import shield from "../../public/shield.png";

const Feature = () => {
  return (
    <div className="mt-4 rounded-lg border border-accent p-4">
      <Image src={shield} width={64} height={64} alt="Shield icon" />
      <h3 className="text-lg font-semibold">Secure Password Storage</h3>
      <p className="mt-">
        Safely store all your passwords and login credentials in one encrypted
        vault, accessible only by you.
      </p>
    </div>
  );
};

export default Feature;
